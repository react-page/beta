/* eslint-disable @typescript-eslint/ban-types */
import { SlatePlugin } from '../types/SlatePlugin';
import { SlateComponentPluginDefinition } from '../types/slatePluginDefinitions';

function createComponentPlugin<T = {}>(def: SlateComponentPluginDefinition<T>) {
  const customizablePlugin = function <CT = T>(
    customize: (
      t: SlateComponentPluginDefinition<T>
    ) => SlateComponentPluginDefinition<CT> = (d) =>
      (d as unknown) as SlateComponentPluginDefinition<CT>
  ) {
    return createComponentPlugin(customize(def));
  };
  customizablePlugin.toPlugin = (): SlatePlugin => ({
    ...def,
    pluginType: 'component',
  });
  return customizablePlugin;
}

export default createComponentPlugin;
