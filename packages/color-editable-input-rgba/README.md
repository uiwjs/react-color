React Color Editable Input RGBA
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-rgba)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-rgba.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-rgba/file/README.md)

EditableInputRGBA Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-editable-input-rgba](https://user-images.githubusercontent.com/1680273/125950920-96bbfc1e-031a-4ea2-bfa2-28fab4d3c9d3.png)](https://uiwjs.github.io/react-color/#/editable-input-rgba)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-editable-input-rgba
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import EditableInputRGBA from '@uiw/react-color-editable-input-rgba';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  return (
    <div style={{ padding: '0 10px 0 20px' }}>
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    </div>
  );
}
```

## Props

```ts
import React from 'react';
import { EditableInputProps } from '@uiw/react-color-editable-input';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
export interface EditableInputRGBAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  hsva: HsvaColor;
  placement?: 'top' | 'left' | 'bottom' | 'right';
  rProps?: EditableInputProps;
  gProps?: EditableInputProps;
  bProps?: EditableInputProps;
  aProps?: false | EditableInputProps;
  onChange?: (color: ColorResult) => void;
}
declare const EditableInputRGBA: React.ForwardRefExoticComponent<EditableInputRGBAProps & React.RefAttributes<HTMLDivElement>>;
export default EditableInputRGBA;
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
