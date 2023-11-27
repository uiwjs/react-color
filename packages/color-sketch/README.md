React Color Sketch
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)

Sketch Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-sketch](https://user-images.githubusercontent.com/1680273/125952146-290199b4-8810-4552-944b-3ee673fb4350.png)](https://uiwjs.github.io/react-color/#/sketch)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-sketch
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Sketch from '@uiw/react-color-sketch';

function Demo() {
  const [hex, setHex] = useState("#fff");
  const [disableAlpha, setDisableAlpha] = useState(false);
  return (
    <div>
      <Sketch
        style={{ marginLeft: 20 }}
        color={hex}
        disableAlpha={disableAlpha}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
      <button onClick={() => setDisableAlpha(!disableAlpha)}>
        disableAlpha={disableAlpha.toString()}
      </button>
    </div>
  );
}

export default Demo;
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
  disableAlpha?: boolean;
  onChange?: (newShade: ColorResult) => void;
}
declare const Sketch: React.ForwardRefExoticComponent<SketchProps & React.RefAttributes<HTMLDivElement>>;
export default Sketch;
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
