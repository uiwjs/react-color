import React from 'react';
import {
  ColorResult,
  color as handleColor,
  hexToHsva,
  hsvaToRgbaString,
  validHex,
  hsvaToRgba,
  HsvaColor,
  rgbaStringToHsva,
} from '@uiw/color-convert';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  lightness?: number[];
  customColorShades?: { color: string | HsvaColor; lightness: number[] }[];
  onChange?: (color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const hsvaCheck = (color?: string | HsvaColor): HsvaColor => {
  return (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
};

const hsvaEqual = (c1: HsvaColor, c2: HsvaColor, lightnessArray?: number[]): boolean => {
  // Check for exact match of all properties
  const exactMatch = c1.h === c2.h && c1.s === c2.s && c1.v === c2.v && c1.a === c2.a;

  // If there's an exact match, return true
  if (exactMatch) return true;

  // If no exact match and a lightness array exists, check if the base
  // properties match and value is within 1 unit of any lightness value
  if (lightnessArray) {
    const baseMatch = c1.h === c2.h && c1.s === c2.s && c1.a === c2.a;
    return baseMatch && lightnessArray.some((lightness) => Math.abs(c2.v - lightness) <= 1);
  }

  return false;
};

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    prefixCls = 'w-color-slider',
    className,
    style,
    onChange,
    color,
    customColorShades = [
      { color: '#000000', lightness: [50, 40, 30, 20, 10] },
      { color: '#ffffff', lightness: [95, 90, 80, 70, 60] },
    ],
    lightness = [80, 65, 50, 35, 20],
    ...other
  } = props;
  const hsva = hsvaCheck(color);

  // Find matching custom color and its lightness array
  const matchingCustomColor = customColorShades.find((shade) => {
    const customHsva = hsvaCheck(shade.color);
    const isMatch = hsvaEqual(customHsva, hsva, shade.lightness);
    return isMatch;
  });

  // Determine which lightness array to use
  const activeLightness = matchingCustomColor ? matchingCustomColor.lightness : lightness;

  const handleClick = (rgbaStr: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newHsva = rgbaStringToHsva(rgbaStr);
    onChange && onChange(handleColor(newHsva), evn);
  };

  return (
    <div
      ref={ref}
      style={{ display: 'flex', ...style }}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
    >
      {activeLightness.map((num: number, idx: number) => {
        const newHsva = { ...hsva, v: num };
        const rgba = hsvaToRgba(newHsva);
        const rgbaStr = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
        const checked = rgbaStr === hsvaToRgbaString(hsva);
        return (
          <div
            key={idx}
            style={{
              paddingLeft: 1,
              width: `${100 / activeLightness.length}%`,
              boxSizing: 'border-box',
            }}
          >
            <div
              onClick={(evn) => handleClick(rgbaStr, evn)}
              style={{
                backgroundColor: rgbaStr,
                height: 12,
                cursor: 'pointer',
                ...(checked
                  ? {
                      borderRadius: 2,
                      transform: 'scale(1, 1.5)',
                    }
                  : {}),
              }}
            />
          </div>
        );
      })}
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider;
