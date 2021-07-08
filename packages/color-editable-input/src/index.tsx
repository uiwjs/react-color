import React from 'react';

export interface EditableInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string;
  label?: string;
  labelStyle?: React.CSSProperties;
}

export default React.forwardRef<HTMLInputElement, EditableInputProps>((props, ref) => {
  const { prefixCls = 'w-color-editable-input', label, className, style, labelStyle, ...other } = props;

  return (
    <div
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        ...style,
      }}
    >
      <input
        {...other}
        ref={ref}
        style={{
          width: '100%',
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 3,
          paddingRight: 3,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: 'rgb(204 204 204) 0px 0px 0px 1px inset',
        }}
      />
      <span
        style={{
          fontSize: 11,
          color: 'rgb(153, 153, 153)',
          textTransform: 'capitalize',
          ...labelStyle,
        }}
      >
        {label}
      </span>
    </div>
  );
});
