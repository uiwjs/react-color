React Color Sketch
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)

![react-color-sketch](https://user-images.githubusercontent.com/1680273/125033823-681de900-e0c2-11eb-89e1-5f0597086c8d.png)

## Install

```bash
npm i @uiw/react-color-sketch
```

## Usage

```js
import Sketch from '@uiw/react-color-sketch';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={hsva}
      onChange={(color) => {
        setHsva({ ...hsva, ...color.hsv });
      }}
    />
  );
}
```

## Props

```ts
import { ColorResult } from '@uiw/color-convert';
export type PresetColor = { color: string; title: string } | string;
export interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  width?: number;
  color?: string | HsvaColor;
  presetColors?: false | PresetColor[];
  editableDisable?: boolean;
  onChange?: (newShade: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
