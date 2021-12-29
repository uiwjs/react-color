React Color Slider
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)

Slider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-slider](https://user-images.githubusercontent.com/1680273/125950115-1ef0c47b-e856-481a-b57e-d8168d41872b.png)](https://uiwjs.github.io/react-color/#/slider)

## Install

```bash
npm i @uiw/react-color-slider
```

## Usage

```js
import Slider from '@uiw/react-color-slider';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Slider
      color={hsva}
      onChange={(color) => {
        setHsva({ ...hsva, ...color.hsv });
      }}
    />
  );
}
```

## Props

```ts
import React from 'react';
import { ColorResult, HsvaColor } from '@uiw/color-convert';
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  lightness?: number[];
  onChange?: (color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
