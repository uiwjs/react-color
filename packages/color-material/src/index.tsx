import React from 'react';
import {
  HsvaColor,
  ColorResult,
  color as handleColor,
  validHex,
  rgbaToHsva,
  hexToHsva,
  hsvaToRgba,
  hsvaToHex,
  RgbaColor,
} from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';

export * from '@uiw/color-convert';

export interface MaterialProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const styleRBG: React.CSSProperties = {
  boxShadow: 'initial',
  borderWidth: '0 0 1px 0',
  borderBottomColor: '#eee',
  borderBottomStyle: 'solid',
  height: 30,
  outline: 0,
  fontSize: 15,
  padding: 0,
};

export default React.forwardRef<HTMLDivElement, MaterialProps>((props, ref) => {
  const { prefixCls = 'w-color-material', className, style, color, onChange, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const rgba = (color ? hsvaToRgba(hsva) : {}) as RgbaColor;
  const hex = color ? hsvaToHex(hsva).replace(/^#/, '') : '';
  const handleChange = (
    value: string | number,
    type: 'hex' | 'r' | 'g' | 'b' | 'a',
    evn: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (typeof value === 'number') {
      if (value > 255) {
        value = 255;
        evn.target.value = '255';
      }
      if (value < 0) {
        value = 0;
        evn.target.value = '0';
      }
      if (type === 'r') {
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, r: value })));
      }
      if (type === 'g') {
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, g: value })));
      }
      if (type === 'b') {
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, b: value })));
      }
    }
    if (typeof value === 'string' && type === 'hex' && validHex(value) && /(3|6)/.test(String(value.length))) {
      onChange && onChange(handleColor(hexToHsva(value)));
    }
  };
  function handleBlur(evn: React.FocusEvent<HTMLInputElement>) {
    const value = Number(evn.target.value);
    if (value && value > 255) {
      evn.target.value = '255';
    }
  }
  return (
    <div
      ref={ref}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{ padding: 16, width: 98, fontFamily: 'Roboto', ...style }}
      {...other}
    >
      <EditableInput
        label="Hex"
        value={hex.toLocaleUpperCase()}
        onChange={(evn, val) => handleChange(val, 'hex', evn)}
        onBlur={(evn) => {
          const value = evn.target.value;
          if (value.length > 6) {
            evn.target.value = value.slice(0, 6);
          }
        }}
        inputStyle={{
          outline: 0,
          border: 0,
          height: 30,
          fontSize: 15,
          padding: 0,
          boxShadow: 'initial',
          borderWidth: '0 0 2px 0',
          borderBottomColor: hex ? `#${hex}` : '#eee',
          borderBottomStyle: 'solid',
        }}
        style={{ flexDirection: 'column-reverse', alignItems: 'flex-start' }}
      />
      <div style={{ display: 'flex', marginTop: 11 }}>
        <EditableInput
          label="R"
          value={rgba.r || 0}
          inputStyle={{
            ...styleRBG,
          }}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'r', evn)}
          style={{ flexDirection: 'column-reverse', alignItems: 'flex-start' }}
        />
        <EditableInput
          label="G"
          value={rgba.g || 0}
          inputStyle={{
            ...styleRBG,
          }}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'g', evn)}
          style={{ marginLeft: 5, flexDirection: 'column-reverse', alignItems: 'flex-start' }}
        />
        <EditableInput
          label="B"
          value={rgba.b || 0}
          inputStyle={{
            ...styleRBG,
          }}
          onBlur={handleBlur}
          onChange={(evn, val) => handleChange(val, 'b', evn)}
          style={{ marginLeft: 5, flexDirection: 'column-reverse', alignItems: 'flex-start' }}
        />
      </div>
    </div>
  );
});
