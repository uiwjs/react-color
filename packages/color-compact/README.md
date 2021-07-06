React Color Slider
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124280065-d3276700-db7a-11eb-8640-fc756b80ed1c.png)

## Install

```bash
npm i @uiw/react-color-compact
```

## Usage

```js
import Compact from '@uiw/react-color-compact';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Compact
      color={hex}
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
