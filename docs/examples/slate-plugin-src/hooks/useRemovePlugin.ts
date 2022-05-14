import type { DataTType } from '@react-page/editor';
import { useCallback } from 'react';
import type { Editor } from 'slate';
import { Transforms } from 'slate';

import { useSlate } from 'slate-react';
import type { SlatePluginDefinition } from '../types/slatePluginDefinitions';
import getCurrentData from '../utils/getCurrentData';

export const removePlugin = <T extends DataTType>(
  editor: Editor,
  plugin: SlatePluginDefinition<T>
) => {
  if (plugin.customRemove) {
    plugin.customRemove(editor);
  } else if (plugin.pluginType === 'component') {
    if (plugin.object === 'mark') {
      editor.removeMark(plugin.type);
    } else if (plugin.object === 'inline') {
      if (plugin.isVoid) {
        Transforms.removeNodes(editor, {
          match: (elem) => elem.type === plugin.type,
        });
      } else {
        Transforms.unwrapNodes(editor, {
          match: (elem) => elem.type === plugin.type,
        });
      }
      // Transforms.setNodes(editor, { type: null });
    } else if (plugin.object === 'block') {
      if (plugin.isVoid) {
        Transforms.removeNodes(editor, {
          match: (elem) => elem.type === plugin.type,
        });
      } else if (plugin.replaceWithDefaultOnRemove) {
        Transforms.setNodes(editor, {
          type: null,
        });
      } else {
        Transforms.unwrapNodes(editor, {
          match: (elem) => elem.type === plugin.type,
          split: true,
        });
      }
    }
  } else if (plugin.pluginType === 'data') {
    if (!plugin.properties) {
      // can't be removed
    } else {
      const existingData = getCurrentData(editor);

      const dataWithout = Object.keys(existingData).reduce((acc, key) => {
        if (plugin.properties?.includes(key)) {
          return acc;
        }
        return {
          ...acc,
          [key]: existingData[key],
        };
      }, {});
      Transforms.setNodes(editor, {
        data: dataWithout,
      });
    }
  }
};
export default <T extends DataTType>(plugin: SlatePluginDefinition<T>) => {
  const editor = useSlate();
  return useCallback(() => removePlugin(editor, plugin), []);
};
