React Color Compact
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)

Compact Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-compact](https://user-images.githubusercontent.com/1680273/125949911-bb919f60-2bf3-487b-9aad-5aef82bcd5ed.png)](https://uiwjs.github.io/react-color/#/compact)

## Install

```bash
npm i @uiw/react-color-compact
```

## Usage

```js
import Compact from '@uiw/react-color-compact';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Compact
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
import { ColorResult, HsvaColor } from '@uiw/color-convert';
export interface CompactProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn?: T) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
