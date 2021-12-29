React Color Name
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-name)](https://bundlephobia.com/package/@uiw/react-color-name) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-name.svg)](https://www.npmjs.com/package/@uiw/react-color-name) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-name/file/README.md)

Color Name to Hex.

## Install

```bash
npm i @uiw/react-color-name
```

## Usage

```js
import colorNameToHex from '@uiw/react-color-name';

colorNameToHex('maroon');   // => #800000
colorNameToHex('navy');     // => #000080
colorNameToHex('olive');    // => #808000
colorNameToHex('purple');   // => #800080
colorNameToHex('red');      // => #ff0000
colorNameToHex('silver');   // => #c0c0c0
colorNameToHex('teal');     // => #008080
colorNameToHex('white');    // => #ffffff
```

## Props

```ts
export declare const colorKeywordsBase: {
    aqua: string;
    black: string;
    blue: string;
    fuchsia: string;
    gray: string;
    green: string;
    lime: string;
    maroon: string;
    navy: string;
    olive: string;
    purple: string;
    red: string;
    silver: string;
    teal: string;
    white: string;
    yellow: string;
};
/**
 * Extended color keywords
 * https://www.w3.org/TR/css-color-3/#svg-color
 */
export declare const colorKeywords: {
    aliceblue: string;
    antiquewhite: string;
    aquamarine: string;
    azure: string;
    beige: string;
    bisque: string;
    blanchedalmond: string;
    blueviolet: string;
    brown: string;
    burlywood: string;
    cadetblue: string;
    chartreuse: string;
    chocolate: string;
    coral: string;
    cornflowerblue: string;
    cornsilk: string;
    crimson: string;
    cyan: string;
    darkblue: string;
    darkcyan: string;
    darkgoldenrod: string;
    darkgray: string;
    darkgreen: string;
    darkgrey: string;
    darkkhaki: string;
    darkmagenta: string;
    darkolivegreen: string;
    darkorange: string;
    darkorchid: string;
    darkred: string;
    darksalmon: string;
    darkseagreen: string;
    darkslateblue: string;
    darkslategray: string;
    darkslategrey: string;
    darkturquoise: string;
    darkviolet: string;
    deeppink: string;
    deepskyblue: string;
    dimgray: string;
    dimgrey: string;
    dodgerblue: string;
    firebrick: string;
    floralwhite: string;
    forestgreen: string;
    gainsboro: string;
    ghostwhite: string;
    gold: string;
    goldenrod: string;
    greenyellow: string;
    grey: string;
    honeydew: string;
    hotpink: string;
    indianred: string;
    indigo: string;
    ivory: string;
    khaki: string;
    lavender: string;
    lavenderblush: string;
    lawngreen: string;
    lemonchiffon: string;
    lightblue: string;
    lightcoral: string;
    lightcyan: string;
    lightgoldenrodyellow: string;
    lightgray: string;
    lightgreen: string;
    lightgrey: string;
    lightpink: string;
    lightsalmon: string;
    lightseagreen: string;
    lightskyblue: string;
    lightslategray: string;
    lightslategrey: string;
    lightsteelblue: string;
    lightyellow: string;
    limegreen: string;
    linen: string;
    magenta: string;
    mediumaquamarine: string;
    mediumblue: string;
    mediumorchid: string;
    mediumpurple: string;
    mediumseagreen: string;
    mediumslateblue: string;
    mediumspringgreen: string;
    mediumturquoise: string;
    mediumvioletred: string;
    midnightblue: string;
    mintcream: string;
    mistyrose: string;
    moccasin: string;
    navajowhite: string;
    oldlace: string;
    olivedrab: string;
    orange: string;
    orangered: string;
    orchid: string;
    palegoldenrod: string;
    palegreen: string;
    paleturquoise: string;
    palevioletred: string;
    papayawhip: string;
    peachpuff: string;
    peru: string;
    pink: string;
    plum: string;
    powderblue: string;
    rosybrown: string;
    royalblue: string;
    saddlebrown: string;
    salmon: string;
    sandybrown: string;
    seagreen: string;
    seashell: string;
    sienna: string;
    skyblue: string;
    slateblue: string;
    slategray: string;
    slategrey: string;
    snow: string;
    springgreen: string;
    steelblue: string;
    tan: string;
    thistle: string;
    tomato: string;
    turquoise: string;
    violet: string;
    wheat: string;
    whitesmoke: string;
    yellowgreen: string;
    aqua: string;
    black: string;
    blue: string;
    fuchsia: string;
    gray: string;
    green: string;
    lime: string;
    maroon: string;
    navy: string;
    olive: string;
    purple: string;
    red: string;
    silver: string;
    teal: string;
    white: string;
    yellow: string;
};
export default function colorNameToHex(name: keyof typeof colorKeywords): string;
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
