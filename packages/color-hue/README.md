React Color Hue
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)

Hue Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-hue](https://user-images.githubusercontent.com/1680273/125951739-e38dad1a-5d11-4e4b-a146-3365bd0d98fb.png)](https://uiwjs.github.io/react-color/#/hue)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-hue
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Hue from '@uiw/react-color-hue';

export default function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Hue
      hue={hsva.h}
      onChange={(newHue) => {
        setHsva({ ...hsva, ...newHue });
      }}
    />
  );
}
```

```jsx mdx:preview
import React, { useState } from 'react';
import Hue from '@uiw/react-color-hue';

export default function Demo() {
  return (
    <Hue hue={undefined} />
  );
}
```

## Props

```ts
import React from 'react';
import { AlphaProps } from '@uiw/react-color-alpha';
export interface HueProps extends Omit<AlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHue: {
    h: number;
  }) => void;
  hue: number;
}
declare const Hue: React.ForwardRefExoticComponent<HueProps & React.RefAttributes<HTMLDivElement>>;
export default Hue;
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
