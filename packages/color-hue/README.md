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
  return (
    <Hue hue={222} />
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