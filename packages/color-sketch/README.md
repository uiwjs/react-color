React Color Sketch
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)

Sketch Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-sketch](https://user-images.githubusercontent.com/1680273/125952146-290199b4-8810-4552-944b-3ee673fb4350.png)](https://uiwjs.github.io/react-color/#/sketch)

## Install

```bash
npm i @uiw/react-color-sketch
```

## Usage

```js
import Sketch from '@uiw/react-color-sketch';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Sketch
      style={{ marginLeft: 20 }}
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
import { SwatchPresetColor } from '@uiw/react-color-swatch';
export interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  width?: number;
  color?: string | HsvaColor;
  presetColors?: false | SwatchPresetColor[];
  editableDisable?: boolean;
  onChange?: (newShade: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
