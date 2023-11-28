React Color Slider
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)

Slider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-slider](https://user-images.githubusercontent.com/1680273/125950115-1ef0c47b-e856-481a-b57e-d8168d41872b.png)](https://uiwjs.github.io/react-color/#/slider)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-slider
```

## Usage

```tsx mdx:preview
import React, { useState } from 'react';
import Slider from '@uiw/react-color-slider';

export default function Demo() {
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

```tsx mdx:preview
import React, { useState } from 'react';
import Slider from '@uiw/react-color-slider';
import Wheel from '@uiw/react-color-wheel';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <>
      <Slider
        color={hsva}
        style={{ paddingBottom: 10 }}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsv });
        }}
      />
      <Wheel
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
    </>
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
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export default Slider;
```

<!--footer-dividing-->

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
