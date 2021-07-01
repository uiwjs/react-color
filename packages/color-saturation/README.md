Color Saturation
===

## Install

```bash
npm i @uiw/react-color-saturation
```

## Usage

```js
import Saturation from '@uiw/react-color-saturation';

function Demo() {
  return (
    <Saturation hsva={{ h: 0, s: 75, v: 82, a: 1 }} />
  );
}
```

## Props

```ts
import { HsvaColor } from '@uiw/color-convert';

interface ColorSaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  hsva: HsvaColor;
  onChange: (newColor: HsvaColor) => void;
}
```