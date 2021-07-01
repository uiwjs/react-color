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
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Saturation
      hsva={hsva}
      onChange={(newColor) => {
        setHsva({ ...hsva, ...newColor, a: hsva.a });
      }}
    />
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