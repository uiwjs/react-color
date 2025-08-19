import React from 'react';
import { validHex, hsvaToHex, type HsvaColor, hexToHsva, type ColorResult, color as handleColor } from '@uiw/color-convert';
import Swatch, { type SwatchProps } from '@uiw/react-color-swatch';
import Point from './Point';

export interface CircleProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
  pointProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>((props, ref) => {
  const {
    prefixCls = 'w-color-circle',
    className,
    color,
    colors = [],
    rectProps = {},
    pointProps = {},
    style = {},
    onChange,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const cls = [prefixCls, className].filter(Boolean).join(' ');
  const clsPoint = [`${prefixCls}-point`, pointProps?.className].filter(Boolean).join(' ');
  pointProps.style = pointProps.style || {};
  pointProps.style.borderRadius = pointProps.style?.borderRadius || '50%';
  pointProps.style.width = pointProps.style?.width || 26;
  pointProps.style.height = pointProps.style?.height || 26;
  pointProps.style.marginRight = pointProps.style?.marginRight || 0;
  pointProps.style.marginBottom = pointProps.style?.marginBottom || 0;
  style.gap = style.gap || 10;
  return (
    <Swatch
      ref={ref}
      colors={colors}
      color={hex}
      style={style}
      {...other}
      className={cls}
      rectRender={({ ...props }) => (
        <Point
          {...props}
          {...pointProps}
          style={{ ...props.style, ...pointProps.style }}
          className={clsPoint}
          rectProps={rectProps}
        />
      )}
      onChange={(hsvColor) => {
        onChange && onChange(handleColor(hsvColor));
      }}
    />
  );
});

Circle.displayName = 'Circle';

export default Circle;
