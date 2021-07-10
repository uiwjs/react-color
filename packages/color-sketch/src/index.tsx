import React, { useState, useCallback, Fragment } from 'react';
import Saturation from '@uiw/react-color-saturation';
import Alpha from '@uiw/react-color-alpha';
import EditableInput from '@uiw/react-color-editable-input';
import { PointerProps } from '@uiw/react-color-alpha/lib/cjs/Pointer';
import Hue from '@uiw/react-color-hue';
import {
  validHex,
  HsvaColor,
  hsvaToHex,
  hsvaToRgba,
  hsvaToRgbaString,
  hexToHsva,
  rgbaToHsva,
  color as handleColor,
  ColorResult,
} from '@uiw/color-convert';
import Swatch, { PresetColor } from './Swatch';
import { useEffect } from 'react';

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
    }
    if (typeof color === 'object') {
      setHsva(color);
    }
  }, [color]);

  const handleChange = useCallback(
    (hsv: HsvaColor) => {
      setHsva(hsv);
      onChange && onChange(handleColor(hsv));
    },
    [hsva],
  );

  const rgba = hsvaToRgba(hsva);
  const handleRGBA = (value: string | number, type: 'hex' | 'r' | 'g' | 'b' | 'a', evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      if (type === 'a') {
        value = value > 100 ? 100 : value < 0 ? 0 : value;
        handleChange({ ...hsva, a: value / 100 });
      }
      if (value > 255) {
        value = 255;
        evn.target.value = '255';
      }
      if (value < 0) {
        value = 0;
        evn.target.value = '0';
      }
      if (type === 'r') {
        handleChange(rgbaToHsva({ ...rgba, r: value }));
      }
      if (type === 'g') {
        handleChange(rgbaToHsva({ ...rgba, g: value }));
      }
      if (type === 'b') {
        handleChange(rgbaToHsva({ ...rgba, b: value }));
      }
    }
    if (typeof value === 'string' && type === 'hex' && validHex(value) && /(3|6)/.test(String(value.length))) {
      handleChange(hexToHsva(value));
    }
  };
  function handleBlur(evn: React.FocusEvent<HTMLInputElement>) {
    const value = Number(evn.target.value);
    if (value && value > 255) {
      evn.target.value = '255';
    }
    if (value && value < 0) {
      evn.target.value = '0';
    }
  }

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
      <div style={{ padding: '10px 10px 8px' }}>
        <Saturation
          hsva={hsva}
          style={{ width: 'auto', height: 150 }}
          onChange={(newColor) => handleChange({ ...hsva, ...newColor, a: hsva.a })}
        />
        <div style={{ display: 'flex', marginTop: 4 }}>
          <div style={{ flex: 1 }}>
            <Hue
              width="auto"
              height={10}
              hue={hsva.h}
              pointer={Bar}
              innerProps={{
                style: { marginLeft: 1, marginRight: 5 },
              }}
              onChange={(newHue) => handleChange({ ...hsva, ...newHue })}
            />
            <Alpha
              width="auto"
              height={10}
              hsva={hsva}
              pointer={Bar}
              style={{ marginTop: 4 }}
              innerProps={{
                style: { marginLeft: 1, marginRight: 5 },
              }}
              onChange={(newAlpha) => {
                handleChange({ ...hsva, ...{ a: newAlpha.a } });
              }}
            />
          </div>
          <Alpha
            width={24}
            height={24}
            hsva={hsva}
            radius={2}
            style={{
              marginLeft: 4,
            }}
            bgProps={{ style: { background: 'transparent' } }}
            innerProps={{
              style: {
                borderRadius: 2,
                background: hsvaToRgbaString(hsva),
                boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset',
              },
            }}
            pointer={() => <Fragment />}
          />
        </div>
      </div>
      <div style={{ display: 'flex', margin: '0 10px 3px 10px' }}>
        <EditableInput
          label="Hex"
          value={hsvaToHex(hsva).replace(/^#/, '').toLocaleUpperCase()}
          onChange={(evn, val) => handleRGBA(val, 'hex', evn)}
          style={{
            flexDirection: 'column',
            flex: '2 1 0%',
          }}
        />
        <EditableInput
          label="R"
          value={rgba.r}
          onBlur={handleBlur}
          onChange={(evn, val) => handleRGBA(val, 'r', evn)}
          style={{
            flexDirection: 'column',
            flex: '1 1 0%',
            marginLeft: 6,
          }}
        />
        <EditableInput
          label="G"
          value={rgba.g}
          onBlur={handleBlur}
          onChange={(evn, val) => handleRGBA(val, 'g', evn)}
          style={{
            flexDirection: 'column',
            flex: '1 1 0%',
            marginLeft: 6,
          }}
        />
        <EditableInput
          label="B"
          value={rgba.b}
          onBlur={handleBlur}
          onChange={(evn, val) => handleRGBA(val, 'b', evn)}
          style={{
            flexDirection: 'column',
            flex: '1 1 0%',
            marginLeft: 6,
          }}
        />
        <EditableInput
          label="A"
          value={parseInt(String(rgba.a * 100), 10)}
          onBlur={(evn) => {
            if (Number(evn.target.value) > 100) {
              evn.target.value = '100';
            }
            if (Number(evn.target.value) < 1) {
              evn.target.value = '0';
            }
          }}
          onChange={(evn, val) => handleRGBA(val, 'a', evn)}
          style={{
            flexDirection: 'column',
            flex: '1 1 0%',
            marginLeft: 6,
          }}
        />
      </div>
      <Swatch colors={presetColors} color={hsvaToHex(hsva)} onClick={(hsva) => handleChange(hsva)} />
    </div>
  );
});
