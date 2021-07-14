<div align="center">
  <a title="React Color" href="https://uiwjs.github.io/react-color/">
    <img src="https://user-images.githubusercontent.com/1680273/125317637-bd305800-e36b-11eb-945c-9d39f52b0b20.png" width="630" alt="@uiw/react-color" />
  </a>
</div>

<!--dividing-->

<div align="center">
  <a href="https://github.com/uiwjs/react-color/actions/workflows/ci.yml">
    <img alt="Build & Deploy" src="https://github.com/uiwjs/react-color/actions/workflows/ci.yml/badge.svg" />
  </a>
  <a href="https://coveralls.io/github/uiwjs/react-color?branch=main">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/uiwjs/react-color/badge.svg?branch=main" />
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
  <strong>react-color</strong> is a tiny color picker component for React apps.
</div>

## Getting Started

```bash
npm i @uiw/react-color
```

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark) [![Open in Github gh-pages](https://img.shields.io/badge/Open%20In-Github%20gh--pages-blue?logo=github)](https://uiwjs.github.io/react-color/)

```jsx
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';

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

## Packages

Package | Bundle size(gzip) | Version / unpkg
----- | ----- | ----
[`@uiw/react-color`](https://uiwjs.github.io/react-color/#getting-started) | [![npm bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color) |  [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md)
[`@uiw/react-color-sketch`](https://uiwjs.github.io/react-color/#react-color-sketch) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-sketch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-sketch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)
[`@uiw/react-color-slider`](https://uiwjs.github.io/react-color/#react-color-slider) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)
[`@uiw/react-color-compact`](https://uiwjs.github.io/react-color/#react-color-compact) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-compact?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-compact?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)
[`@uiw/react-color-material`](https://uiwjs.github.io/react-color/#react-color-material) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-material?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-material) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-material?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-material) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-material.svg)](https://www.npmjs.com/package/@uiw/react-color-material) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-material/file/README.md)
[`@uiw/react-color-colorful`](https://uiwjs.github.io/react-color/#react-color-colorful) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-colorful?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-colorful?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)
[`@uiw/react-color-wheel`](https://uiwjs.github.io/react-color/#react-color-wheel) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-wheel?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-wheel?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)
[`@uiw/react-color-circle`](https://uiwjs.github.io/react-color/#react-color-colorful) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-circle?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-circle.svg)](https://www.npmjs.com/package/@uiw/react-color-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-circle/file/README.md)
[`@uiw/react-color-saturation`](https://uiwjs.github.io/react-color/#react-color-saturation) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-saturation?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-saturation?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)
[`@uiw/react-color-hue`](https://uiwjs.github.io/react-color/#react-color-hue) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-hue?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-hue?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)
[`@uiw/react-color-alpha`](https://uiwjs.github.io/react-color/#react-color-alpha) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-alpha?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-alpha?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-alpha/file/README.md)
[`@uiw/react-color-swatch`](https://uiwjs.github.io/react-color/#react-color-swatch) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-swatch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-swatch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-swatch.svg)](https://www.npmjs.com/package/@uiw/react-color-swatch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-swatch/file/README.md)
[`@uiw/react-color-shade-slider`](https://uiwjs.github.io/react-color/#react-color-shade-slider) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-shade-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-shade-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)
[`@uiw/react-color-editable-input`](https://uiwjs.github.io/react-color/#react-color-editable-input) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-editable-input?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-editable-input?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input/file/README.md)
[`@uiw/react-color-editable-input-rgba`](https://uiwjs.github.io/react-color/#react-color-editable-input-rgba) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-color-editable-input-rgba?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-color-editable-input-rgba?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-rgba.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-rgba/file/README.md)
[`@uiw/react-drag-event-interactive`](https://uiwjs.github.io/react-color/#react-drag-event-interactive) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/react-drag-event-interactive?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/react-drag-event-interactive?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) | [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)
[`@uiw/color-convert`](https://uiwjs.github.io/react-color/#color-convert) | [![bundle size](https://badgen.net/bundlephobia/min/@uiw/color-convert?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/color-convert) [![bundle size(gzip)](https://badgen.net/bundlephobia/minzip/@uiw/color-convert?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/color-convert) | [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/color-convert/file/README.md)

<!--react-color-sketch-->
<!--react-color-slider-->
<!--react-color-compact-->
<!--react-color-material-->
<!--react-color-colorful-->
<!--react-color-circle-->
<!--react-color-swatch-->
<!--react-color-alpha-->
<!--react-color-hue-->
<!--react-color-saturation-->
<!--react-color-shade-slider-->
<!--react-color-editable-input-->
<!--react-color-editable-input-rgba-->
<!--react-drag-event-interactive-->
<!--color-convert-->

## License

Licensed under the MIT License.
