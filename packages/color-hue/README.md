React Color Hue
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)

Hue Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-hue](https://user-images.githubusercontent.com/1680273/125951739-e38dad1a-5d11-4e4b-a146-3365bd0d98fb.png)](https://uiwjs.github.io/react-color/#/hue)

## Install

```bash
npm i @uiw/react-color-hue
```

## Usage

```js
import Hue from '@uiw/react-color-hue';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Hue
      hue={hsva.h}
      onChange={(newHue) => {
        setHsva({ ...hsva, ...newHue });
      }}
    />
  );
}
```

## Props

```ts
import React from 'react';
import { AlphaProps } from '@uiw/react-color-alpha';
export interface HueProps extends Omit<AlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHue: { h: number; }) => void;
  hue: number;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
