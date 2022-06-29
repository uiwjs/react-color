React Color Chrome
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-chrome)](https://bundlephobia.com/package/@uiw/react-color-chrome) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-chrome.svg)](https://www.npmjs.com/package/@uiw/react-color-chrome) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-chrome/file/README.md)

Chrome Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<a href="https://uiwjs.github.io/react-color/#/chrome">
  <img src="https://user-images.githubusercontent.com/1680273/126048126-172abdc2-f7cf-4519-8974-f815c102e2de.png" width="210" alt="react-color-chrome" />
</a>

## Install

```bash
npm i @uiw/react-color-chrome
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';

function Demo() {
  const [hex, setHex] = useState("#d29c9c53");
  return (
    <>
      <Chrome
        color={hex}
        style={{ float: 'left' }}
        placement={GithubPlacement.Right}
        onChange={(color) => {
          setHex(color.hexa);
        }}
      />
      <Chrome
        color={hex}
        placement={GithubPlacement.TopRight}
        onChange={(color) => {
          setHex(color.hexa);
        }}
      />
      <div style={{ background: hex, marginTop: 30, padding: 10 }}>
        {hex}
      </div>
    </>
  );
}
export default Demo;
```

## Props

```ts
import React from 'react';
import { GithubProps } from '@uiw/react-color-github';
export declare enum ChromeInputType {
  HEXA = 'hexa',
  RGBA = 'rgba',
  HSLA = 'hsla',
}
export interface ChromeProps extends Omit<GithubProps, 'colors'> {
  inputType?: ChromeInputType;
}
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
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
