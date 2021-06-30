import React, { useRef, useImperativeHandle } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import { Pointer } from './Pointer';
import { calculateChange } from './utils';

export * from '@uiw/color-convert';

interface ColorSaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  hsva: HsvaColor;
  onChange: (newColor: HsvaColor) => void;
}

export default React.forwardRef<HTMLDivElement, ColorSaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', hsva, onChange, ...other } = props;
  const container = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => container.current!);
  const containerStyle: React.CSSProperties = {
    width: 200,
    height: 200,
    position: 'relative',
    backgroundColor: `hsl(${hsva.h},100%, 50%)`,
  };
  return (
    <div
      className={prefixCls}
      style={containerStyle}
      ref={container}
      {...other}
      onMouseDown={(event) => {
        const rect = calculateChange(event as any, hsva, container.current!);
        onChange && onChange(rect);
      }}
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
    </div>
  );
});
