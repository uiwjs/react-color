React Color
===

Color picker component for React.

## Getting Started

```bash
npm i @uiw/react-color
```

```jsx
import { ColorSaturation, ColorAlpha, ColorHue, hsvaToHslaString } from '@uiw/react-color';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <ColorAlpha
      width={200}
      hsva={hsva}
      onChange={(newAlpha) => {
        setHsva({ ...hsva, ...newAlpha });
      }}
    />
  );
}
```

## Packages

**`@uiw/react-color`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color)](https://bundlephobia.com/package/@uiw/react-color) [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color)

**`@uiw/react-color-saturation`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation)

**`@uiw/react-color-hue`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue)](https://bundlephobia.com/package/@uiw/react-color-hue) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue)

**`@uiw/react-color-alpha`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha)

**`@uiw/react-color-shade-slider`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider)

**`@uiw/react-color-slider`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider)](https://bundlephobia.com/package/@uiw/react-color-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider)

**`@uiw/react-color-sketch`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch)

**`@uiw/color-convert`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert)](https://bundlephobia.com/package/@uiw/color-convert) [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert)

**`@uiw/react-drag-event-interactive`**

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive)
