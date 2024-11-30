React Color Chrome
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-chrome)](https://bundlephobia.com/package/@uiw/react-color-chrome) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-chrome.svg)](https://www.npmjs.com/package/@uiw/react-color-chrome) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-chrome/file/README.md)

Chrome Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-color/#/chrome">
  <img src="https://user-images.githubusercontent.com/1680273/126048126-172abdc2-f7cf-4519-8974-f815c102e2de.png" width="210" alt="react-color-chrome" />
</a>

<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-chrome
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';

import {
  HsvaColor,
  hsvaToRgbaString,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  hsvaToHexa,
} from '@uiw/color-convert';

import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';

function Demo() {
  const [hsva, setHsva] = useState({ h:0, s:25.71, v:82.35, a:0.32});
  const hex = hsvaToHex(hsva)
  return (
    <>
      <Chrome
        color={hsva}
        style={{ float: 'left' }}
        placement={GithubPlacement.Right}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
      <Chrome
        color={hsva}
        placement={GithubPlacement.TopRight}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
      <Chrome
        color={hsva}
        style={{ marginTop: 10, width: 140 }}
        placement={GithubPlacement.TopRight}
        showEyeDropper={false}
        showColorPreview={false}
        showEditableInput={false}
        onChange={(color) => {
          setHsva(color.hsva);
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

Disable the opacity setting by setting `showAlpha` to `false`.

```jsx mdx:preview
import React, { useState } from 'react';

import {
  HsvaColor,
  hsvaToRgbaString,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  hsvaToHexa,
} from '@uiw/color-convert';

import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';

function Demo() {
  const [hsva, setHsva] = useState({ h:0, s:25.71, v:82.35, a:0.32});
  const hex = hsvaToHex(hsva)
  return (
    <>
      <Chrome
        color={hsva}
        style={{ marginTop: 10 }}
        placement={GithubPlacement.TopRight}
        showAlpha={false}
        onChange={(color) => {
          setHsva(color.hsva);
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
import { GithubProps } from '@uiw/react-color-github';
export declare enum ChromeInputType {
  HEXA = "hexa",
  RGBA = "rgba",
  HSLA = "hsla"
}
export interface ChromeProps extends Omit<GithubProps, 'colors'> {
  inputType?: ChromeInputType;
  showEditableInput?: boolean;
  showEyeDropper?: boolean;
  showColorPreview?: boolean;
  showHue?: boolean;
  showAlpha?: boolean;
}
declare const Chrome: React.ForwardRefExoticComponent<ChromeProps & React.RefAttributes<HTMLDivElement>>;
export default Chrome;
```

<!--footer-dividing-->

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
