import React from 'react';
import { HsvaColor } from '@uiw/react-color';

export const defaultContext: ContextStore = {
  hsva: { h: 214, s: 43, v: 90, a: 1 },
};

export const Context = React.createContext<ContextStore>(defaultContext);

export type ContextStore = {
  hsva: HsvaColor;
  dispatch?: React.Dispatch<ContextStore>;
};

export function reducer(state: ContextStore, action: ContextStore) {
  return { ...state, ...action };
}
