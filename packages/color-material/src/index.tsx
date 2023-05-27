import React, { CSSProperties } from 'react';
import { HsvaColor, ColorResult, color as handleColor, validHex, hexToHsva, hsvaToHex } from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';
import RGBA from '@uiw/react-color-editable-input-rgba';

export interface MaterialProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const styleRBG = {
  boxShadow: 'initial',
  borderWidth: '0 0 1px 0',
  borderBottomColor: 'var(--material-border-bottom-color)',
  borderBottomStyle: 'solid',
  height: 30,
  outline: 0,
  fontSize: 15,
  padding: 0,
} as CSSProperties;

const Material = React.forwardRef<HTMLDivElement, MaterialProps>((props, ref) => {
  const { prefixCls = 'w-color-material', className, style, color, onChange, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva).replace(/^#/, '') : '';
  const handleChange = (hsv: HsvaColor) => {
    onChange && onChange(handleColor(hsv));
  };
  const handleHex = (value: string | number, evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string' && validHex(value) && /(3|6)/.test(String(value.length))) {
      onChange && onChange(handleColor(hexToHsva(value)));
    }
  };

  const styleWrapper = {
    '--material-border-bottom-color': '#eee',
    '--material-background-color': '#fff',
    padding: 16,
    width: 98,
    fontFamily: 'Roboto',
    backgroundColor: 'var(--material-background-color)',
    ...style,
  } as CSSProperties;

  return (
    <div ref={ref} className={[prefixCls, className || ''].filter(Boolean).join(' ')} style={styleWrapper} {...other}>
      <EditableInput
        label="Hex"
        value={hex.toLocaleUpperCase()}
        onChange={(evn, val) => handleHex(val, evn)}
        onBlur={(evn) => {
          const value = evn.target.value;
          evn.target.value = value.slice(0, 6);
          handleHex(value.slice(0, 6), evn);
        }}
        inputStyle={{
          outline: 0,
          border: 0,
          height: 30,
          fontSize: 15,
          padding: 0,
          boxShadow: 'initial',
          borderWidth: '0 0 2px 0',
          borderBottomColor: hex ? `#${hex}` : 'var(--material-border-bottom-color)',
          borderBottomStyle: 'solid',
          background: 'transparent',
        }}
        style={{ flexDirection: 'column-reverse', alignItems: 'flex-start' }}
      />

      <RGBA
        hsva={hsva}
        placement="top"
        style={{ marginTop: 11 }}
        rProps={{
          style: {
            alignItems: 'flex-start',
          },
          inputStyle: { ...styleRBG },
        }}
        gProps={{
          style: {
            alignItems: 'flex-start',
          },
          inputStyle: { ...styleRBG },
        }}
        bProps={{
          style: {
            alignItems: 'flex-start',
          },
          inputStyle: { ...styleRBG },
        }}
        aProps={false}
        onChange={(result) => handleChange(result.hsva)}
      />
    </div>
  );
});

Material.displayName = 'Material';

export default Material;
