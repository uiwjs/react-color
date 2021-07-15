import React from 'react';
import {
  ColorResult,
  color as handleColor,
  hexToHsva,
  hsvaToHsla,
  hsvaToHslString,
  validHex,
  HsvaColor,
  hslStringToHsva,
} from '@uiw/color-convert';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  lightness?: number[];
  onChange?: (color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { prefixCls = 'w-color-slider', className, style, onChange, color, lightness = [80, 65, 50, 35, 20], ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const handleClick = (hslStr: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange && onChange(handleColor(hslStringToHsva(hslStr)), evn);
  };
  return (
    <div
      ref={ref}
      style={{ display: 'flex', ...style }}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
    >
      {lightness.map((num, idx) => {
        const hsl = hsvaToHsla(hsva);
        const hslStr = `hsl(${hsl.h}, 50%, ${num}%)`;
        const checked = hslStr === hsvaToHslString(hsva);
        return (
          <div
            key={idx}
            style={{
              paddingLeft: 1,
              width: `${100 / lightness.length}%`,
              boxSizing: 'border-box',
            }}
          >
            <div
              onClick={(evn) => handleClick(hslStr, evn)}
              style={{
                backgroundColor: hslStr,
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
