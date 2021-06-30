export * from './utils';
export declare type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;
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
export declare const hsvaToHsvString: (hsva: HsvaColor) => string;
export declare const hsvaToHsvaString: (hsva: HsvaColor) => string;
export declare const hsvaToHslaString: (hsva: HsvaColor) => string;
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
export declare const rgbaToHex: ({ r, g, b }: RgbaColor) => string;
export declare const hexToHsva: (hex: string) => HsvaColor;
export declare const hexToRgba: (hex: string) => RgbaColor;
export declare const round: (number: number, digits?: number, base?: number) => number;
export declare const roundHsva: (hsva: HsvaColor) => HsvaColor;
export declare const hsvaToRgba: ({ h, s, v, a }: HsvaColor) => RgbaColor;
export declare const hsvaToRgbString: (hsva: HsvaColor) => string;
export declare const hsvaToRgbaString: (hsva: HsvaColor) => string;
export declare const rgbaToRgb: ({ r, g, b }: RgbaColor) => RgbColor;
export declare const hslaToHsl: ({ h, s, l }: HslaColor) => HslColor;
export declare const hsvaToHex: (hsva: HsvaColor) => string;
export declare const hsvaToHsv: (hsva: HsvaColor) => HsvColor;
