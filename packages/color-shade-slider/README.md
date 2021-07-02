React Shade Slider
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider)

## Install

```bash
npm i @uiw/react-color-shade-slider
```

## Usage

```js
import ShadeSlider from '@uiw/react-color-shade-slider';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <ShadeSlider
      hsva={hsva}
      onChange={(newShade) => {
        setHsva({ ...hsva, ...newShade });
      }}
    />
  );
}
```

## Props

```ts
import { AlphaProps } from '@uiw/react-color-alpha';

interface ShadeSliderProps extends Omit<AlphaProps, 'onChange'> {
  onChange?: (newShade: { v: number; s: number }) => void;
}
```