import named from 'colors-named';
import hex from 'colors-named-hex';

export type ColorKeywords = {
  [key in (typeof named)[number]]: (typeof hex)[number];
};

/**
 * Extended color keywords
 * https://www.w3.org/TR/css-color-3/#svg-color
 */
export const colorKeywords = named.reduce((obj, key, index) => {
  obj[key] = hex[index];
  return obj;
}, {} as ColorKeywords);

export const baseNamed = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow',
] as const;
export type ColorKeywordsBase = {
  [key in (typeof baseNamed)[number]]: ColorKeywords[key];
};

export const colorKeywordsBase = baseNamed.reduce((obj, key) => {
  obj[key] = colorKeywords[key];
  return obj;
}, {} as ColorKeywordsBase);

export default function colorNameToHex(name: keyof ColorKeywords) {
  return colorKeywords[name];
}
