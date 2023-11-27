React Color Compact
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)

Compact Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-compact](https://user-images.githubusercontent.com/1680273/125949911-bb919f60-2bf3-487b-9aad-5aef82bcd5ed.png)](https://uiwjs.github.io/react-color/#/compact)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-compact
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Compact from '@uiw/react-color-compact';

export default function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Compact
      color={hex}
      style={{
        boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
      }}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

Add clear button

```jsx mdx:preview
import React, { useState } from 'react';
import Compact from '@uiw/react-color-compact';

export default function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Compact
      color={hex}
      style={{
        boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
      }}
      onChange={(color) => {
        setHex(color.hex);
      }}
      rectRender={(props) => {
        console.log(props.key)
        if (props.key == 35) {
          return <button key={props.key} style={{ width: 15, height: 15, padding: 0, lineHeight: "10px" }} onClick={() => setHex(null)}>x</button>
        }
      }}
    />
  );
}
```


## Props

```ts
import React from 'react';
import { ColorResult, HsvaColor } from '@uiw/color-convert';
import { type SwatchProps, type SwatchRectRenderProps } from '@uiw/react-color-swatch';
export interface CompactProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn?: T) => void;
  rectRender?: (props: SwatchRectRenderProps) => JSX.Element | undefined;
  rectProps?: SwatchProps['rectProps'];
}
declare const Compact: React.ForwardRefExoticComponent<CompactProps<React.MouseEvent<HTMLDivElement, MouseEvent>> & React.RefAttributes<HTMLDivElement>>;
export default Compact;
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
