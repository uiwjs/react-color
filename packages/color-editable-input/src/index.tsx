import React from 'react';
import { useRef, useEffect, useState } from 'react';

const validHex = (hex: string): boolean => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
const getNumberValue = (value: string) => Number(String(value).replace(/%/g, ''));

export interface EditableInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string;
  value?: string | number;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onChange?: (evn: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
}

export default React.forwardRef<HTMLInputElement, EditableInputProps>((props, ref) => {
  const {
    prefixCls = 'w-color-editable-input',
    label,
    value: initValue,
    className,
    style,
    labelStyle,
    inputStyle,
    onChange,
    ...other
  } = props;
  const [value, setValue] = useState<string | number | undefined>(initValue);
  const [valueProps, setValueProps] = useState<string | number | undefined>(initValue);
  const isFocus = useRef(false);

  useEffect(() => {
    if (props.value !== value) {
      setValueProps(props.value);
      if (!isFocus.current) {
        setValue(props.value);
      }
    }
  }, [props.value]);

  function handleChange(evn: React.ChangeEvent<HTMLInputElement>) {
    const value = evn.target.value;
    if (validHex(value)) {
      onChange && onChange(evn, value);
    }
    const val = getNumberValue(value);
    if (!isNaN(val)) {
      onChange && onChange(evn, val);
    }
    setValue(value);
    setValueProps(value);
  }
  function handleBlur() {
    isFocus.current = false;
    setValue(valueProps);
  }
  return (
    <div
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        fontSize: 11,
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
