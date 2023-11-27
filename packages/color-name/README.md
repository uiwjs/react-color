React Color Name
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-name)](https://bundlephobia.com/package/@uiw/react-color-name) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-name.svg)](https://www.npmjs.com/package/@uiw/react-color-name) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-name/file/README.md)

Color Name to Hex. [**`@react-color`**](https://uiwjs.github.io/react-color).

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
import named from 'colors-named';
import hex from 'colors-named-hex';
export type ColorKeywords = {
    [key in typeof named[number]]: typeof hex[number];
};
/**
 * Extended color keywords
 * https://www.w3.org/TR/css-color-3/#svg-color
 */
export declare const colorKeywords: ColorKeywords;
export declare const baseNamed: readonly ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
export type ColorKeywordsBase = {
    [key in typeof baseNamed[number]]: ColorKeywords[key];
};
export declare const colorKeywordsBase: ColorKeywordsBase;
export default function colorNameToHex(name: keyof ColorKeywords): "#F0F8FF" | "#FAEBD7" | "#00FFFF" | "#7FFFD4" | "#F0FFFF" | "#F5F5DC" | "#FFE4C4" | "#000000" | "#FFEBCD" | "#0000FF" | "#8A2BE2" | "#A52A2A" | "#DEB887" | "#5F9EA0" | "#7FFF00" | "#D2691E" | "#FF7F50" | "#6495ED" | "#FFF8DC" | "#DC143C" | "#00008B" | "#008B8B" | "#B8860B" | "#A9A9A9" | "#006400" | "#BDB76B" | "#8B008B" | "#556B2F" | "#FF8C00" | "#9932CC" | "#8B0000" | "#E9967A" | "#8FBC8F" | "#483D8B" | "#2F4F4F" | "#00CED1" | "#9400D3" | "#FF1493" | "#00BFFF" | "#696969" | "#1E90FF" | "#B22222" | "#FFFAF0" | "#228B22" | "#FF00FF" | "#DCDCDC" | "#F8F8FF" | "#FFD700" | "#DAA520" | "#808080" | "#008000" | "#ADFF2F" | "#F0FFF0" | "#FF69B4" | "#CD5C5C" | "#4B0082" | "#FFFFF0" | "#F0E68C" | "#E6E6FA" | "#FFF0F5" | "#7CFC00" | "#FFFACD" | "#ADD8E6" | "#F08080" | "#E0FFFF" | "#FAFAD2" | "#D3D3D3" | "#90EE90" | "#FFB6C1" | "#FFA07A" | "#20B2AA" | "#87CEFA" | "#778899" | "#B0C4DE" | "#FFFFE0" | "#00FF00" | "#32CD32" | "#FAF0E6" | "#800000" | "#66CDAA" | "#0000CD" | "#BA55D3" | "#9370DB" | "#3CB371" | "#7B68EE" | "#00FA9A" | "#48D1CC" | "#C71585" | "#191970" | "#F5FFFA" | "#FFE4E1" | "#FFE4B5" | "#FFDEAD" | "#000080" | "#FDF5E6" | "#808000" | "#6B8E23" | "#FFA500" | "#FF4500" | "#DA70D6" | "#EEE8AA" | "#98FB98" | "#AFEEEE" | "#DB7093" | "#FFEFD5" | "#FFDAB9" | "#CD853F" | "#FFC0CB" | "#DDA0DD" | "#B0E0E6" | "#800080" | "#663399" | "#FF0000" | "#BC8F8F" | "#4169E1" | "#8B4513" | "#FA8072" | "#F4A460" | "#2E8B57" | "#FFF5EE" | "#A0522D" | "#C0C0C0" | "#87CEEB" | "#6A5ACD" | "#708090" | "#FFFAFA" | "#00FF7F" | "#4682B4" | "#D2B48C" | "#008080" | "#D8BFD8" | "#FF6347" | "#40E0D0" | "#EE82EE" | "#F5DEB3" | "#FFFFFF" | "#F5F5F5" | "#FFFF00" | "#9ACD32";
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
