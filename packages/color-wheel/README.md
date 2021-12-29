React Color Wheel
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)

Wheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)](https://uiwjs.github.io/react-color/#/wheel)

## Install

```bash
npm i @uiw/react-color-wheel
```

## Usage

```js
import Wheel from '@uiw/react-color-wheel';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Wheel
      color={hsva}
      onChange={(color) => {
        setHsva({ ...hsva, ...color.hsva });
      }}
    />
  );
}
```

## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: string;
  left: string;
  color?: string;
}
export declare const Pointer: ({ className, color, left, top, style, prefixCls }: PointerProps) => JSX.Element;
export interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  width?: number;
  height?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** Starting angle of the color wheel's hue gradient, measured in degrees. */
  angle?: number;
  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */
  direction?: 'clockwise' | 'anticlockwise';
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
