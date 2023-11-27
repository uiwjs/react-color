React Color Material
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-material)](https://bundlephobia.com/package/@uiw/react-color-material) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-material.svg)](https://www.npmjs.com/package/@uiw/react-color-material) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-material/file/README.md)

Material Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-material](https://user-images.githubusercontent.com/1680273/125949704-6fdaa53b-6cae-4ef5-8e5d-f12a09152528.png)](https://uiwjs.github.io/react-color/#/material)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-material
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Material from '@uiw/react-color-material';

export default function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Material
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
export interface MaterialProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
declare const Material: React.ForwardRefExoticComponent<MaterialProps & React.RefAttributes<HTMLDivElement>>;
export default Material;
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
