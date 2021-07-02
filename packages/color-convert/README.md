Color Convert
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert)](https://bundlephobia.com/package/@uiw/color-convert) [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert)

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

#### `hsvaToHsla`

```js
hsvaToHsla({ h: 0, s: 0, v: 100, a: 1 }) // => { h: 0, s: 0, l: 100, a: 1 }
```

#### `hslaToHsva`

```js
hsvaToHsla({ h: 0, s: 0, l: 100, a: 1 }) // => { h: 0, s: 0, v: 100, a: 1 }
```

#### `hsvaToHslString`

```js
hsvaToHsla({ h: 200, s: 40, v: 40, a: 1 }) // => hsl(200, 25%, 32%)
```

#### `hslStringToHsva`

```js
hslStringToHsva('hsl(0, 0%, 100%)') // => { h: 0, s: 0, v: 100, a: 1 }
```

#### `hslaStringToHsva`

```js
hslStringToHsva('hsla(0deg, 0%, 0%, 0.5)') // => { h: 0, s: 0, v: 0, a: 0.5 }
```

#### `hsvaToRgba`

```js
hslStringToHsva({ h: 0, s: 0, v: 100, a: 1 }) // => { r: 255, g: 255, b: 255, a: 1 }
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
hsvaToHsvString('hsva(0, 11%, 0, 0.5)') // => { h: 0, s: 11, v: 0, a: 0.5 }
```

#### `rgbaToRgb`

```js
rgbaToRgb({ r: 0, g: 0, b: 0, a: 1 }) //=> { r: 0, g: 0, b: 0 }
```

#### `rgbaToRgb`

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

