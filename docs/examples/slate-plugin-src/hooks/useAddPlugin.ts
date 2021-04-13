import { useCallback } from 'react';
import { Transforms } from 'slate';
import type { ReactEditor } from 'slate-react';
import { useSlate } from 'slate-react';
import type { SlatePluginDefinition } from '../types/slatePluginDefinitions';
import { getCurrentNodeWithPlugin } from './useCurrentNodeWithPlugin';
import { removePlugin } from './useRemovePlugin';
import getCurrentData from '../utils/getCurrentData';

export const addPlugin = <T>(
  editor: ReactEditor,
  plugin: SlatePluginDefinition<T>,
  props?: { data?: T; text?: string }
) => {
  const { data: passedData, text } = props || {};
  const currentNodeEntry = getCurrentNodeWithPlugin(editor, plugin);
  if (text) {
    const withExtraSpace =
      plugin.pluginType === 'component' &&
      plugin.object === 'inline' &&
      plugin.addExtraSpace;
    const textToInsert = withExtraSpace ? text + ' ' : text;
    editor.insertText(textToInsert);
    Transforms.select(editor, {
      anchor: editor.selection.anchor,
      focus: {
        ...editor.selection.focus,
        offset: editor.selection.focus.offset - textToInsert.length,
      },
    });
  }

  const data =
    passedData || (plugin.getInitialData ? plugin.getInitialData() : null);
  const isActive = Boolean(currentNodeEntry);

  if (isActive) {
    Transforms.select(editor, currentNodeEntry[1]);
    removePlugin(editor, plugin);
  }
  // add new
  if (plugin.customAdd) {
    plugin.customAdd(editor);
  } else if (plugin.pluginType === 'component') {
    if (plugin.object === 'mark') {
      editor.addMark(plugin.type, data || true);
    } else {
      if (plugin.object === 'block' && plugin.replaceWithDefaultOnRemove) {
        Transforms.setNodes(editor, { type: plugin.type, data });
      } else {
        Transforms.wrapNodes(
          editor,
          {
            type: plugin.type,

            children: [],
            data,
          },
          { split: true }
        );
        // workaround for inline problems in slate
        if (
          plugin.object === 'inline' &&
          plugin.addExtraSpace &&
          !text &&
          editor.selection
        ) {
          const focus = { ...editor.selection.focus };
          Transforms.insertText(editor, ' ', {
            at: editor.selection.focus,
          });
          Transforms.select(editor, focus);
        }
      }
    }
  } else if (plugin.pluginType === 'data') {
    const existingData = getCurrentData(editor);
    Transforms.setNodes(editor, {
      data: {
        ...existingData,
        ...data,
      },
    });
  }
};

export default <T>(plugin: SlatePluginDefinition<T>) => {
  const editor = useSlate();
  return useCallback(
    (props?: { data?: T; text?: string }) => addPlugin(editor, plugin, props),
    []
  );
};
