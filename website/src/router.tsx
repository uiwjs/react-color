import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

import Layout from './components/Layout';
import { ErrorPage } from './components/ErrorPage';

export interface MenuRouteObject
  extends Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<NonIndexRouteObject, 'children' | 'index'> {
  index?: boolean;
  label?: string;
  isComp?: boolean;
  children?: MenuRouteObject[];
}

export const routes: MenuRouteObject = {
  path: '/',
  Component: Layout,
  ErrorBoundary: ErrorPage,
  children: [
    {
      path: '/',
      label: 'Home',
      lazy: () => import('./pages/home'),
    },
    {
      path: '/colorful',
      label: 'Colorful',
      isComp: true,
      lazy: () => import('./pages/colorful'),
    },
    {
      path: '/sketch',
      label: 'Sketch',
      isComp: true,
      lazy: () => import('./pages/sketch'),
    },
    {
      path: '/block',
      label: 'Block',
      isComp: true,
      lazy: () => import('./pages/block'),
    },
    {
      path: '/circle',
      label: 'Circle',
      isComp: true,
      lazy: () => import('./pages/circle'),
    },
    {
      path: '/compact',
      label: 'Compact',
      isComp: true,
      lazy: () => import('./pages/compact'),
    },
    {
      path: '/wheel',
      label: 'Wheel',
      isComp: true,
      lazy: () => import('./pages/wheel'),
    },
    {
      path: '/github',
      label: 'Github',
      isComp: true,
      lazy: () => import('./pages/github'),
    },
    {
      path: '/material',
      label: 'Material',
      isComp: true,
      lazy: () => import('./pages/material'),
    },
    {
      path: '/chrome',
      label: 'Chrome',
      isComp: true,
      lazy: () => import('./pages/chrome'),
    },
    {
      path: '/alpha',
      label: 'Alpha',
      lazy: () => import('./pages/alpha'),
    },
    {
      path: '/editable-input',
      label: 'EditableInput',
      lazy: () => import('./pages/editable-input'),
    },
    {
      path: '/editable-input-hsla',
      label: 'EditableInputHsla',
      lazy: () => import('./pages/editable-input-hsla'),
    },
    {
      path: '/editable-input-rgba',
      label: 'EditableInputRgba',
      lazy: () => import('./pages/editable-input-rgba'),
    },
    {
      path: '/hue',
      label: 'Hue',
      lazy: () => import('./pages/hue'),
    },
    {
      path: '/name',
      label: 'Name',
      lazy: () => import('./pages/name'),
    },
    {
      path: '/saturation',
      label: 'Saturation',
      lazy: () => import('./pages/saturation'),
    },
    {
      path: '/shade-slider',
      label: 'ShadeSlider',
      lazy: () => import('./pages/shade-slider'),
    },
    {
      path: '/slider',
      label: 'Slider',
      lazy: () => import('./pages/slider'),
    },
    {
      path: '/swatch',
      label: 'Swatch',
      lazy: () => import('./pages/swatch'),
    },
    {
      path: '/drag-event-interactive',
      label: 'drag-event-interactive',
      lazy: () => import('./pages/drag-event-interactive'),
    },
    {
      path: '/convert',
      label: 'Convert',
      lazy: () => import('./pages/convert'),
    },
  ],
};
