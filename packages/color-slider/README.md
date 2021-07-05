React Color Slider
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124280065-d3276700-db7a-11eb-8640-fc756b80ed1c.png)

## Install

```bash
npm i @uiw/react-color-slider
```

## Usage

```js
import Slider from '@uiw/react-color-slider';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Slider
      color={hsva}
      onChange={(newShade) => {
        setHsva({ ...hsva, ...newShade });
      }}
    />
  );
}
```

## Props

```ts
import { ColorResult, HsvaColor } from '@uiw/color-convert';

interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  lightness?: number[];
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
