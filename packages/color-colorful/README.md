React Color Colorful
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)

Colorful Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

[![react-color-colorful](https://user-images.githubusercontent.com/1680273/125949419-cdcac5cb-f5a9-47af-956f-4056630503c9.png)](https://uiwjs.github.io/react-color/#/colorful)

## Install

```bash
npm i @uiw/react-color-colorful
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';

function Demo() {
  const [hex, setHex] = useState("#59c09a");
  return (
    <>
      <Colorful
        color={hex}
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

```jsx mdx:preview
import React, { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';

function Demo() {
  const [hex, setHex] = useState("#59c09a");
  const [disableAlpha, setDisableAlpha] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={disableAlpha}
          onChange={(evn) => setDisableAlpha(evn.target.checked)}
        />
        {disableAlpha ? "Hide" : "Show"} Alpha
      </label>
      <Colorful
        color={hex}
        disableAlpha={disableAlpha}
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
import { HsvaColor, ColorResult } from '@uiw/color-convert';
export interface ColorfulProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  onChange?: (color: ColorResult) => void;
  color?: string | HsvaColor;
  disableAlpha?: boolean;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
