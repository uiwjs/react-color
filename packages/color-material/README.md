React Color Material
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-material)](https://bundlephobia.com/package/@uiw/react-color-material) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-material.svg)](https://www.npmjs.com/package/@uiw/react-color-material) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-material/file/README.md)

![react-color-material](https://user-images.githubusercontent.com/1680273/125121610-c1b7ff00-e126-11eb-8928-0b2817f07e1a.png)

## Install

```bash
npm i @uiw/react-color-material
```

## Usage

```js
import Material from '@uiw/react-color-material';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Material
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

## Props

```ts
import { HsvaColor, ColorResult } from '@uiw/color-convert';

interface MaterialProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
