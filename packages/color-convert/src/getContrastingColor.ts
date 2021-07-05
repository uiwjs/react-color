import { HsvaColor, color } from './';

export const getContrastingColor = (str: string | HsvaColor) => {
  if (!str) {
    return '#fff';
  }
  const col = color(str);
  const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};
