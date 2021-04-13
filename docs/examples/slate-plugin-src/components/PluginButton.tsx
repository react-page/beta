/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Range, Transforms } from 'slate';
import { useSlate } from 'slate-react';
import useAddPlugin from '../hooks/useAddPlugin';
import { getCurrentNodeDataWithPlugin } from '../hooks/useCurrentNodeDataWithPlugin';
import usePluginIsActive from '../hooks/usePluginIsActive';
import usePluginIsDisabled from '../hooks/usePluginIsDisabled';
import useRemovePlugin from '../hooks/useRemovePlugin';

import UniformsControls from '../pluginFactories/components/UniformsControls';
import type {
  PluginButtonProps,
  SlatePluginDefinition,
} from '../types/slatePluginDefinitions';
import { useSetDialogIsVisible } from './DialogVisibleProvider';

import ToolbarButton from './ToolbarButton';
import { useUiTranslator } from '@react-page/editor';

type Props<T extends {}> = {
  plugin: SlatePluginDefinition<T>;
} & PluginButtonProps;

function PluginButton<T>(props: Props<T>) {
  const { plugin } = props;
  const { t } = useUiTranslator();
  const hasControls = Boolean(plugin.controls);

  const [showControls, setShowControls] = useState(false);
  const storedPropsRef = useRef<{
    selection: Range;
    isActive: boolean;
    data: T;
  }>();

  const shouldInsertWithText =
    plugin.pluginType === 'component' &&
    plugin.object === 'inline' &&
    (!storedPropsRef?.current?.selection ||
      Range.isCollapsed(storedPropsRef?.current?.selection)) &&
    !storedPropsRef?.current?.isActive;

  const close = useCallback(() => setShowControls(false), []);
  const isActive = usePluginIsActive(plugin);
  const add = useAddPlugin(plugin);
  const remove = useRemovePlugin(plugin);
  const editor = useSlate();
  const setIsVisible = useSetDialogIsVisible();
  useEffect(() => setIsVisible(showControls), [showControls, setIsVisible]);
  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (hasControls || shouldInsertWithText) {
        if (!showControls) {
          // store props
          storedPropsRef.current = {
            selection: editor.selection,
            isActive,
            data: getCurrentNodeDataWithPlugin(editor, plugin),
          };
        }

        setShowControls(!showControls);
      } else {
        if (isActive) {
          remove();
        } else {
          add();
        }
      }
    },
    [isActive, hasControls, showControls, shouldInsertWithText]
  );

  const { controls } = plugin;
  const Controls = controls
    ? controls.type === 'autoform'
      ? (props) => <UniformsControls {...props} schema={controls?.schema} />
      : controls.Component
    : UniformsControls;
  const isDisabled = usePluginIsDisabled(plugin);

  return (
    <>
      <ToolbarButton
        onClick={onClick}
        disabled={isDisabled}
        isActive={isActive}
        icon={
          plugin.icon ||
          (plugin.pluginType === 'component' && plugin.deserialize.tagName)
        }
        toolTip={t(plugin.label)}
      />

      {hasControls || shouldInsertWithText ? (
        <Controls
          pluginConfig={plugin}
          close={close}
          open={showControls}
          add={(p) => {
            if (storedPropsRef?.current?.selection) {
              // restore selection before adding
              Transforms.select(editor, storedPropsRef?.current.selection);
            }
            add(p);
          }}
          remove={() => {
            if (storedPropsRef?.current?.selection) {
              // restore selection before removing
              Transforms.select(editor, storedPropsRef?.current.selection);
            }
            remove();
          }}
          isActive={storedPropsRef?.current?.isActive}
          shouldInsertWithText={shouldInsertWithText}
          data={storedPropsRef?.current?.data}
          {...props}
        />
      ) : null}
    </>
  );
}

export default React.memo(PluginButton);
