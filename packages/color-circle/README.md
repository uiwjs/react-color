React Color Swatch
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-circle)](https://bundlephobia.com/package/@uiw/react-color-circle) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-circle.svg)](https://www.npmjs.com/package/@uiw/react-color-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-circle/file/README.md)

![react-color-circle](https://user-images.githubusercontent.com/1680273/125335431-2077b580-e37f-11eb-8027-22e1d7a200eb.png)

## Install

```bash
npm i @uiw/react-color-circle
```

## Usage

```js
import Circle from '@uiw/react-color-circle';

function Demo() {
  const [hex, setHex] = useState('#F44E3B');
  return (
    <Circle
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
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
import { SwatchProps } from '@uiw/react-color-swatch';
import { ColorResult, HsvaColor } from '@uiw/color-convert';

interface CircleProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
