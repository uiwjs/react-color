<div align="center">
  <a title="React Color" href="https://uiwjs.github.io/react-color/">
    <img src="https://user-images.githubusercontent.com/1680273/124940686-c4d6c080-e03c-11eb-8ca1-173f52f2cd4b.png" width="630" alt="@uiw/react-color" />
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

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import { Alpha, Hue, Slider, Sketch, Compact } from '@uiw/react-color';
import { ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';

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

Package | Version / unpkg / bundle size
----- | -----
[`@uiw/react-color`](https://uiwjs.github.io/react-color/#getting-started) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color)](https://bundlephobia.com/package/@uiw/react-color) [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark) 
[`@uiw/react-color-sketch`](https://uiwjs.github.io/react-color/#react-color-sketch) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)
[`@uiw/react-color-slider`](https://uiwjs.github.io/react-color/#react-color-slider) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)
[`@uiw/react-color-compact`](https://uiwjs.github.io/react-color/#react-color-compact) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact)](https://bundlephobia.com/package/@uiw/react-color-compact) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)
[`@uiw/react-color-saturation`](https://uiwjs.github.io/react-color/#react-color-saturation) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)
[`@uiw/react-color-hue`](https://uiwjs.github.io/react-color/#react-color-hue) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)
[`@uiw/react-color-alpha`](https://uiwjs.github.io/react-color/#react-color-alpha) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-alpha/file/README.md)
[`@uiw/react-color-shade-slider`](https://uiwjs.github.io/react-color/#react-color-shade-slider) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)
[`@uiw/color-convert`](https://uiwjs.github.io/react-color/#color-convert) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert)](https://bundlephobia.com/package/@uiw/color-convert) [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/color-convert/file/README.md)
[`@uiw/react-drag-event-interactive`](https://uiwjs.github.io/react-color/#react-drag-event-interactive) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)
[`@uiw/react-color-editable-input`](https://uiwjs.github.io/react-color/#react-drag-event-interactive) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input)](https://bundlephobia.com/package/@uiw/react-color-editable-input) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input/file/README.md)

<!--react-color-sketch-->
<!--react-color-slider-->
<!--react-color-compact-->
<!--react-color-saturation-->
<!--react-color-alpha-->
<!--react-color-hue-->
<!--react-color-shade-slider-->
<!--react-color-editable-input-->
<!--react-drag-event-interactive-->
<!--color-convert-->

## License

Licensed under the MIT License.
