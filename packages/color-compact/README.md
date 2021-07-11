React Color Compact
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)

![react-color-compact](https://user-images.githubusercontent.com/1680273/125018470-bf629000-e0a7-11eb-8cfb-11c22c6b185b.png)

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
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

## Props

```ts
import { ColorResult, HsvaColor } from '@uiw/color-convert';

interface CompactProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.