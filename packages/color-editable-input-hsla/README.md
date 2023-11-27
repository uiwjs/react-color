React Color Editable Input HSLA
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-hsla)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-hsla.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-hsla/file/README.md)

EditableInputHSLA Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-editable-input-rgba](https://user-images.githubusercontent.com/1680273/126024611-516a5174-4cf2-4986-af36-ddc4d3d620bb.png)](https://uiwjs.github.io/react-color/#/editable-input-hsla)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-editable-input-hsla
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  return (
    <div style={{ padding: '0 10px 0 20px' }}>
      <EditableInputHSLA
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
import { EditableInputRGBAProps } from '@uiw/react-color-editable-input-rgba';
export interface EditableInputHSLAProps extends Omit<EditableInputRGBAProps, 'rProps' | 'gProps' | 'bProps'> {
  hProps?: EditableInputRGBAProps['gProps'];
  sProps?: EditableInputRGBAProps['gProps'];
  lProps?: EditableInputRGBAProps['gProps'];
  aProps?: EditableInputRGBAProps['aProps'];
}
declare const EditableInputHSLA: React.ForwardRefExoticComponent<EditableInputHSLAProps & React.RefAttributes<HTMLDivElement>>;
export default EditableInputHSLA;
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
