import React, { useState, useCallback, Fragment } from 'react';
import Saturation from '@uiw/react-color-saturation';
import Alpha from '@uiw/react-color-alpha';
import EditableInput from '@uiw/react-color-editable-input';
import RGBA from '@uiw/react-color-editable-input-rgba';
import { PointerProps } from '@uiw/react-color-alpha/lib/cjs/Pointer';
import Hue from '@uiw/react-color-hue';
import {
  validHex,
  HsvaColor,
  hsvaToHex,
  hsvaToRgbaString,
  hexToHsva,
  color as handleColor,
  ColorResult,
} from '@uiw/color-convert';
import Swatch, { SwatchPresetColor } from '@uiw/react-color-swatch';
import { useEffect } from 'react';

const PRESET_COLORS = [
  '#D0021B',
  '#F5A623',
  '#f8e61b',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

export interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  width?: number;
  color?: string | HsvaColor;
  presetColors?: false | SwatchPresetColor[];
  editableDisable?: boolean;
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

const Sketch = React.forwardRef<HTMLDivElement, SketchProps>((props, ref) => {
  const {
    prefixCls = 'w-color-sketch',
    className,
    onChange,
    width = 218,
    presetColors = PRESET_COLORS,
    color,
    editableDisable = true,
    style,
    ...other
  } = props;
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

  const handleHex = (value: string | number, evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string' && validHex(value) && /(3|6)/.test(String(value.length))) {
      handleChange(hexToHsva(value));
    }
  };
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
      {editableDisable && (
        <div style={{ display: 'flex', margin: '0 10px 3px 10px' }}>
          <EditableInput
            label="Hex"
            value={hsvaToHex(hsva).replace(/^#/, '').toLocaleUpperCase()}
            onChange={(evn, val) => handleHex(val, evn)}
            style={{ minWidth: 58 }}
          />
          <RGBA hsva={hsva} style={{ marginLeft: 6 }} onChange={(result) => handleChange(result.hsva)} />
        </div>
      )}
      {presetColors && presetColors.length > 0 && (
        <Swatch
          style={{
            borderTop: '1px solid rgb(238, 238, 238)',
            paddingTop: 10,
            paddingLeft: 10,
          }}
          colors={presetColors}
          color={hsvaToHex(hsva)}
          onChange={(hsvColor) => handleChange(hsvColor)}
          rectProps={{
            style: {
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 3,
              boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px inset',
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
            },
          }}
        />
      )}
    </div>
  );
});

Sketch.displayName = 'Sketch';

export default Sketch;
