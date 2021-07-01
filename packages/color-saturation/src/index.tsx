import React from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer } from './Pointer';

export * from '@uiw/color-convert';

export interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  onChange?: (newColor: HsvaColor) => void;
}

export default React.forwardRef<HTMLDivElement, SaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', className, style, hsva, onChange, ...other } = props;
  const containerStyle: React.CSSProperties = {
    width: 200,
    height: 200,
    ...style,
    position: 'relative',
    backgroundColor: `hsl(${hsva.h},100%, 50%)`,
  };

  const handleChange = (interaction: Interaction, event: MouseEvent | TouchEvent) => {
    onChange &&
      onChange({
        h: hsva.h,
        s: interaction.left * 100,
        v: (1 - interaction.top) * 100,
        a: hsva.a,
        // source: 'hsv',
      });
  };

  return (
    <div className={`${prefixCls} ${className || ''}`} style={containerStyle} ref={ref} {...other}>
      <Interactive
        style={{
          position: 'absolute',
          inset: 0,
        }}
        onMove={handleChange}
        onDown={handleChange}
      >
        <div
          style={{
            inset: 0,
            background: 'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
            position: 'absolute',
          }}
        >
          <div
            style={{
              inset: 0,
              background: 'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
              position: 'absolute',
            }}
          >
            <Pointer prefixCls={prefixCls} top={`${100 - hsva.v}%`} left={`${hsva.s}%`} color={hsvaToHslaString(hsva)} />
          </div>
        </div>
      </Interactive>
    </div>
  );
});
