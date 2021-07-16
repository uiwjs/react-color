React Color Saturation
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)

![react-color-saturation](https://user-images.githubusercontent.com/1680273/125951532-ee5bb5df-1d1f-43ed-a4be-e7e8818bf897.png)

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

interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  onChange?: (newColor: HsvaColor) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
