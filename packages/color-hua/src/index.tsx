import React from 'react';
import Alpha, { ColorAlphaProps } from '@uiw/react-color-alpha';

export interface ColorHuaProps extends Omit<ColorAlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHua: { h: number }) => void;
  hue: number;
}

export default React.forwardRef<HTMLDivElement, ColorHuaProps>((props, ref) => {
  const { hue = 0, onChange, ...other } = props;
  return (
    <Alpha
      ref={ref}
      {...other}
      background="linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)"
      hsva={{ h: hue, s: 100, v: 100, a: hue / 360 }}
      onChange={(_, interaction) => {
        onChange && onChange({ h: 360 * interaction.left });
      }}
    />
  );
});
