React Color
===

<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-color/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-color/actions/workflows/ci.yml) [![Coverage Status](https://coveralls.io/repos/github/uiwjs/react-color/badge.svg?branch=main)](https://coveralls.io/github/uiwjs/react-color?branch=main) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color)](https://bundlephobia.com/package/@uiw/react-color) [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color)

Color picker component for React.

## Getting Started

```bash
npm i @uiw/react-color
```

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import { Sketch } from '@uiw/react-color';

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

#### `@uiw/react-color`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color)](https://bundlephobia.com/package/@uiw/react-color) [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark) 

#### `@uiw/react-color-saturation`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124278948-7d05f400-db79-11eb-9358-e290a0b636a2.png)

#### `@uiw/react-color-hue`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124279725-6a3fef00-db7a-11eb-95b7-fba428a7c2ba.png)

#### `@uiw/react-color-alpha`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-alpha/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124279988-b723c580-db7a-11eb-976f-9cecf2960b5f.png)

#### `@uiw/react-color-shade-slider`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124280065-d3276700-db7a-11eb-8640-fc756b80ed1c.png)

#### `@uiw/react-color-slider`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)

#### `@uiw/react-color-sketch`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)

![image](https://user-images.githubusercontent.com/1680273/124280267-0ff35e00-db7b-11eb-8989-2a35006e114f.png)

#### `@uiw/color-convert`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert)](https://bundlephobia.com/package/@uiw/color-convert) [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-convert/file/README.md)

#### `@uiw/react-drag-event-interactive`

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)
