Color Hua
===

## Install

```bash
npm i @uiw/react-color-hua
```

## Usage

```js
import Hua from '@uiw/react-color-hua';

function Demo() {
  return (
    <Hua hue={222} />
  );
}
```

## Props

```ts
import { ColorAlphaProps } from '@uiw/react-color-alpha';

interface ColorHuaProps extends Omit<ColorAlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHua: { h: number }) => void;
  hue: number;
}
```