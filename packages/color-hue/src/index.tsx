import React, { useCallback, useMemo } from 'react';
import Alpha, { AlphaProps } from '@uiw/react-color-alpha';

const NORMAL_COLORS =
  'rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%';
const REVERSED_COLORS =
  'rgb(255, 0, 0) 0%, rgb(255, 0, 255) 17%, rgb(0, 0, 255) 33%, rgb(0, 255, 255) 50%, rgb(0, 255, 0) 67%, rgb(255, 255, 0) 83%, rgb(255, 0, 0) 100%';

export interface HueProps extends Omit<AlphaProps, 'hsva' | 'onChange'> {
  onChange?: (newHue: { h: number }) => void;
  hue?: number;
}

const Hue = React.forwardRef<HTMLDivElement, HueProps>((props, ref) => {
  const { prefixCls = 'w-color-hue', className, hue = 0, onChange, direction = 'horizontal', reverse = false, ...other } = props;

  const getGradientBackground = useCallback(() => {
    if (direction === 'horizontal') {
      const colors = reverse ? REVERSED_COLORS : NORMAL_COLORS;
      const gradientDirection = 'right';
      return `linear-gradient(to ${gradientDirection}, ${colors})`;
    } else {
      // 垂直模式下，由于交互逻辑使用了 1-value，所以渐变颜色也要反转
      const colors = reverse ? NORMAL_COLORS : REVERSED_COLORS;
      const gradientDirection = 'bottom';
      return `linear-gradient(to ${gradientDirection}, ${colors})`;
    }
  }, [direction, reverse]);

  const getHueFromInteraction = useCallback(
    (interaction: any) => {
      const value = direction === 'horizontal' ? interaction.left : interaction.top;
      let normalizedValue;
      if (direction === 'horizontal') {
        normalizedValue = reverse ? 1 - value : value;
      } else {
        // 垂直模式下，正常情况下顶部应该是0，底部是360，所以需要反转
        normalizedValue = reverse ? value : 1 - value;
      }
      return 360 * normalizedValue;
    },
    [direction, reverse],
  );

  const gradientBackground = useMemo(() => getGradientBackground(), [getGradientBackground]);

  return (
    <Alpha
      ref={ref}
      className={`${prefixCls} ${className || ''}`}
      {...other}
      direction={direction}
      reverse={reverse}
      background={gradientBackground}
      hsva={{ h: hue, s: 100, v: 100, a: hue / 360 }}
      onChange={(_, interaction) => {
        onChange && onChange({ h: getHueFromInteraction(interaction) });
      }}
    />
  );
});

Hue.displayName = 'Hue';

export default Hue;
