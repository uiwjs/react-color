<!--rehype:ignore:start-->
<br/><br/><br/>
<p align="center">
  <a title="React Color" href="https://uiwjs.github.io/react-color/">
    <img src="https://github.com/uiwjs/react-color/assets/1680273/da32cf40-46fa-4da8-bd8e-fe6ad2ce3b1f" alt="@uiw/react-color" />
  </a>
</p>
<br/><br/>

<h1 align="center">React Color</h1>


<!--rehype:ignore:end-->

<div align="center">
  <a href="https://jaywcjlove.github.io/#/sponsor">
    <img alt="Buy me a coffee" src="https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee" />
  </a>
  <a href="https://github.com/uiwjs/react-color/actions/workflows/ci.yml">
    <img alt="Build & Deploy" src="https://github.com/uiwjs/react-color/actions/workflows/ci.yml/badge.svg" />
  </a>
  <a href="https://uiwjs.github.io/react-color/coverage/lcov-report/">
    <img alt="Coverage Status" src="https://uiwjs.github.io/react-color/coverage/badges.svg" />
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md">
    <img alt="Open in unpkg" src="https://img.shields.io/badge/Open%20in-unpkg-blue" />
  </a>
  <a href="https://bundlephobia.com/package/@uiw/react-color">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@uiw/react-color" />
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-color">
    <img alt="npm version" src="https://img.shields.io/npm/v/@uiw/react-color.svg" />
  </a>
</div>

<div align="center">
  <strong>react-color</strong> is a tiny color picker widget component for React apps. These components can be installed and used separately.
</div>

<!--rehype:ignore:start-->
<br/><br/>
<p align="center">
  <a title="React Color" href="https://uiwjs.github.io/react-color/">
    <img src="https://user-images.githubusercontent.com/1680273/126048210-964aa087-8641-428e-a4e4-67cdca812159.png" alt="@uiw/react-color" />
  </a>
</p>
<br/><br/>

<!--rehype:ignore:end-->

## Getting Started

```bash
npm i @uiw/react-color
```

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark) [![Open in Github gh-pages](https://img.shields.io/badge/Open%20In-Github%20gh--pages-blue?logo=github)](https://uiwjs.github.io/react-color/)

```jsx
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

function Demo() {
  const [hex, setHex] = useState("#fff");
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
```

## Support dark/night Theme

```css
[data-color-mode*='dark'] .w-color-sketch {
  --sketch-background: #323232 !important;
}

[data-color-mode*='dark'] .w-color-swatch {
  --sketch-swatch-border-top: 1px solid #525252 !important;
}

[data-color-mode*='dark'] .w-color-block {
  --block-background-color: #323232 !important;
  --block-box-shadow: rgb(0 0 0 / 10%) 0 1px !important;
}

[data-color-mode*='dark'] .w-color-editable-input {
  --editable-input-label-color: #757575 !important;
  --editable-input-box-shadow: #616161 0px 0px 0px 1px inset !important;
  --editable-input-color: #bbb !important;
}

[data-color-mode*='dark'] .w-color-github {
  --github-border: 1px solid rgba(0, 0, 0, 0.2) !important;
  --github-background-color: #323232 !important;
  --github-box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px !important;
  --github-arrow-border-color: rgba(0, 0, 0, 0.15) !important;
}

[data-color-mode*='dark'] .w-color-compact {
  --compact-background-color: #323232 !important;
}

[data-color-mode*='dark'] .w-color-material {
  --material-background-color: #323232 !important;
  --material-border-bottom-color: #707070 !important;
}

[data-color-mode*='dark'] .w-color-alpha {
  --alpha-pointer-background-color: #6a6a6a !important;
  --alpha-pointer-box-shadow: rgb(0 0 0 / 37%) 0px 1px 4px 0px !important;
}
```

## Documentation

You can find the react-color documentation [on the website](https://uiwjs.github.io/react-color/).

## Packages

Package | Bundle size(gzip) | Downloads | Version / unpkg
----- | ----- | ----  | ----
[`@uiw/react-color`](https://uiwjs.github.io/react-color/) | [![npm bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md)
[`@uiw/react-color-sketch`](https://uiwjs.github.io/react-color/#/sketch) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-sketch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-sketch?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-sketch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)
[`@uiw/react-color-slider`](https://uiwjs.github.io/react-color/#/slider) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-slider?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)
[`@uiw/react-color-compact`](https://uiwjs.github.io/react-color/#/compact) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-compact?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-compact?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-compact) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)
[`@uiw/react-color-material`](https://uiwjs.github.io/react-color/#/material) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-material?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-material) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-material?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-material) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-material?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-material) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-material.svg)](https://www.npmjs.com/package/@uiw/react-color-material) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-material/file/README.md)
[`@uiw/react-color-colorful`](https://uiwjs.github.io/react-color/#/colorful) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-colorful?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-colorful?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-colorful) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)
[`@uiw/react-color-wheel`](https://uiwjs.github.io/react-color/#/wheel) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-wheel?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-wheel?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-wheel) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)
[`@uiw/react-color-circle`](https://uiwjs.github.io/react-color/#/circle) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-circle?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-circle?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-circle.svg)](https://www.npmjs.com/package/@uiw/react-color-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-circle/file/README.md)
[`@uiw/react-color-block`](https://uiwjs.github.io/react-color/#/block) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-block?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-block) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-block?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-block) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-block?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-block) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-block.svg)](https://www.npmjs.com/package/@uiw/react-color-block) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-block/file/README.md)
[`@uiw/react-color-chrome`](https://uiwjs.github.io/react-color/#/chrome) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-chrome?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-chrome) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-chrome?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-chrome) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-chrome?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-chrome) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-chrome.svg)](https://www.npmjs.com/package/@uiw/react-color-chrome) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-chrome/file/README.md)
[`@uiw/react-color-github`](https://uiwjs.github.io/react-color/#/github) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-github?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-github) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-github) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-github?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-github) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)

#### `Base Components`

Package | Bundle size(gzip) | Downloads | Version / unpkg
----- | ----- | ----- | ----
[`@uiw/react-color-saturation`](https://uiwjs.github.io/react-color/#/saturation) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-saturation?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation?color=green&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-saturation?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-saturation) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)
[`@uiw/react-color-hue`](https://uiwjs.github.io/react-color/#/hue) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-hue?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-hue?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-hue) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)
[`@uiw/react-color-alpha`](https://uiwjs.github.io/react-color/#/alpha) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-alpha?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-alpha?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-alpha) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-alpha/file/README.md)
[`@uiw/react-color-swatch`](https://uiwjs.github.io/react-color/#/swatch) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-swatch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-swatch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-swatch?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-swatch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-swatch.svg)](https://www.npmjs.com/package/@uiw/react-color-swatch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-swatch/file/README.md)
[`@uiw/react-color-shade-slider`](https://uiwjs.github.io/react-color/#/shade-slider) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-shade-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-shade-slider?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)
[`@uiw/react-color-editable-input`](https://uiwjs.github.io/react-color/#/editable-input) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-editable-input?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-editable-input) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input/file/README.md)
[`@uiw/react-color-editable-input-rgba`](https://uiwjs.github.io/react-color/#/editable-input-rgba) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input-rgba?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-rgba?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-editable-input-rgba?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-rgba.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-rgba/file/README.md)
[`@uiw/react-color-editable-input-hsla`](https://uiwjs.github.io/react-color/#/editable-input-hsla) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input-hsla?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-hsla?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-editable-input-hsla?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-hsla.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-hsla/file/README.md)
[`@uiw/react-drag-event-interactive`](https://uiwjs.github.io/react-color/#/drag-event-interactive) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-drag-event-interactive?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-drag-event-interactive?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) | [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)
[`@uiw/color-convert`](https://uiwjs.github.io/react-color/#/convert) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/color-convert?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/color-convert) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/color-convert) | [![npm downloads](https://badgen.net/npm/dw/@uiw/color-convert?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/color-convert) | [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/color-convert/file/README.md)
[`@uiw/react-color-name`](https://uiwjs.github.io/react-color/#/name) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-name?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-name) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-name?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-name) | [![npm downloads](https://badgen.net/npm/dw/@uiw/react-color-name?label=npm&color=dd4e4c)](https://www.npmjs.com/package/@uiw/react-color-name) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-name.svg)](https://www.npmjs.com/package/@uiw/react-color-name) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-name/file/README.md)

## Development

```bash
npm install       # Installation dependencies
npm run build     # Compile all package
```

```bash
cd packages/color-block
# listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch # Monitor the compiled package `@uiw/react-block`
```

```bash
npm run start     # development mode, listen to compile preview website instance
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
