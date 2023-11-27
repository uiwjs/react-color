React Color Shade Slider
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)

ShadeSlider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-shade-slider](https://user-images.githubusercontent.com/1680273/125951397-89e90c05-1de2-4da7-81ed-4b77980482a0.png)](https://uiwjs.github.io/react-color/#/shade-slider)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-shade-slider
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import ShadeSlider from '@uiw/react-color-shade-slider';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <ShadeSlider
      hsva={hsva}
      onChange={(newShade) => {
        setHsva({ ...hsva, ...newShade });
      }}
    />
  );
}
```

## Props

```ts
import React from 'react';
import { AlphaProps } from '@uiw/react-color-alpha';
export interface ShadeSliderProps extends Omit<AlphaProps, 'onChange'> {
  onChange?: (newShade: {
    v: number;
  }) => void;
}
declare const ShadeSlider: React.ForwardRefExoticComponent<ShadeSliderProps & React.RefAttributes<HTMLDivElement>>;
export default ShadeSlider;

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
