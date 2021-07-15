import React from 'react';
import { useRef, useEffect, useState } from 'react';

const validHex = (hex: string): boolean => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
const getNumberValue = (value: string) => Number(String(value).replace(/%/g, ''));

export interface EditableInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string;
  value?: string | number;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  placement?: 'top' | 'left' | 'bottom' | 'right';
  inputStyle?: React.CSSProperties;
  onChange?: (evn: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
}

const EditableInput = React.forwardRef<HTMLInputElement, EditableInputProps>((props, ref) => {
  const {
    prefixCls = 'w-color-editable-input',
    placement = 'bottom',
    label,
    value: initValue,
    className,
    style,
    labelStyle,
    inputStyle,
    onChange,
    onBlur,
    ...other
  } = props;
  const [value, setValue] = useState<string | number | undefined>(initValue);
  const isFocus = useRef(false);

  useEffect(() => {
    if (props.value !== value) {
      if (!isFocus.current) {
        setValue(props.value);
      }
    }
  }, [props.value]);

  function handleChange(evn: React.FocusEvent<HTMLInputElement>, valInit?: string) {
    const value = valInit || evn.target.value;
    if (validHex(value)) {
      onChange && onChange(evn, value);
    }
    const val = getNumberValue(value);
    if (!isNaN(val)) {
      onChange && onChange(evn, val);
    }
    setValue(value);
    // setValueProps(value);
  }
  function handleBlur(evn: React.FocusEvent<HTMLInputElement>) {
    isFocus.current = false;
    setValue(props.value);
    onBlur && onBlur(evn);
  }
  const placementStyle: React.CSSProperties = {};
  if (placement === 'bottom') {
    placementStyle['flexDirection'] = 'column';
  }
  if (placement === 'top') {
    placementStyle['flexDirection'] = 'column-reverse';
  }
  if (placement === 'left') {
    placementStyle['flexDirection'] = 'row-reverse';
  }
  return (
    <div
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        fontSize: 11,
        ...placementStyle,
        ...style,
      }}
    >
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        onFocus={() => (isFocus.current = true)}
        {...other}
        style={{
          width: '100%',
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 3,
          paddingRight: 3,
          fontSize: 11,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: 'rgb(204 204 204) 0px 0px 0px 1px inset',
          ...inputStyle,
        }}
      />
      {label && (
        <span
          style={{
            color: 'rgb(153, 153, 153)',
            textTransform: 'capitalize',
            ...labelStyle,
          }}
          children={label}
        />
      )}
    </div>
  );
});

EditableInput.displayName = 'EditableInput';

export default EditableInput;
