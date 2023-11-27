Color Convert
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert)](https://bundlephobia.com/package/@uiw/color-convert) [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/color-convert/file/README.md)

## Install

```bash
npm i @uiw/color-convert
```

## Usage

```js
import { hsvaToHsla } from '@uiw/color-convert'
```

## API

#### `rgbaToHsva`

```js
rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 }) //=> { h: 0, s: 0, v: 100, a: 1 }
```

#### `hexToHsva`

```js
hexToHsva("#ffffff") //=> { h: 0, s: 0, v: 100, a: 1 }
```

#### `hsvaToHex`

```js
hsvaToHex({ h: 0, s: 0, v: 100, a: 1 }) // => "#ffffff"
```

#### `hsvaToHexa`

```js
hsvaToHexa({ h: 0, s: 0, v: 30, a: 0.4875 }) // => '#4d4d4d7c'
hsvaToHexa({ h: 0, s: 0, v: 100, a: 1 }) // => '#ffffffff'
hsvaToHexa({ h: 60, s: 100, v: 100, a: 1 }) // => '#ffff00ff'
```

#### `hsvaToHsla`

```js
hsvaToHsla({ h: 0, s: 0, v: 100, a: 1 }) // => { h: 0, s: 0, l: 100, a: 1 }
```

#### `hslaToHsva`

```js
hslaToHsva({ h: 0, s: 100, l: 50, a: 1 }) // => { h: 0, s: 100, v: 100, a: 1 }
hslaToHsva({ h: 0, s: 0, l: 0, a: 1 }) // => { h: 0, s: 0, v: 0, a: 1 }
hslaToHsva({ h: 200, s: 25, l: 32, a: 1 }) // => { h: 200, s: 40, v: 40, a: 1 }
```

#### `hslStringToHsla`

```js
hslStringToHsla('')
// => { h: undefined, s: undefined, l: undefined, a: undefined }
hslStringToHsla('hsl(50, 10%, 10%)')
// => { h: 50, s: 10, l: 10 }
hslStringToHsla('hsl(49deg 90% 65% / 39%)')
// => { h: 49, s: 90, l: 65, a: 39 }
```

#### `hsvaToHslString`

```js
hsvaToHslString({ h: 200, s: 40, v: 40, a: 1 }) // => 'hsl(200, 25%, 32%)'
hsvaToHslString({ h: 0, s: 0, v: 0, a: 1 }) // => 'hsl(0, 0%, 0%)'
```

#### `hslStringToHsva`

```js
hslStringToHsva('hsl(0, 0%, 100%)') // => { h: 0, s: 0, v: 100, a: 1 }
```

#### `hslaStringToHsva`

```js
hslaStringToHsva('hsla(0deg, 0%, 0%, 0.5)') // => { h: 0, s: 0, v: 0, a: 0.5 }
hslaStringToHsva('hsla(200, 25%, 32%, 1)') // => { h: 200, s: 40, v: 40, a: 1 }
hslaStringToHsva('hsla(.5turn 25% 32% / 50%)') // => { h: 180, s: 40, v: 40, a: 0.5 }
```

#### `hsvaToRgba`

```js
hsvaToRgba({ h: 0, s: 0, v: 100, a: 1 }) //=> { r: 255, g: 255, b: 255, a: 1 }
hsvaToRgba({ h: 128, s: 0, v: 100, a: 1 }) //=> { r: 255, g: 255, b: 255, a: 1 }
hsvaToRgba({ h: 0, s: 100, v: 100, a: 0.567 }) //=> { r: 255, g: 0, b: 0, a: 0.567 }
```

#### `rgbaToHsva`

```js
rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 }) // => { h: 0, s: 0, v: 100, a: 1 }
```

#### `rgbStringToHsva`

```js
rgbStringToHsva('rgb(255, 255, 255)') // => { h: 0, s: 0, v: 100, a: 1 }
```

#### `hsvaToRgbString`

```js
hsvaToRgbString({ h: 0, s: 0, v: 100, a: 1 }) // => rgb(255, 255, 255)
```

#### `hsvaToRgbaString`

```js
hsvaToRgbaString({ h: 200, s: 40, v: 40, a: 0.5 }) // => rgba(61, 88, 102, 0.5)
```

#### `rgbaStringToHsva`

```js
rgbaStringToHsva('rgba(61, 88, 102, 0.5)') // => { h: 200, s: 40, v: 40, a: 0.5 }
```

#### `hsvaToHsvaString`

```js
hsvaToHsvaString({ h: 0, s: 0, v: 100, a: 1 }) // => hsva(0, 0%, 100%, 1)
```

#### `hsvaToHsvString`

```js
hsvaToHsvString({ h: 0, s: 0, v: 100, a: 1 }) // => hsv(0, 0%, 100%)
```

#### `hsvStringToHsva`

```js
hsvStringToHsva('hsv(0, 11%, 0%)') //=> { h: 0, s: 11, v: 0, a: 1, }
hsvStringToHsva('hsv(90deg 20% 10%)') //=> { h: 90, s: 20, v: 10, a: 1, }
hsvStringToHsva('hsv(100grad 20% 10%)') //=> { h: 90, s: 20, v: 10, a: 1, }
```

#### `rgbaToRgb`

```js
rgbaToRgb({ r: 0, g: 0, b: 0, a: 1 }) //=> { r: 0, g: 0, b: 0 }
```

#### `hslaToHsl`

```js
hslaToHsl({ h: 0, s: 0, l: 0, a: 1 }) //=> { h: 0, s: 0, l: 0 }
```

#### `hsvaToHsv`

```js
hsvaToHsv({ h: 0, s: 0, v: 0, a: 1 }) //=> { h: 0, s: 0, v: 0 }
```

#### `equalHex`

```js
equalHex("#8c0dba", "#8c0dba") // => true
```

#### `equalColorObjects`

```js
equalColorObjects({ h: 0, s: 0, v: 5, a: 0.5 }, { h: 0, s: 0, v: 5, a: 0.5 }) // => true
```

#### `equalColorString`

```js
equalColorString("rgb(0,0,0)", "rgb(0, 0, 0)") //=> true
```

#### `hsvaToHslaString`

```js
hsvaToHslaString({ h: 200, s: 40, v: 40, a: 0.5 }) //=> hsla(200, 25%, 32%, 0.5)
```

#### `validHex`

```js
validHex("#8c0dba") //=> true
```

#### `rgbaToHexa`

```js
rgbaToHexa({ b: 26, g: 2, r: 209, a: 1 }) // => '#d1021aff'
```

#### `color`

```js
const { rgb, rgba, hsl, hsv, hsla, hsva } = color('#d1021a');
// rgb   => { b: 26, g: 2, r: 209, }
// rgba  => { b: 26, g: 2, r: 209, a: 1 }
// hsl   => { h: 353.04347826086956, l: 41.37254901960784, s: 98.10426540284361 }
// hsla  => { h: 353.04347826086956, l: 41.37254901960784, s: 98.10426540284361, a: 1 }
// hsv   => { h: 353.04347826086956, s: 99.04306220095694, v: 81.96078431372548 }
// hsva  => { h: 353.04347826086956, s: 99.04306220095694, v: 81.96078431372548, a: 1 }
// hex   => '#d1021a'
// hexa  => '#d1021aff'
```

<!--footer-dividing-->

## type

```ts
export declare const equalColorObjects: (first: ObjectColor, second: ObjectColor) => boolean;
export declare const equalColorString: (first: string, second: string) => boolean;
export declare const equalHex: (first: string, second: string) => boolean;
export declare const validHex: (hex: string) => boolean;
export declare const getContrastingColor: (str: string | HsvaColor) => "#ffffff" | "#000000";
export type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;
export type ColorResult = {
  rgb: RgbColor;
  hsl: HslColor;
  hsv: HsvColor;
  rgba: RgbaColor;
  hsla: HslaColor;
  hsva: HsvaColor;
  hex: string;
  hexa: string;
};
export interface HsvColor {
  h: number;
  s: number;
  v: number;
}
export interface HsvaColor extends HsvColor {
  a: number;
}
export interface RgbColor {
  r: number;
  g: number;
  b: number;
}
export interface RgbaColor extends RgbColor {
  a: number;
}
/**
 * ```js
 * rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 }) //=> { h: 0, s: 0, v: 100, a: 1 }
 * ```
 */
export declare const rgbaToHsva: ({ r, g, b, a }: RgbaColor) => HsvaColor;
export declare const hsvaToHslString: (hsva: HsvaColor) => string;
export declare const hsvaToHsvString: ({ h, s, v }: HsvaColor) => string;
export declare const hsvaToHsvaString: ({ h, s, v, a }: HsvaColor) => string;
export declare const hsvaToHslaString: (hsva: HsvaColor) => string;
export declare const hslStringToHsla: (str: string) => HslaColor;
export declare const hslaStringToHsva: (hslString: string) => HsvaColor;
export declare const hslStringToHsva: (hslString: string) => HsvaColor;
export declare const hslaToHsva: ({ h, s, l, a }: HslaColor) => HsvaColor;
export interface HslColor {
  h: number;
  s: number;
  l: number;
}
export interface HslaColor extends HslColor {
  a: number;
}
export declare const hsvaToHsla: ({ h, s, v, a }: HsvaColor) => HslaColor;
export declare const hsvaStringToHsva: (hsvString: string) => HsvaColor;
export declare const parseHue: (value: string, unit?: string) => number;
export declare const hsvStringToHsva: (hsvString: string) => HsvaColor;
export declare const rgbaStringToHsva: (rgbaString: string) => HsvaColor;
export declare const rgbStringToHsva: (rgbaString: string) => HsvaColor;
/** Converts an RGBA color plus alpha transparency to hex */
export declare const rgbaToHex: ({ r, g, b }: RgbaColor) => string;
export declare const rgbaToHexa: ({ r, g, b, a }: RgbaColor) => string;
export declare const hexToHsva: (hex: string) => HsvaColor;
export declare const hexToRgba: (hex: string) => RgbaColor;
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
export declare const hsvaToRgba: ({ h, s, v, a }: HsvaColor) => RgbaColor;
export declare const hsvaToRgbString: (hsva: HsvaColor) => string;
export declare const hsvaToRgbaString: (hsva: HsvaColor) => string;
export declare const rgbaToRgb: ({ r, g, b }: RgbaColor) => RgbColor;
export declare const hslaToHsl: ({ h, s, l }: HslaColor) => HslColor;
export declare const hsvaToHex: (hsva: HsvaColor) => string;
export declare const hsvaToHexa: (hsva: HsvaColor) => string;
export declare const hsvaToHsv: ({ h, s, v }: HsvaColor) => HsvColor;
export declare const color: (str: string | HsvaColor) => ColorResult;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
