import { lazy } from 'react';

export type Routes<T = unknown> = {
  label?: string;
  path?: string;
  exact?: boolean;
  isComp?: boolean;
  divider?: boolean;
  component?: T;
};

export const routes: Array<Routes> = [
  {
    path: '/',
    exact: true,
    label: 'Home',
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/colorful',
    label: 'Colorful',
    isComp: true,
    component: lazy(() => import('./pages/colorful')),
  },
  {
    path: '/sketch',
    label: 'Sketch',
    isComp: true,
    component: lazy(() => import('./pages/sketch')),
  },
  {
    path: '/block',
    label: 'Block',
    isComp: true,
    component: lazy(() => import('./pages/block')),
  },
  {
    path: '/circle',
    label: 'Circle',
    isComp: true,
    component: lazy(() => import('./pages/circle')),
  },
  {
    path: '/compact',
    label: 'Compact',
    isComp: true,
    component: lazy(() => import('./pages/compact')),
  },
  {
    path: '/wheel',
    label: 'Wheel',
    isComp: true,
    component: lazy(() => import('./pages/wheel')),
  },
  {
    path: '/github',
    label: 'Github',
    isComp: true,
    component: lazy(() => import('./pages/github')),
  },
  {
    path: '/material',
    label: 'Material',
    isComp: true,
    component: lazy(() => import('./pages/material')),
  },
  {
    path: '/chrome',
    label: 'Chrome',
    isComp: true,
    component: lazy(() => import('./pages/chrome')),
  },
  { divider: true },
  {
    path: '/alpha',
    label: 'Alpha',
    component: lazy(() => import('./pages/alpha')),
  },
  {
    path: '/editable-input',
    label: 'EditableInput',
    component: lazy(() => import('./pages/editable-input')),
  },
  {
    path: '/editable-input-hsla',
    label: 'EditableInputHsla',
    component: lazy(() => import('./pages/editable-input-hsla')),
  },
  {
    path: '/editable-input-rgba',
    label: 'EditableInputRgba',
    component: lazy(() => import('./pages/editable-input-rgba')),
  },
  {
    path: '/hue',
    label: 'Hue',
    component: lazy(() => import('./pages/hue')),
  },
  {
    path: '/name',
    label: 'Name',
    component: lazy(() => import('./pages/name')),
  },
  {
    path: '/saturation',
    label: 'Saturation',
    component: lazy(() => import('./pages/saturation')),
  },
  {
    path: '/shade-slider',
    label: 'ShadeSlider',
    component: lazy(() => import('./pages/shade-slider')),
  },
  {
    path: '/slider',
    label: 'Slider',
    component: lazy(() => import('./pages/slider')),
  },
  {
    path: '/swatch',
    label: 'Swatch',
    component: lazy(() => import('./pages/swatch')),
  },
  {
    path: '/drag-event-interactive',
    label: 'drag-event-interactive',
    component: lazy(() => import('./pages/drag-event-interactive')),
  },
  {
    path: '/convert',
    label: 'Convert',
    component: lazy(() => import('./pages/convert')),
  },
];
