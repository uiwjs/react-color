import React from 'react';
import EditableInputRGBA, { EditableInputRGBAProps } from '@uiw/react-color-editable-input-rgba';
import { HslaColor, color as handleColor, hsvaToHsla, hslaToHsva } from '@uiw/color-convert';

export interface EditableInputHSLAProps extends Omit<EditableInputRGBAProps, 'rProps' | 'gProps' | 'bProps'> {
  hProps?: EditableInputRGBAProps['gProps'];
  sProps?: EditableInputRGBAProps['gProps'];
  lProps?: EditableInputRGBAProps['gProps'];
  aProps?: EditableInputRGBAProps['aProps'];
}

const EditableInputHSLA = React.forwardRef<HTMLDivElement, EditableInputHSLAProps>((props, ref) => {
  const {
    prefixCls = 'w-color-editable-input-hsla',
    hsva,
    hProps = {},
    sProps = {},
    lProps = {},
    aProps = {},
    className,
    onChange,
    ...other
  } = props;
  const hsla = (hsva ? hsvaToHsla(hsva) : { h: 0, s: 0, l: 0, a: 0 }) as HslaColor;
  const handleChange = (value: string | number, type: 'h' | 's' | 'l' | 'a', evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      if (type === 'h') {
        if (value < 0) value = 0;
        if (value > 360) value = 360;
        onChange && onChange(handleColor(hslaToHsva({ ...hsla, h: value })));
      }
      if (type === 's') {
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onChange && onChange(handleColor(hslaToHsva({ ...hsla, s: value })));
      }
      if (type === 'l') {
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onChange && onChange(handleColor(hslaToHsva({ ...hsla, l: value })));
      }
      if (type === 'a') {
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        onChange && onChange(handleColor(hslaToHsva({ ...hsla, a: value })));
      }
    }
  };
  return (
    <EditableInputRGBA
      ref={ref}
      hsva={hsva}
      rProps={{
        label: 'H',
        value: Math.round(hsla.h),
        ...hProps,
        onChange: (evn, val) => handleChange(val, 'h', evn),
      }}
      gProps={{
        label: 'S',
        value: `${Math.round(hsla.s)}%`,
        ...sProps,
        onChange: (evn, val) => handleChange(val, 's', evn),
      }}
      bProps={{
        label: 'L',
        value: `${Math.round(hsla.l)}%`,
        ...lProps,
        onChange: (evn, val) => handleChange(val, 'l', evn),
      }}
      aProps={{
        label: 'A',
        value: Math.round(hsla.a * 100) / 100,
        ...aProps,
        onChange: (evn, val) => handleChange(val, 'a', evn),
      }}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
    />
  );
});

EditableInputHSLA.displayName = 'EditableInputHSLA';

export default EditableInputHSLA;
