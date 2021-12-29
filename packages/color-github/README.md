React Color Github
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github)](https://bundlephobia.com/package/@uiw/react-color-github) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)

Github Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-github](https://user-images.githubusercontent.com/1680273/125949553-67c1adef-b37f-43e2-9414-3ffb77c26ba0.png)](https://uiwjs.github.io/react-color/#/github)

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
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
import { SwatchProps, SwatchRectRenderProps } from '@uiw/react-color-swatch';
export declare enum GithubPlacement {
  Left = "L",
  LeftTop = "LT",
  LeftBotton = "LB",
  Right = "R",
  RightTop = "RT",
  RightBotton = "RB",
  Top = "T",
  TopRight = "TR",
  TopLeft = "TL",
  Botton = "B",
  BottonLeft = "BL",
  BottonRight = "BR"
}
export interface GithubRectRenderProps extends SwatchRectRenderProps {
  arrow?: JSX.Element;
}
export interface GithubProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  placement?: GithubPlacement;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
