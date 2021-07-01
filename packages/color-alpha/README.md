Color Alpha
===

## Install

```bash
npm i @uiw/react-color-alpha
```

## Usage

```js
import Alpha from '@uiw/react-color-alpha';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Alpha
      hsva={hsva}
      onChange={(newAlpha) => {
        setHsva({ ...hsva, ...newAlpha });
      }}
    />
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