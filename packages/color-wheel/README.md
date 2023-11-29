React Color Wheel
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)

Wheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

<!--rehype:ignore:start-->
[![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)](https://uiwjs.github.io/react-color/#/wheel)
<!--rehype:ignore:end-->

## Install

```bash
npm i @uiw/react-color-wheel
```

## Usage

```tsx mdx:preview
import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>
    </Fragment>
  );
}

export default Demo;
```

```tsx mdx:preview
import React, { useState } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <Wheel color={{a: 1, h: 214, s: 0, v: 100}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 90}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 80}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 70}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 50}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} width={100} height={100} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 30}} width={100} height={100} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 20}} width={100} height={100} />
      <Wheel color={{a: 1, h: 214, s: 0, v: 10}} width={100} height={100} />
    </div>
  );
}

export default Demo;
```

```tsx mdx:preview
import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';

function Demo() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <ShadeSlider
        hsva={hsva}
        style={{ width: 210, marginTop: 20 }}
        onChange={(newShade) => {
          setHsva({ ...hsva, ...newShade });
        }}
      />
      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>
    </Fragment>
  );
}

export default Demo;
```


## Props

```ts
import React from 'react';
import { HsvaColor, ColorResult } from '@uiw/color-convert';
import { PointerProps } from './Pointer';
export interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  width?: number;
  height?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** Direction of the oval: 'x' or 'y'. */ 
  oval?: string;
  /** Starting angle of the color wheel's hue gradient, measured in degrees. */
  angle?: number;
  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */
  direction?: 'clockwise' | 'anticlockwise';
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}
declare const Wheel: React.ForwardRefExoticComponent<WheelProps & React.RefAttributes<HTMLDivElement>>;
export default Wheel;
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
