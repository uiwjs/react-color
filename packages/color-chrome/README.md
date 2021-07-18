React Color Github
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github)](https://bundlephobia.com/package/@uiw/react-color-github) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)

<img src="https://user-images.githubusercontent.com/1680273/126048126-172abdc2-f7cf-4519-8974-f815c102e2de.png" width="210" alt="react-color-chorme" />

## Install

```bash
npm i @uiw/react-color-chorme
```

## Usage

```js
import Chorme from '@uiw/react-color-chorme';
import { GithubPlacement } from '@uiw/react-color-github';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Chorme
      color={hex}
      placement={GithubPlacement.Right}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

## Props

```ts
import { GithubProps } from '@uiw/react-color-github';

export enum ChromeInputType {
  HEXA = 'hexa',
  RGBA = 'rgba',
  HSLA = 'hsla',
}

export interface ChromeProps extends Omit<GithubProps, 'colors'> {
  inputType?: ChromeInputType;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
