React Color Editable Input HSLA
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-hsla)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-hsla.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-hsla/file/README.md)

EditableInputHSLA Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-editable-input-rgba](https://user-images.githubusercontent.com/1680273/126024611-516a5174-4cf2-4986-af36-ddc4d3d620bb.png)](https://uiwjs.github.io/react-color/#/editable-input-hsla)

## Install

```bash
npm i @uiw/react-color-editable-input-hsla
```

## Usage

```js
import { useState } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';

function Demo() {
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
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
