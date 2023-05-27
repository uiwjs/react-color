import React, { CSSProperties } from 'react';
import {
  validHex,
  color as handleColor,
  hexToHsva,
  HsvaColor,
  ColorResult,
  hsvaToHex,
  hsvaToRgbaString,
} from '@uiw/color-convert';
import Alpha, { BACKGROUND_IMG } from '@uiw/react-color-alpha';
import Saturation from '@uiw/react-color-saturation';
import Hue from '@uiw/react-color-hue';

export interface ColorfulProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  onChange?: (color: ColorResult) => void;
  color?: string | HsvaColor;
  disableAlpha?: boolean;
}

const Pointer = ({ style, color, ...props }: React.HTMLAttributes<HTMLDivElement> & { color: string }) => {
  const stylePointer = {
    '--colorful-pointer-background-color': '#fff',
    '--colorful-pointer-border': '2px solid #fff',
    height: 28,
    width: 28,
    position: 'absolute',
    transform: 'translate(-14px, -4px)',
    boxShadow: '0 2px 4px rgb(0 0 0 / 20%)',
    borderRadius: '50%',
    background: `url(${BACKGROUND_IMG})`,
    backgroundColor: 'var(--colorful-pointer-background-color)',
    border: 'var(--colorful-pointer-border)',
    zIndex: 1,
    ...style,
  } as CSSProperties;
  return (
    <div {...props} style={stylePointer}>
      <div
        style={{
          backgroundColor: color,
          borderRadius: '50%',
          height: ' 100%',
          width: '100%',
        }}
      />
    </div>
  );
};

const Colorful = React.forwardRef<HTMLDivElement, ColorfulProps>((props, ref) => {
  const { prefixCls = 'w-color-colorful', className, onChange, color, style, disableAlpha, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const handleChange = (value: HsvaColor) => onChange && onChange(handleColor(value));
  return (
    <div
      ref={ref}
      style={{
        width: 200,
        position: 'relative',
        ...style,
      }}
      {...other}
      className={`${prefixCls} ${className || ''}`}
    >
      <Saturation
        hsva={hsva}
        className={prefixCls}
        radius="8px 8px 0 0"
        style={{ width: 'auto', height: 150, minWidth: 120, borderBottom: '12px solid #000' }}
        pointer={({ left, top, color }) => (
          <Pointer style={{ left, top, transform: 'translate(-16px, -16px)' }} color={hsvaToHex(hsva)} />
        )}
        onChange={(newColor) => handleChange({ ...hsva, ...newColor })}
      />
      <Hue
        hue={hsva.h}
        height={24}
        radius={disableAlpha ? '0 0 8px 8px' : 0}
        className={prefixCls}
        onChange={(newHue) => handleChange({ ...hsva, ...newHue })}
        pointer={({ left }) => <Pointer style={{ left }} color={`hsl(${hsva.h || 0}deg 100% 50%)`} />}
      />
      {!disableAlpha && (
        <Alpha
          hsva={hsva}
          height={24}
          className={prefixCls}
          radius="0 0 8px 8px"
          pointer={({ left }) => <Pointer style={{ left }} color={hsvaToRgbaString(hsva)} />}
          onChange={(newAlpha) => handleChange({ ...hsva, ...newAlpha })}
        />
      )}
    </div>
  );
});

Colorful.displayName = 'Colorful';

export default Colorful;
