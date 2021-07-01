Color Hue
===

## Install

```bash
npm i @uiw/react-color-hue
```

## Usage

```js
import Hue from '@uiw/react-color-hue';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Hue
      hue={hsva.h}
      onChange={(newHue) => {
        setHsva({ ...hsva, ...newHue });
      }}
    />
  );
}
```

## Props

```ts
import { ColorAlphaProps } from '@uiw/react-color-alpha';

interface ColorHueProps extends Omit<ColorAlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHue: { h: number }) => void;
  hue: number;
}
```