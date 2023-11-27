React Color Github
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github)](https://bundlephobia.com/package/@uiw/react-color-github) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)

Github Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-github](https://user-images.githubusercontent.com/1680273/125949553-67c1adef-b37f-43e2-9414-3ffb77c26ba0.png)](https://uiwjs.github.io/react-color/#/github)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-github
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Github from '@uiw/react-color-github';

export default function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <>
      <Github
        color={hex}
        style={{
          '--github-background-color': '#d1eff9'
        }}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
      <div style={{ width: 120, height: 50, backgroundColor: hex }} />
    </>
  );
}
```

Add clear button

```jsx mdx:preview
import React, { useState } from 'react';
import Github from '@uiw/react-color-github';

export default function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <>
      <Github
        color={hex}
        style={{
          '--github-background-color': '#d1eff9'
        }}
        onChange={(color) => {
          setHex(color.hex);
        }}
        rectRender={(props) => {
          if (props.key == 15) {
            return <button key={props.key} onClick={() => setHex(null)}>x</button>
          }
        }}
      />
      <div style={{ width: 120, height: 50, backgroundColor: hex }} />
    </>
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
  LeftBottom = "LB",
  Right = "R",
  RightTop = "RT",
  RightBottom = "RB",
  Top = "T",
  TopRight = "TR",
  TopLeft = "TL",
  Bottom = "B",
  BottomLeft = "BL",
  BottomRight = "BR"
}
export interface GithubRectRenderProps extends SwatchRectRenderProps {
  arrow?: JSX.Element;
}
export interface GithubProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  placement?: GithubPlacement;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}
declare const Github: React.ForwardRefExoticComponent<GithubProps & React.RefAttributes<HTMLDivElement>>;
export default Github;
```

<!--footer-dividing-->

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
