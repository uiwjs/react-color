React Color Shade Slider
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)

ShadeSlider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-shade-slider](https://user-images.githubusercontent.com/1680273/125951397-89e90c05-1de2-4da7-81ed-4b77980482a0.png)](https://uiwjs.github.io/react-color/#/shade-slider)

## Install

```bash
npm i @uiw/react-color-shade-slider
```

## Usage

```js
import ShadeSlider from '@uiw/react-color-shade-slider';

function Demo() {
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
      s: number;
  }) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
