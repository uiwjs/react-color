React Color Swatch
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-swatch)](https://bundlephobia.com/package/@uiw/react-color-swatch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-swatch.svg)](https://www.npmjs.com/package/@uiw/react-color-swatch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-swatch/file/README.md)

![react-color-swatch](https://user-images.githubusercontent.com/1680273/125317798-d9cc9000-e36b-11eb-84a7-34f998957db9.png)

## Install

```bash
npm i @uiw/react-color-swatch
```

## Usage

```js
import { hsvaToHex, getContrastingColor, } from '@uiw/color-convert';
import Swatch from '@uiw/react-color-swatch';

function Point(props: { color?: string; checked?: boolean }) {
  if (!props.checked) return null;
  return (
    <div
      style={{
        height: 5,
        width: 5,
        borderRadius: '50%',
        backgroundColor: getContrastingColor(props.color!),
      }}
    />
  );
}

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Swatch
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
      color={hex}
      rectProps={{
        children: <Point />,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      onChange={(hsvColor) => {
        setHex(hsvaToHex(hsvColor))
      }}
    />
  );
}
```

## Props

```ts
import { ColorResult, HsvaColor } from '@uiw/color-convert';

export type SwatchPresetColor = { color: string; title?: string } | string;
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'> {
  prefixCls?: string;
  color?: string;
  colors?: SwatchPresetColor[];
  rectProps?: React.HTMLAttributes<HTMLDivElement>;
  onClick?: (hsva: HsvaColor) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
