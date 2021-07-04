React Color Saturation
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation)

![image](https://user-images.githubusercontent.com/1680273/124278948-7d05f400-db79-11eb-9358-e290a0b636a2.png)

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
