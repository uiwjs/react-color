import React, { useCallback } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer } from './Pointer';

export interface ColorAlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: number;
  /** String, Pixel value for picker height. Default `16px` */
  height?: number;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left }: { prefixCls: string; left: string }) => JSX.Element;
  /** Set rounded corners. */
  radius?: number;
  /** Set the background color. */
  background?: string;
  onChange?: (newAlpha: { a: number }, offset: Interaction) => void;
}

const BACKGROUND =
  'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center';

export default React.forwardRef<HTMLDivElement, ColorAlphaProps>((props, ref) => {
  const {
    prefixCls = 'w-color-alpha',
    className,
    hsva,
    background,
    radius = 0,
    width = 320,
    height = 16,
    style,
    onChange,
    pointer,
    ...other
  } = props;
  const handleChange = useCallback((offset: Interaction) => onChange && onChange({ ...hsva, a: offset.left }, offset), [hsva]);
  const Comp = pointer ? pointer : Pointer;
  const colorTo = hsvaToHslaString(Object.assign({}, hsva, { a: 1 }));
  const innerBackground = `linear-gradient(to right, rgba(244, 67, 54, 0) 0%, ${colorTo} 100%)`;
  return (
    <div
      {...other}
      className={`${prefixCls} ${className || ''}`}
      style={{ borderRadius: radius, ...style, position: 'relative', width, height, background: BACKGROUND }}
      ref={ref}
    >
      <Interactive
        style={{
          position: 'absolute',
          inset: 0,
        }}
        onMove={handleChange}
        onDown={handleChange}
      >
        <div style={{ position: 'absolute', inset: 0, background: background || innerBackground, borderRadius: radius }}>
          <Comp prefixCls={prefixCls} left={`${hsva.a * 100}%`} />
        </div>
      </Interactive>
    </div>
  );
});
