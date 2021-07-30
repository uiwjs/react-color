Color Convert
===

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

## License

Licensed under the MIT License.
