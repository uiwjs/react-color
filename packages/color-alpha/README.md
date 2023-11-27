React Color Alpha
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md)

Alpha is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-alpha](https://user-images.githubusercontent.com/1680273/125951872-e44340be-8406-4c80-8037-0c22d63708ee.png)](https://uiwjs.github.io/react-color/#/alpha)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-alpha
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import { hsvaToRgbaString } from '@uiw/color-convert';
import Alpha from '@uiw/react-color-alpha';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <>
      <Alpha
        hsva={hsva}
        onChange={(newAlpha) => {
          setHsva({ ...hsva, ...newAlpha });
        }}
      />
      <div style={{ background: hsvaToRgbaString(hsva), marginTop: 30, padding: 10 }}>
        {JSON.stringify(hsva)}
      </div>
    </>
  );
}
```

## Props

```ts
import React from 'react';
import { HsvaColor } from '@uiw/color-convert';
import { Interaction } from '@uiw/react-drag-event-interactive';
import { PointerProps } from './Pointer';
export * from './Pointer';
export interface AlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: React.CSSProperties['width'];
  /** String, Pixel value for picker height. Default `16px` */
  height?: React.CSSProperties['height'];
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: (props: PointerProps) => JSX.Element;
  /** Set rounded corners. */
  radius?: React.CSSProperties['borderRadius'];
  /** Set the background color. */
  background?: string;
  /** Set the background element props. */
  bgProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Set the interactive element props. */
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  pointerProps?: PointerProps;
  /** String Enum, horizontal or vertical. Default `horizontal` */
  direction?: 'vertical' | 'horizontal';
  onChange?: (newAlpha: {
      a: number;
  }, offset: Interaction) => void;
}
export declare const BACKGROUND_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";
declare const Alpha: React.ForwardRefExoticComponent<AlphaProps & React.RefAttributes<HTMLDivElement>>;
export default Alpha;
interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  left?: string;
  top?: string;
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
