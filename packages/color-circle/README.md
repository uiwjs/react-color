React Color Swatch
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-circle)](https://bundlephobia.com/package/@uiw/react-color-circle) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-circle.svg)](https://www.npmjs.com/package/@uiw/react-color-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-circle/file/README.md)

Circle Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-circle](https://user-images.githubusercontent.com/1680273/125948967-87e1d2eb-ed51-46c8-9378-9bf964b093ea.png)](https://uiwjs.github.io/react-color/#/circle)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-circle
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

export default function Demo() {
  const [hex, setHex] = useState('#F44E3B');
  return (
    <Circle
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
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
import { SwatchProps } from '@uiw/react-color-swatch';
export interface CircleProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
declare const Circle: React.ForwardRefExoticComponent<CircleProps & React.RefAttributes<HTMLDivElement>>;
export default Circle;
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
