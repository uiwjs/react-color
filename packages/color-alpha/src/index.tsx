import React, { useCallback } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, PointerProps } from './Pointer';

export interface AlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: React.CSSProperties['width'];
  /** String, Pixel value for picker height. Default `16px` */
  height?: React.CSSProperties['height'];
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left }: PointerProps) => JSX.Element;
  /** Set rounded corners. */
  radius?: React.CSSProperties['borderRadius'];
  /** Set the background color. */
  background?: string;
  /** Set the background element props. */
  bgProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Set the interactive element props. */
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  /** String Enum, horizontal or vertical. Default `horizontal` */
  direction?: 'vertical' | 'horizontal';
  onChange?: (newAlpha: { a: number }, offset: Interaction) => void;
}

export const BACKGROUND_IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==';

const Aplha = React.forwardRef<HTMLDivElement, AlphaProps>((props, ref) => {
  const {
    prefixCls = 'w-color-alpha',
    className,
    hsva,
    background,
    bgProps = {},
    innerProps = {},
    radius = 0,
    width,
    height = 16,
    direction = 'horizontal',
    style,
    onChange,
    pointer,
    ...other
  } = props;

  const handleChange = useCallback(
    (offset: Interaction) => {
      onChange && onChange({ ...hsva, a: direction === 'horizontal' ? offset.left : offset.top }, offset);
    },
    [hsva],
  );

  const colorTo = hsvaToHslaString(Object.assign({}, hsva, { a: 1 }));
  const innerBackground = `linear-gradient(to ${
    direction === 'horizontal' ? 'right' : 'bottom'
  }, rgba(244, 67, 54, 0) 0%, ${colorTo} 100%)`;
  const comProps: { left?: string; top?: string } = {};
  if (direction === 'horizontal') {
    comProps.left = `${hsva.a * 100}%`;
  } else {
    comProps.top = `${hsva.a * 100}%`;
  }

  return (
    <div
      {...other}
      className={[prefixCls, `${prefixCls}-${direction}`, className || ''].filter(Boolean).join(' ')}
      style={{
        borderRadius: radius,
        background: `url(${BACKGROUND_IMG}) left center`,
        backgroundColor: '#fff',
        ...style,
        position: 'relative',
        ...{ width, height },
      }}
      ref={ref}
    >
      <div
        {...bgProps}
        style={{
          inset: 0,
          position: 'absolute',
          background: background || innerBackground,
          borderRadius: radius,
          ...bgProps.style,
        }}
      />
      <Interactive
        {...innerProps}
        style={{
          ...innerProps.style,
          inset: 0,
          zIndex: 1,
          position: 'absolute',
        }}
        onMove={handleChange}
        onDown={handleChange}
      >
        {React.createElement(pointer || Pointer, {
          prefixCls,
          ...comProps,
        })}
      </Interactive>
    </div>
  );
});

Aplha.displayName = 'Aplha';

export default Aplha;
