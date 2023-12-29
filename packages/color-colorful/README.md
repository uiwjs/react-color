React Color Colorful
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)

Colorful Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-colorful](https://user-images.githubusercontent.com/1680273/125949419-cdcac5cb-f5a9-47af-956f-4056630503c9.png)](https://uiwjs.github.io/react-color/#/colorful)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-colorful
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';
import { hsvaToHex } from '@uiw/color-convert';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <>
      <Colorful
        color={hsva}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
      <div style={{ background: hsvaToHex(hsva), marginTop: 30, padding: 10 }}>
        {JSON.stringify(hsva)}
      </div>
    </>
  );
}
```

```jsx mdx:preview
import React, { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';
import { hsvaToHex } from '@uiw/color-convert';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
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
        color={hsva}
        disableAlpha={disableAlpha}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
      <div style={{ background: hsvaToHex(hsva), marginTop: 30, padding: 10 }}>
        {JSON.stringify(hsva)}
      </div>
    </>
  );
}
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
declare const Colorful: React.ForwardRefExoticComponent<ColorfulProps & React.RefAttributes<HTMLDivElement>>;
export default Colorful;
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
