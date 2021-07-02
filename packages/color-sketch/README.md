React Sketch
===

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