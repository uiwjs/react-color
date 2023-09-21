import React, { useMemo } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, PointerProps } from './Pointer';

export interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva?: HsvaColor;
  hue?: number;
  radius?: React.CSSProperties['borderRadius'];
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (newColor: HsvaColor) => void;
}

const Saturation = React.forwardRef<HTMLDivElement, SaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', radius = 0, pointer, className, hue = 0, style, hsva, onChange, ...other } = props;
  const containerStyle: React.CSSProperties = {
    width: 200,
    height: 200,
    borderRadius: radius,
    ...style,
    position: 'relative',
  };

  const handleChange = (interaction: Interaction, event: MouseEvent | TouchEvent) => {
    onChange &&
      hsva &&
      onChange({
        h: hsva.h,
        s: interaction.left * 100,
        v: (1 - interaction.top) * 100,
        a: hsva.a,
        // source: 'hsv',
      });
  };

  const pointerElement = useMemo(() => {
    if (!hsva) return null;
    const comProps = {
      top: `${100 - hsva.v}%`,
      left: `${hsva.s}%`,
      color: hsvaToHslaString(hsva),
    };
    if (pointer && typeof pointer === 'function') {
      return pointer({ prefixCls, ...comProps });
    }
    return <Pointer prefixCls={prefixCls} {...comProps} />;
  }, [hsva, pointer, prefixCls]);

  return (
    <Interactive
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
      style={{
        position: 'absolute',
        inset: 0,
        cursor: 'crosshair',
        backgroundImage: `linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(${
          hsva?.h ?? hue
        }, 100%, 50%))`,
        ...containerStyle,
      }}
      ref={ref}
      onMove={handleChange}
      onDown={handleChange}
    >
      {pointerElement}
    </Interactive>
  );
});

Saturation.displayName = 'Saturation';

export default Saturation;
