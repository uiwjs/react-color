import React from 'react';
import { hsvaToHslaString } from '@uiw/color-convert';
import Alpha, { AlphaProps } from '@uiw/react-color-alpha';

export interface ShadeSliderProps extends Omit<AlphaProps, 'onChange'> {
  onChange?: (newShade: { v: number }) => void;
}

const ShadeSlider = React.forwardRef<HTMLDivElement, ShadeSliderProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', className, onChange, direction = 'horizontal', hsva, ...other } = props;
  const colorFrom = hsvaToHslaString({ ...hsva, a: 1, v: 100 });
  return (
    <Alpha
      ref={ref}
      {...other}
      className={`${prefixCls} ${className || ''}`}
      hsva={{ h: hsva.h, s: hsva.s, v: hsva.v, a: 1 - hsva.v / 100 }}
      direction={direction}
      background={`linear-gradient(to ${direction === 'horizontal' ? 'right' : 'bottom'}, ${colorFrom}, rgb(0, 0, 0))`}
      onChange={(_, interaction) => {
        onChange &&
          onChange({
            v: direction === 'horizontal' ? 100 - interaction.left * 100 : 100 - interaction.top * 100,
          });
      }}
    />
  );
});

ShadeSlider.displayName = 'ShadeSlider';

export default ShadeSlider;
