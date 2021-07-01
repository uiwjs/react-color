Color Saturation
===

## Install

```bash
npm i @uiw/react-color-alpha
```

## Usage

```js
import Alpha from '@uiw/react-color-alpha';

function Demo() {
  return (
    <Alpha hsva={{ h: 0, s: 75, v: 82, a: 1 }} />
  );
}
```

## Props

```ts
import { HsvaColor } from '@uiw/color-convert';

interface ColorAlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** @default 320px */
  width?: number;
  /** @default 16px */
  height?: number;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  onChange?: (newAlpha: { a: number }) => void;
}
```