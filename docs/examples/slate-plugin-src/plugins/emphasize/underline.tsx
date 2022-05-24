import React from 'react';

import { lazyLoad } from '@react-page/editor';
import createMarkPlugin from '../../pluginFactories/createMarkPlugin';

const UnderlinedIcon = lazyLoad(
  () => import('@mui/icons-material/FormatUnderlined')
);

export default createMarkPlugin({
  type: 'EMPHASIZE/U',
  tagName: 'u',
  icon: <UnderlinedIcon />,
  label: 'Underline',
  hotKey: 'mod+u',
});
