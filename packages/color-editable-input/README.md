React Color Editable Input
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input)](https://bundlephobia.com/package/@uiw/react-color-editable-input) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md)

EditableInput Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![editable-input](https://user-images.githubusercontent.com/1680273/125950802-3feb68a9-23ca-4395-9477-72ade831dc0b.png)](https://uiwjs.github.io/react-color/#/editable-input)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-editable-input
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  return (
    <div style={{ padding: '0 10px 0 20px' }}>
      <EditableInput
        label="Hex"
        value={hsvaToHex(hsva)}
        style={{ width: 68, alignItems: 'flex-start' }}
      />
    </div>
  );
}
```

## Props

```ts
import React from 'react';
export interface EditableInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string;
  value?: string | number;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  placement?: 'top' | 'left' | 'bottom' | 'right';
  inputStyle?: React.CSSProperties;
  onChange?: (evn: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
}
declare const EditableInput: React.ForwardRefExoticComponent<EditableInputProps & React.RefAttributes<HTMLInputElement>>;
export default EditableInput;
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
