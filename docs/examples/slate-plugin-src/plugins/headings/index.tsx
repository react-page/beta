import createHeadingsPlugin from '../../pluginFactories/createHeadingsPlugin';
import { lazyLoad } from '@react-page/editor';
import React from 'react';
const H1Icon = lazyLoad(() => import('@mui/icons-material/LooksOne'));
const H2Icon = lazyLoad(() => import('@mui/icons-material/LooksTwo'));
const H3Icon = lazyLoad(() => import('@mui/icons-material/Looks3'));
const H4Icon = lazyLoad(() => import('@mui/icons-material/Looks4'));
const H5Icon = lazyLoad(() => import('@mui/icons-material/Looks5'));
const H6Icon = lazyLoad(() => import('@mui/icons-material/Looks6'));

export default {
  h1: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-ONE',
    level: 1,
    icon: <H1Icon />,
  }),
  h2: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-TWO',
    level: 2,
    icon: <H2Icon />,
  }),
  h3: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-THREE',
    level: 3,
    icon: <H3Icon />,
  }),
  h4: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-FOUR',
    level: 4,
    icon: <H4Icon />,
  }),
  h5: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-FIVE',
    level: 5,
    icon: <H5Icon />,
  }),
  h6: createHeadingsPlugin({
    type: 'HEADINGS/HEADING-SIX',
    level: 6,
    icon: <H6Icon />,
  }),
};
