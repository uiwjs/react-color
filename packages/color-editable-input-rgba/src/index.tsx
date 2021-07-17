import React from 'react';
import EditableInput, { EditableInputProps } from '@uiw/react-color-editable-input';
import { HsvaColor, color as handleColor, RgbaColor, ColorResult, hsvaToRgba, rgbaToHsva } from '@uiw/color-convert';

export interface EditableInputRGBAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  hsva: HsvaColor;
  placement?: 'top' | 'left' | 'bottom' | 'right';
  rProps?: EditableInputProps;
  gProps?: EditableInputProps;
  bProps?: EditableInputProps;
  aProps?: false | EditableInputProps;
  onChange?: (color: ColorResult) => void;
}

const EditableInputRGBA = React.forwardRef<HTMLDivElement, EditableInputRGBAProps>((props, ref) => {
  const {
    prefixCls = 'w-color-editable-input-rgba',
    hsva,
    placement = 'bottom',
    rProps = {},
    gProps = {},
    bProps = {},
    aProps = {},
    className,
    style,
    onChange,
    ...other
  } = props;
  const rgba = (hsva ? hsvaToRgba(hsva) : {}) as RgbaColor;
  function handleBlur(evn: React.FocusEvent<HTMLInputElement>) {
    const value = Number(evn.target.value);
    if (value && value > 255) {
      evn.target.value = '255';
    }
    if (value && value < 0) {
      evn.target.value = '0';
    }
  }
  const handleChange = (value: string | number, type: 'r' | 'g' | 'b' | 'a', evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      if (type === 'a') {
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, a: value / 100 })));
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
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, r: value })));
      }
      if (type === 'g') {
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, g: value })));
      }
      if (type === 'b') {
        onChange && onChange(handleColor(rgbaToHsva({ ...rgba, b: value })));
      }
    }
  };
  return (
    <div
      ref={ref}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
      style={{
        fontSize: 11,
        display: 'flex',
        ...style,
      }}
    >
      <EditableInput
        label="R"
        value={rgba.r || 0}
        onBlur={handleBlur}
        placement={placement}
        onChange={(evn, val) => handleChange(val, 'r', evn)}
        {...rProps}
        style={{ ...rProps.style }}
      />
      <EditableInput
        label="G"
        value={rgba.g || 0}
        onBlur={handleBlur}
        placement={placement}
        onChange={(evn, val) => handleChange(val, 'g', evn)}
        {...gProps}
        style={{ marginLeft: 5, ...rProps.style }}
      />
      <EditableInput
        label="B"
        value={rgba.b || 0}
        onBlur={handleBlur}
        placement={placement}
        onChange={(evn, val) => handleChange(val, 'b', evn)}
        {...bProps}
        style={{ marginLeft: 5, ...bProps.style }}
      />
      {aProps && (
        <EditableInput
          label="A"
          value={rgba.a ? parseInt(String(rgba.a * 100), 10) : 0}
          onBlur={handleBlur}
          placement={placement}
          onChange={(evn, val) => handleChange(val, 'a', evn)}
          {...aProps}
          style={{ marginLeft: 5, ...aProps.style }}
        />
      )}
    </div>
  );
});

EditableInputRGBA.displayName = 'EditableInputRGBA';

export default EditableInputRGBA;
