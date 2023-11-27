React Color Swatch
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-swatch)](https://bundlephobia.com/package/@uiw/react-color-swatch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-swatch.svg)](https://www.npmjs.com/package/@uiw/react-color-swatch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-swatch/file/README.md)

Swatch Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-swatch](https://user-images.githubusercontent.com/1680273/125950289-f965e6c2-c21f-4b5c-a05c-a27aa07e738f.png)](https://uiwjs.github.io/react-color/#/swatch)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-swatch
```

## Usage

```tsx mdx:preview
import React, { useState } from 'react';
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

export default Demo;
```

## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
export type SwatchPresetColor = {
  color: string;
  title?: string;
} | string;
export type SwatchRectRenderProps = {
  key: string | number;
  title: string;
  color: string;
  checked: boolean;
  style: React.CSSProperties;
  onClick: (evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string;
  colors?: SwatchPresetColor[];
  rectProps?: React.HTMLAttributes<HTMLDivElement>;
  rectRender?: (props: SwatchRectRenderProps) => JSX.Element;
  onChange?: (hsva: HsvaColor, color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}
declare const Swatch: React.ForwardRefExoticComponent<SwatchProps & React.RefAttributes<HTMLDivElement>>;
export default Swatch;
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
