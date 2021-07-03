export * from './utils';

export type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;
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
export const rgbaToHsva = ({ r, g, b, a }: RgbaColor): HsvaColor => {
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);

  // prettier-ignore
  const hh = delta
    ? max === r
      ? (g - b) / delta
      : max === g
        ? 2 + (b - r) / delta
        : 4 + (r - g) / delta
    : 0;

  return {
    h: round(60 * (hh < 0 ? hh + 6 : hh)),
    s: round(max ? (delta / max) * 100 : 0),
    v: round((max / 255) * 100),
    a,
  };
};

export const hsvaToHslString = (hsva: HsvaColor): string => {
  const { h, s, l } = hsvaToHsla(hsva);
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export const hsvaToHsvString = (hsva: HsvaColor): string => {
  const { h, s, v } = roundHsva(hsva);
  return `hsv(${h}, ${s}%, ${v}%)`;
};

export const hsvaToHsvaString = (hsva: HsvaColor): string => {
  const { h, s, v, a } = roundHsva(hsva);
  return `hsva(${h}, ${s}%, ${v}%, ${a})`;
};

export const hsvaToHslaString = (hsva: HsvaColor): string => {
  const { h, s, l, a } = hsvaToHsla(hsva);
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

export const hslaStringToHsva = (hslString: string): HsvaColor => {
  const matcher =
    /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  const match = matcher.exec(hslString);

  if (!match) return { h: 0, s: 0, v: 0, a: 1 };

  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? 100 : 1),
  });
};

export const hslStringToHsva = hslaStringToHsva;

export const hslaToHsva = ({ h, s, l, a }: HslaColor): HsvaColor => {
  s *= (l < 50 ? l : 100 - l) / 100;

  return {
    h: h,
    s: s > 0 ? ((2 * s) / (l + s)) * 100 : 0,
    v: l + s,
    a,
  };
};

export interface HslColor {
  h: number;
  s: number;
  l: number;
}
export interface HslaColor extends HslColor {
  a: number;
}
export const hsvaToHsla = ({ h, s, v, a }: HsvaColor): HslaColor => {
  const hh = ((200 - s) * v) / 100;

  return {
    h: round(h),
    s: round(hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0),
    l: round(hh / 2),
    a: round(a, 2),
  };
};

export const hsvaStringToHsva = (hsvString: string): HsvaColor => {
  const matcher =
    /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  const match = matcher.exec(hsvString);

  if (!match) return { h: 0, s: 0, v: 0, a: 1 };

  return roundHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    v: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? 100 : 1),
  });
};

/**
 * Valid CSS <angle> units.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/angle
 */
const angleUnits: Record<string, number> = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2),
};

export const parseHue = (value: string, unit = 'deg'): number => {
  return Number(value) * (angleUnits[unit] || 1);
};

export const hsvStringToHsva = hsvaStringToHsva;

export const rgbaStringToHsva = (rgbaString: string): HsvaColor => {
  const matcher =
    /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  const match = matcher.exec(rgbaString);

  if (!match) return { h: 0, s: 0, v: 0, a: 1 };

  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? 100 / 255 : 1),
    g: Number(match[3]) / (match[4] ? 100 / 255 : 1),
    b: Number(match[5]) / (match[6] ? 100 / 255 : 1),
    a: match[7] === undefined ? 1 : Number(match[7]) / (match[8] ? 100 : 1),
  });
};

export const rgbStringToHsva = rgbaStringToHsva;

export const rgbaToHex = ({ r, g, b }: RgbaColor): string => {
  let bin = (r << 16) | (g << 8) | b;
  return `#${((h) => new Array(7 - h.length).join('0') + h)(bin.toString(16))}`;
};

export const hexToHsva = (hex: string): HsvaColor => rgbaToHsva(hexToRgba(hex));
export const hexToRgba = (hex: string): RgbaColor => {
  const htemp = hex.replace('#', '');
  if (/^#/.test(hex) && htemp.length === 3) {
    hex = `#${htemp.charAt(0)}${htemp.charAt(0)}${htemp.charAt(1)}${htemp.charAt(1)}${htemp.charAt(2)}${htemp.charAt(2)}`;
  }
  const reg = new RegExp(`[A-Za-z0-9]{${hex.length < 6 ? '1' : '2'}}`, 'g');
  const [r, g, b, a] = hex.match(reg)!.map((v) => parseInt(v, 16));
  // return {
  //   r, g, b, a: a  ? a / 255 : 1
  // }
  return {
    r,
    g,
    b,
    a: a ? Math.round((a / 255) * 100) / 100 : 1,
  };
};

export const round = (number: number, digits = 0, base = Math.pow(10, digits)): number => {
  return Math.round(base * number) / base;
};

export const roundHsva = (hsva: HsvaColor): HsvaColor => ({
  h: round(hsva.h),
  s: round(hsva.s),
  v: round(hsva.v),
  a: round(hsva.a, 2),
});

/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
export const hsvaToRgba = ({ h, s, v, a }: HsvaColor): RgbaColor => {
  h = (h / 360) * 6;
  s = s / 100;
  v = v / 100;

  const hh = Math.floor(h),
    b = v * (1 - s),
    c = v * (1 - (h - hh) * s),
    d = v * (1 - (1 - h + hh) * s),
    module = hh % 6;

  return {
    r: round([v, c, b, b, d, v][module] * 255),
    g: round([d, v, v, c, b, b][module] * 255),
    b: round([b, b, d, v, v, c][module] * 255),
    a: round(a, 2),
  };
};

export const hsvaToRgbString = (hsva: HsvaColor): string => {
  const { r, g, b } = hsvaToRgba(hsva);
  return `rgb(${r}, ${g}, ${b})`;
};

export const hsvaToRgbaString = (hsva: HsvaColor): string => {
  const { r, g, b, a } = hsvaToRgba(hsva);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const rgbaToRgb = ({ r, g, b }: RgbaColor): RgbColor => ({ r, g, b });
export const hslaToHsl = ({ h, s, l }: HslaColor): HslColor => ({ h, s, l });
export const hsvaToHex = (hsva: HsvaColor): string => rgbaToHex(hsvaToRgba(hsva));
export const hsvaToHsv = (hsva: HsvaColor): HsvColor => {
  const { h, s, v } = roundHsva(hsva);
  return { h, s, v };
};
