React Color Hue
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue)

![image](https://user-images.githubusercontent.com/1680273/124279725-6a3fef00-db7a-11eb-95b7-fba428a7c2ba.png)

## Install

```bash
npm i @uiw/react-color-hue
```

## Usage

```js
import Hue from '@uiw/react-color-hue';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Hue
      hue={hsva.h}
      onChange={(newHue) => {
        setHsva({ ...hsva, ...newHue });
      }}
    />
  );
}
```

## Props

```ts
import { AlphaProps } from '@uiw/react-color-alpha';

interface HueProps extends Omit<AlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHue: { h: number }) => void;
  hue: number;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
