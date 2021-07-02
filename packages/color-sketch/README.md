React Sketch
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch)

![image](https://user-images.githubusercontent.com/1680273/124280267-0ff35e00-db7b-11eb-8989-2a35006e114f.png)

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
interface ColorResult {
  hex: string;
  hsl: HslaColor;
  hsv: HsvColor;
  rgb: RgbaColor;
}
export type PresetColor = { color: string; title: string } | string;
export interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  width?: number;
  color?: string | HsvaColor;
  presetColors?: PresetColor[];
  onChange?: (newShade: ColorResult) => void;
}
```