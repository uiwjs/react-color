import { color, getContrastingColor } from '../packages/color-convert/src';
// HEX
import { hexToHsva, hexToRgba, hsvaToHex } from '../packages/color-convert/src';
import { equalHex } from '../packages/color-convert/src/utils';
// HSLA
import { hsvaToHsla, hslaToHsva, HsvaColor, HslaColor } from '../packages/color-convert/src';
// HSL
import { hslaToHsl } from '../packages/color-convert/src';
// HSL string
import { hsvaToHslString, hslStringToHsva } from '../packages/color-convert/src';
// HSLA string
import { hslaStringToHsva } from '../packages/color-convert/src';
// RGBA
import { hsvaToRgba, rgbaToHsva, RgbaColor } from '../packages/color-convert/src';
// RGBA string
import { hsvaToRgbaString, rgbaStringToHsva } from '../packages/color-convert/src';
// RGB
import { rgbaToRgb, rgbaToHex, rgbaToHexa } from '../packages/color-convert/src';
// RGB string
import { hsvaToRgbString, rgbStringToHsva } from '../packages/color-convert/src';
// HSVA String
import { hsvaToHsvaString, hsvaToHslaString, hsvaStringToHsva } from '../packages/color-convert/src';
// HSV
import { hsvaToHsv } from '../packages/color-convert/src';
// HSV string
import { hsvaToHsvString, hsvStringToHsva } from '../packages/color-convert/src';
import { equalColorString, equalColorObjects, validHex } from '../packages/color-convert/src/utils';

it('Converts color => getContrastingColor', () => {
  expect(getContrastingColor('#d0021b')).toEqual('#fff');
  expect(getContrastingColor('#000')).toEqual('#fff');
  expect(getContrastingColor('#fff')).toEqual('#000');
});

it('Converts color => HEX to ColorResult', () => {
  const { rgb, rgba, hex, hexa, hsl, hsla, hsv, hsva } = color('#d1021a');
  expect(hex).toEqual('#d1021a');
  expect(hexa).toEqual('#d1021aff');
  expect(color({ h: 353.04347826086956, s: 99.04306220095694, v: 81.96078431372548, a: 1 }).hex).toEqual('#d1021a');
  expect(rgb).toHaveProperty(['r'], 209);
  expect(rgb).toEqual({ b: 26, g: 2, r: 209 });
  expect(rgba).toEqual({ b: 26, g: 2, r: 209, a: 1 });
  expect(hsl).toEqual({ h: 353.04347826086956, l: 41.37254901960784, s: 98.10426540284361 });
  expect(hsla).toEqual({ h: 353.04347826086956, l: 41.37254901960784, s: 98.10426540284361, a: 1 });
  expect(hsv).toEqual({ h: 353.04347826086956, s: 99.04306220095694, v: 81.96078431372548 });
  expect(hsva).toEqual({ h: 353.04347826086956, s: 99.04306220095694, v: 81.96078431372548, a: 1 });
});

it('Converts color => HEXA to ColorResult', () => {
  const { rgb, rgba, hex, hexa, hsl, hsla, hsv, hsva } = color('#4780f17a');
  expect(hex).toEqual('#4780f1');
  expect(hexa).toEqual('#4780f17a');
  expect(rgb).toHaveProperty(['r'], 71);
  expect(rgb).toEqual({ r: 71, g: 128, b: 241 });
  expect(rgba).toEqual({ r: 71, g: 128, b: 241, a: 0.47843137254901963 });
  expect(hsl).toEqual({ h: 219.88235294117646, s: 85.85858585858585, l: 61.17647058823529 });
  expect(hsla).toEqual({ h: 219.88235294117646, s: 85.85858585858585, l: 61.17647058823529, a: 0.47843137254901963 });
  expect(hsv).toEqual({ h: 219.88235294117646, s: 70.53941908713693, v: 94.50980392156862 });
  expect(hsva).toEqual({ h: 219.88235294117646, s: 70.53941908713693, v: 94.50980392156862, a: 0.47843137254901963 });
});

it('Converts RGBA to HEX', () => {
  expect(rgbaToHex({ r: 208, g: 2, b: 27, a: 1 })).toEqual('#d0021b');
  expect(rgbaToHex({ r: 209, g: 2, b: 26, a: 1 })).toEqual('#d1021a');
  expect(rgbaToHex(hexToRgba('#d0021b'))).toEqual('#d0021b');
  expect(rgbaToHex(hexToRgba('#d1021a'))).toEqual('#d1021a');
});

it('Converts RGBA to HEXA', () => {
  expect(rgbaToHexa(hexToRgba('#4780f17a'))).toEqual('#4780f17a');
  expect(rgbaToHexa({ b: 26, g: 2, r: 209, a: 1 })).toEqual('#d1021aff');
  expect(rgbaToHexa({ b: 26, g: 2, r: 209 } as any)).toEqual('#d1021a');
});

it('Converts HEX to RGBA', () => {
  expect(hsvaToHslString(hexToHsva('#d0021b'))).toEqual('hsl(352.71844660194176, 98.09523809523813%, 41.17647058823529%)');
  expect(hsvaToHex(rgbaToHsva(hexToRgba('#d0021b')))).toEqual('#d0021b');
  expect(hexToRgba('#d0021b')).toMatchObject({ r: 208, g: 2, b: 27, a: 1 });

  expect(hexToRgba('#abc')).toMatchObject({ r: 170, g: 187, b: 204, a: 1 });
  expect(hexToRgba('#aabbcc')).toMatchObject({ r: 170, g: 187, b: 204, a: 1 });
  expect(hexToRgba('#282c34')).toMatchObject({ r: 40, g: 44, b: 52, a: 1 });
  expect(hexToRgba('#4780f17a')).toMatchObject({ r: 71, g: 128, b: 241, a: 0.47843137254901963 });
});

it('Converts HEX to HSVA', () => {
  expect(hexToHsva('#ffffff')).toMatchObject({ h: 0, s: 0, v: 100, a: 1 });
  expect(hexToHsva('#ffff00')).toMatchObject({ h: 60, s: 100, v: 100, a: 1 });
  expect(hexToHsva('#ff0000')).toMatchObject({ h: 0, s: 100, v: 100, a: 1 });
  expect(hexToHsva('#000000')).toMatchObject({ h: 0, s: 0, v: 0, a: 1 });
  expect(hexToHsva('#c62182')).toMatchObject({ h: 324.72727272727275, s: 83.33333333333334, v: 77.64705882352942, a: 1 });
});

it('Converts shorthand HEX to HSVA', () => {
  expect(hexToHsva('#FFF')).toMatchObject({ h: 0, s: 0, v: 100, a: 1 });
  expect(hexToHsva('#FF0')).toMatchObject({ h: 60, s: 100, v: 100, a: 1 });
  expect(hexToHsva('#F00')).toMatchObject({ h: 0, s: 100, v: 100, a: 1 });
  expect(hexToHsva('#ABC')).toMatchObject({ h: 210, s: 16.666666666666664, v: 80, a: 1 });
});

it('Converts HSVA to HEX', () => {
  expect(hsvaToHex({ h: 0, s: 0, v: 100, a: 1 })).toBe('#ffffff');
  expect(hsvaToHex({ h: 60, s: 100, v: 100, a: 1 })).toBe('#ffff00');
  expect(hsvaToHex({ h: 0, s: 100, v: 100, a: 1 })).toBe('#ff0000');
  expect(hsvaToHex({ h: 0, s: 0, v: 0, a: 1 })).toBe('#000000');
  expect(hsvaToHex({ h: 284, s: 93, v: 73, a: 1 })).toBe('#8c0dba');
});

it('Converts HSVA to HSLA', () => {
  let test = (input: HsvaColor, output: HslaColor) => expect(hsvaToHsla(input)).toMatchObject(output);
  test({ h: 0, s: 0, v: 100, a: 1 }, { h: 0, s: 0, l: 100, a: 1 });
  test({ h: 60, s: 100, v: 100, a: 1 }, { h: 60, s: 100, l: 50, a: 1 });
  test({ h: 0, s: 100, v: 100, a: 1 }, { h: 0, s: 100, l: 50, a: 1 });
  test({ h: 0, s: 0, v: 0, a: 1 }, { h: 0, s: 0, l: 0, a: 1 });
  test({ h: 200, s: 40, v: 40, a: 0.499 }, { h: 200, s: 25, l: 32, a: 0.499 });
});

it('Converts HSLA to HSVA', () => {
  let test = (input: HslaColor, output: HsvaColor) => expect(hslaToHsva(input)).toMatchObject(output);

  test({ h: 0, s: 0, l: 100, a: 1 }, { h: 0, s: 0, v: 100, a: 1 });
  test({ h: 60, s: 100, l: 50, a: 1 }, { h: 60, s: 100, v: 100, a: 1 });
  test({ h: 0, s: 100, l: 50, a: 1 }, { h: 0, s: 100, v: 100, a: 1 });
  test({ h: 0, s: 0, l: 0, a: 1 }, { h: 0, s: 0, v: 0, a: 1 });
  test({ h: 200, s: 25, l: 32, a: 1 }, { h: 200, s: 40, v: 40, a: 1 });
});

it('Converts HSVA to HSL string', () => {
  expect(hsvaToHslString({ h: 200, s: 40, v: 40, a: 1 })).toBe('hsl(200, 25%, 32%)');
  expect(hsvaToHslString({ h: 0, s: 0, v: 0, a: 1 })).toBe('hsl(0, 0%, 0%)');
});

it('Converts HSL string to HSVA', () => {
  expect(hslStringToHsva('hsl(0, 0%, 100%)')).toMatchObject({
    h: 0,
    s: 0,
    v: 100,
    a: 1,
  });
  expect(hslStringToHsva('hsl(0,0,100)')).toMatchObject({
    h: 0,
    s: 0,
    v: 100,
    a: 1,
  });
  expect(hslStringToHsva('hsl(60, 100%, 50%)')).toMatchObject({
    h: 60,
    s: 100,
    v: 100,
    a: 1,
  });
  expect(hslStringToHsva('hsl(0, 100%, 50%)')).toMatchObject({
    h: 0,
    s: 100,
    v: 100,
    a: 1,
  });
});

it('Converts HSLA string to HSVA', () => {
  let test = (input: string, output: HsvaColor) => expect(hslaStringToHsva(input)).toMatchObject(output);

  test('hsla(0deg, 0%, 0%, 0.5)', { h: 0, s: 0, v: 0, a: 0.5 });
  test('hsla(200, 25%, 32%, 1)', { h: 200, s: 40, v: 40, a: 1 });
  test('hsla(.5turn 25% 32% / 50%)', { h: 180, s: 40, v: 40, a: 0.5 });
});

it('Converts HSVA to RGBA', () => {
  let test = (input: HsvaColor, output: RgbaColor) => expect(hsvaToRgba(input)).toMatchObject(output);

  test({ h: 0, s: 0, v: 100, a: 1 }, { r: 255, g: 255, b: 255, a: 1 });
  test({ h: 128, s: 0, v: 100, a: 1 }, { r: 255, g: 255, b: 255, a: 1 });
  test({ h: 0, s: 100, v: 100, a: 0.567 }, { r: 255, g: 0, b: 0, a: 0.567 });
});

it('Converts RGBA to HSVA', () => {
  expect(rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 })).toMatchObject({
    h: 0,
    s: 0,
    v: 100,
    a: 1,
  });
  expect(rgbaToHsva({ r: 0, g: 255, b: 0, a: 1 })).toMatchObject({
    h: 120,
    s: 100,
    v: 100,
    a: 1,
  });
  expect(rgbaToHsva({ r: 255, g: 0, b: 0, a: 1 })).toMatchObject({
    h: 0,
    s: 100,
    v: 100,
    a: 1,
  });
});

it('Converts RGB string to HSVA', () => {
  expect(rgbStringToHsva('rgb(255, 255, 255)')).toMatchObject({
    h: 0,
    s: 0,
    v: 100,
    a: 1,
  });
  expect(rgbStringToHsva('rgb(0,0,0)')).toMatchObject({
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  });
  expect(rgbStringToHsva('rgb(100% 100% 100%)')).toMatchObject({
    h: 0,
    s: 0,
    v: 100,
    a: 1,
  });
  expect(rgbStringToHsva('rgb(50% 45.9% 25%)')).toMatchObject({
    h: 50.160000000000004,
    s: 50,
    v: 50,
    a: 1,
  });
});

it('Converts HSVA to RGB string', () => {
  expect(hsvaToRgbString({ h: 0, s: 0, v: 100, a: 1 })).toBe('rgb(255, 255, 255)');
  expect(hsvaToRgbString({ h: 200, s: 40, v: 40, a: 1 })).toBe('rgb(61, 88, 102)');
});

it('Converts HSVA to RGBA string', () => {
  let test = (input: HsvaColor, output: string) => expect(hsvaToRgbaString(input)).toBe(output);
  test({ h: 200, s: 40, v: 40, a: 0.5 }, 'rgba(61, 88, 102, 0.5)');
});

it('Converts RGBA string to HSVA', () => {
  let test = (input: string, output: HsvaColor) => expect(rgbaStringToHsva(input)).toMatchObject(output);
  test('rgba(61, 88, 102, 0.5)', { h: 200.48780487804876, s: 40.19607843137255, v: 40, a: 0.5 });
  test('rgba(23.9% 34.5% 40% / 99%)', { h: 200.49689440993788, s: 40.25, v: 40, a: 0.99 });
});

it('Converts HSVA to HSVA string', () => {
  expect(hsvaToHsvaString({ h: 0, s: 0, v: 100, a: 1 })).toBe('hsva(0, 0%, 100%, 1)');
  expect(hsvaToHsvaString({ h: 200, s: 40, v: 40, a: 0 })).toBe('hsva(200, 40%, 40%, 0)');
  expect(hsvaToHsvaString({ h: 3.33, s: 5.55, v: 6.66, a: 0.567 })).toBe('hsva(3.33, 5.55%, 6.66%, 0.567)');
});

it('Converts HSVA to HSV string', () => {
  expect(hsvaToHsvString({ h: 0, s: 0, v: 100, a: 1 })).toBe('hsv(0, 0%, 100%)');
  expect(hsvaToHsvString({ h: 200, s: 40, v: 40, a: 1 })).toBe('hsv(200, 40%, 40%)');
});

it('Converts HSV string to HSVA', () => {
  expect(hsvStringToHsva('hsv(0, 11%, 0%)')).toMatchObject({
    h: 0,
    s: 11,
    v: 0,
    a: 1,
  });
  expect(hsvStringToHsva('hsv(90deg 20% 10%)')).toMatchObject({
    h: 90,
    s: 20,
    v: 10,
    a: 1,
  });
  expect(hsvStringToHsva('hsv(100grad 20% 10%)')).toMatchObject({
    h: 90,
    s: 20,
    v: 10,
    a: 1,
  });
  expect(hsvStringToHsva('hsv(0.25turn 20% 10%)')).toMatchObject({
    h: 90,
    s: 20,
    v: 10,
    a: 1,
  });
  expect(hsvStringToHsva('hsv(1.5708rad 20% 10%)')).toMatchObject({
    h: 90.00021045914971,
    s: 20,
    v: 10,
    a: 1,
  });
});

it('Converts HSVA string to HSVA', () => {
  expect(hsvaStringToHsva('hsva(0, 11%, 0, 0.5)')).toMatchObject({
    h: 0,
    s: 11,
    v: 0,
    a: 0.5,
  });
  expect(hsvStringToHsva('hsv(5deg 9% 7% / 40%)')).toMatchObject({
    h: 5,
    s: 9,
    v: 7,
    a: 0.4,
  });
});

it('Rounds HSVA', () => {
  let test = (input: HsvaColor, output: HsvaColor) => expect(input).toMatchObject(output);

  test({ h: 1, s: 1, v: 1, a: 1 }, { h: 1, s: 1, v: 1, a: 1 });
  test({ h: 3.3333, s: 4.4444, v: 5.5555, a: 0.6789 }, { h: 3.3333, s: 4.4444, v: 5.5555, a: 0.6789 });
});

it('Trims alpha-channel', () => {
  expect(rgbaToRgb({ r: 0, g: 0, b: 0, a: 1 })).toMatchObject({
    r: 0,
    g: 0,
    b: 0,
  });
  expect(hslaToHsl({ h: 0, s: 0, l: 0, a: 1 })).toMatchObject({
    h: 0,
    s: 0,
    l: 0,
  });
  expect(hsvaToHsv({ h: 0, s: 0, v: 0, a: 1 })).toMatchObject({
    h: 0,
    s: 0,
    v: 0,
  });
});

it('Compares two HEX colors', () => {
  expect(equalHex('#8c0dba', '#8c0dba')).toBe(true);
  expect(equalHex('#FFFFFF', '#ffffff')).toBe(true);
  expect(equalHex('#ABC', '#aabbcc')).toBe(true);
  expect(equalHex('#abcdef', '#fedcbd')).toBe(false);
});

it('Compares two object colors', () => {
  expect(equalColorObjects({ h: 0, s: 0, v: 5, a: 0.5 }, { h: 0, s: 0, v: 5, a: 0.5 })).toBe(true);
  expect(equalColorObjects({ h: 100, s: 50, v: 50 }, { h: 100, s: 50, v: 50 })).toBe(true);
  expect(equalColorObjects({ h: 50, s: 0, v: 0 }, { h: 100, s: 0, v: 0 })).toBe(false);
  expect(equalColorObjects({ h: 1, s: 2, v: 3 }, { h: 4, s: 5, v: 6, a: 0 })).toBe(false);
});

it('Compares two string colors', () => {
  expect(equalColorString('rgb(0,0,0)', 'rgb(0, 0, 0)')).toBe(true);
  expect(equalColorString(' hsl(60, 100%, 50%) ', 'hsl(60,100%,50%)')).toBe(true);
  expect(equalColorString('rgb(0, 0, 0)', 'rgb(1, 1, 1)')).toBe(false);
});

it('Converts HSVA to HSLA string', () => {
  expect(hsvaToHslaString({ h: 200, s: 40, v: 40, a: 0.5 })).toBe('hsla(200, 25%, 32%, 0.5)');
  expect(hsvaToHslaString({ h: 0, s: 0, v: 0, a: 0 })).toBe('hsla(0, 0%, 0%, 0)');
});

it('Validates HEX colors', () => {
  expect(validHex('#4780f145')).toBe(true);
  expect(validHex('4780f145')).toBe(true);
  // valid strings
  expect(validHex('#8c0dba')).toBe(true);
  expect(validHex('aabbcc')).toBe(true);
  expect(validHex('#ABC')).toBe(true);
  expect(validHex('123')).toBe(true);
  // out of [0-F] range
  expect(validHex('#eeffhh')).toBe(false);
  // wrong length
  expect(validHex('#12')).toBe(false);
  expect(validHex('#12345')).toBe(false);
  // empty
  expect(validHex('')).toBe(false);
  // @ts-ignore
  expect(validHex(null)).toBe(false);
  // @ts-ignore
  expect(validHex()).toBe(false);
});
