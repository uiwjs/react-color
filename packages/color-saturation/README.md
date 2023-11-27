React Color Saturation
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)

Saturation Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-saturation](https://user-images.githubusercontent.com/1680273/125951532-ee5bb5df-1d1f-43ed-a4be-e7e8818bf897.png)](https://uiwjs.github.io/react-color/#/saturation)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-saturation
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Saturation from '@uiw/react-color-saturation';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Saturation
      hsva={hsva}
      onChange={(newColor) => {
        setHsva({ ...hsva, ...newColor, a: hsva.a });
      }}
    />
  );
}
```

The value of `hsva` does not exist

```jsx mdx:preview
import React from 'react';
import Saturation from '@uiw/react-color-saturation';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Saturation hue={122} />
      <Saturation hue={210} />
      <Saturation hue={23} />
    </div>
  );
}
```
## Props

```ts
import React from 'react';
import { HsvaColor } from '@uiw/color-convert';
import { PointerProps } from './Pointer';
export interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva?: HsvaColor;
  hue?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (newColor: HsvaColor) => void;
}
declare const Saturation: React.ForwardRefExoticComponent<SaturationProps & React.RefAttributes<HTMLDivElement>>;
export default Saturation;
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
