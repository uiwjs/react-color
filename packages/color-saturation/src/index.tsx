import React, { useCallback, useMemo } from 'react';
import type * as CSS from 'csstype';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { type Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, type PointerProps } from './Pointer';

export interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva?: HsvaColor;
  hue?: number;
  radius?: string | number;
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (newColor: HsvaColor) => void;
}

const Saturation = React.forwardRef<HTMLDivElement, SaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', radius = 0, pointer, className, hue = 0, style, hsva, onChange, ...other } = props;
  const containerStyle: CSS.Properties<string | number> = {
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

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!hsva || !onChange) return;
      const step = 1; // 1% step for saturation and value
      let newS = hsva.s;
      let newV = hsva.v;
      let changed = false;

      switch (event.key) {
        case 'ArrowLeft':
          newS = Math.max(0, hsva.s - step);
          changed = true;
          event.preventDefault();
          break;
        case 'ArrowRight':
          newS = Math.min(100, hsva.s + step);
          changed = true;
          event.preventDefault();
          break;
        case 'ArrowUp':
          newV = Math.min(100, hsva.v + step);
          changed = true;
          event.preventDefault();
          break;
        case 'ArrowDown':
          newV = Math.max(0, hsva.v - step);
          changed = true;
          event.preventDefault();
          break;
        default:
          return;
      }
      if (changed) {
        onChange({
          h: hsva.h,
          s: newS,
          v: newV,
          a: hsva.a,
        });
      }
    },
    [hsva, onChange],
  );

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

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (event.target as HTMLElement).focus();
  }, []);

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
        outline: 'none',
      }}
      ref={ref}
      onMove={handleChange}
      onDown={handleChange}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {pointerElement}
    </Interactive>
  );
});

Saturation.displayName = 'Saturation';

export default Saturation;
