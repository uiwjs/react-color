React Color Block
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-block)](https://bundlephobia.com/package/@uiw/react-color-block) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-block.svg)](https://www.npmjs.com/package/@uiw/react-color-block) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-block/file/README.md)

Block is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-block](https://user-images.githubusercontent.com/1680273/125902022-0b18f481-2931-441e-b854-79b924b6c190.png)](https://uiwjs.github.io/react-color/#/block)

## Install

```bash
npm i @uiw/react-color-block
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Block from '@uiw/react-color-block';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <>
      <Block
        color={hex}
        onChange={(color) => setHex(color.hex)}
      />
      <div style={{ background: hex, marginTop: 30, padding: 10 }}>
        {hex}
      </div>
    </>
  );
}

export default Demo;
```

## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
interface BlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
