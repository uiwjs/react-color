React Color Github
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github)](https://bundlephobia.com/package/@uiw/react-color-github) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)

![react-color-github](https://user-images.githubusercontent.com/1680273/125948570-e08efda9-ccb8-4d7d-9c3b-77dc948bd10c.png)

## Install

```bash
npm i @uiw/react-color-github
```

## Usage

```js
import Github from '@uiw/react-color-github';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Github
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

interface GithubProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
