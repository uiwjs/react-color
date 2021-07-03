import React, { useState, useCallback } from 'react';
import Saturation from '@uiw/react-color-saturation';
import Alpha from '@uiw/react-color-alpha';
import { PointerProps } from '@uiw/react-color-alpha/lib/cjs/Pointer';
import Hue from '@uiw/react-color-hue';
import {
  hsvaToHslaString,
  validHex,
  HsvaColor,
  HslaColor,
  HsvColor,
  RgbaColor,
  hsvaToHsla,
  hsvaToHex,
  hsvaToRgba,
  hexToHsva,
} from '@uiw/color-convert';
import Swatch from './Swatch';
import { useEffect } from 'react';

/**
 * ```js
 * hex: "#d98877"
 * hsl: { h: 10.402, s: 0.563, l: 0.658, a: 1 }
 * hsv: { h: 10.402, s: 0.451, v: 0.850, a: 1 }
 * rgb: { r: 217, g: 136, b: 119, a: 1 }
 * ```
 */
interface ColorResult {
  hex: string;
  hsl: HslaColor;
  hsv: HsvColor;
  rgb: RgbaColor;
}
export type PresetColor = { color: string; title: string } | string;
export interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  width?: number;
  color?: string | HsvaColor;
  presetColors?: PresetColor[];
  onChange?: (newShade: ColorResult) => void;
}

const Bar = (props: PointerProps) => (
  <div
    style={{
      boxShadow: 'rgb(0 0 0 / 60%) 0px 0px 2px',
      width: 4,
      top: 1,
      bottom: 1,
      left: props.left,
      borderRadius: 1,
      position: 'absolute',
      backgroundColor: '#fff',
    }}
  />
);

export default React.forwardRef<HTMLDivElement, SketchProps>((props, ref) => {
  const { prefixCls = 'w-color-sketch', className, onChange, width = 218, presetColors, color, style, ...other } = props;
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  useEffect(() => {
    if (typeof color === 'string' && validHex(color)) {
      setHsva(hexToHsva(color));
    } else if (typeof color === 'object') {
      setHsva(color);
    }
  }, [color]);
  const handleChange = useCallback(
    (hsv: HsvaColor) => {
      setHsva(hsv);
      onChange &&
        onChange({
          hex: hsvaToHex(hsv),
          hsl: hsvaToHsla(hsv),
          hsv: hsv,
          rgb: hsvaToRgba(hsv),
        });
    },
    [hsva],
  );

  return (
    <div
      {...other}
      className={`${prefixCls} ${className || ''}`}
      ref={ref}
      style={{
        background: 'rgb(255, 255, 255)',
        borderRadius: 4,
        boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
        width,
        ...style,
      }}
    >
      <div style={{ padding: 10 }}>
        <Saturation
          hsva={hsva}
          style={{ width: 'auto', height: 150 }}
          onChange={(newColor) => handleChange({ ...hsva, ...newColor, a: hsva.a })}
        />
        <div style={{ display: 'flex', marginTop: 4 }}>
          <div style={{ flex: 1 }}>
            <Alpha
              width="auto"
              height={10}
              hsva={hsva}
              pointer={Bar}
              innerProps={{
                style: { marginLeft: 1, marginRight: 5 },
              }}
              onChange={(newAlpha) => handleChange({ ...hsva, ...newAlpha })}
            />
            <Hue
              width="auto"
              height={10}
              hue={hsva.h}
              pointer={Bar}
              innerProps={{
                style: { marginLeft: 1, marginRight: 5 },
              }}
              style={{ marginTop: 4 }}
              onChange={(newHue) => handleChange({ ...hsva, ...newHue })}
            />
          </div>
          <Alpha
            width={24}
            height={24}
            hsva={hsva}
            radius={2}
            style={{
              marginLeft: 4,
              boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset',
            }}
            background={hsvaToHex(hsva)}
            pointer={() => <div />}
          />
        </div>
      </div>
      <Swatch colors={presetColors} color={hsvaToHex(hsva)} onClick={(hsva) => handleChange(hsva)} />
    </div>
  );
});
