React Color Wheel
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)

Wheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)](https://uiwjs.github.io/react-color/#/wheel)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-wheel
```

## Usage

```tsx mdx:preview
import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <div style={{ width: '100%', height: 34, background: hsvaToHex(hsva) }}></div>
    </Fragment>
  );
}

export default Demo;
```

## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
import { PointerProps } from './Pointer';
export interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  width?: number;
  height?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** Direction of the oval: 'x' or 'y'. */ 
  oval?: string;
  /** Starting angle of the color wheel's hue gradient, measured in degrees. */
  angle?: number;
  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */
  direction?: 'clockwise' | 'anticlockwise';
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}
declare const Wheel: React.ForwardRefExoticComponent<WheelProps & React.RefAttributes<HTMLDivElement>>;
export default Wheel;
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
