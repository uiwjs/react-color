import React, { CSSProperties, FC, memo, useCallback, useMemo } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, PointerProps } from './Pointer';

export * from './Pointer';

export interface AlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: React.CSSProperties['width'];
  /** String, Pixel value for picker height. Default `16px` */
  height?: React.CSSProperties['height'];
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: (props: PointerProps) => JSX.Element;
  /** Set rounded corners. */
  radius?: React.CSSProperties['borderRadius'];
  /** Set the background color. */
  background?: string;
  /** Set the background element props. */
  bgProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Set the interactive element props. */
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  pointerProps?: PointerProps;
  /** String Enum, horizontal or vertical. Default `horizontal` */
  direction?: 'vertical' | 'horizontal';
  onChange?: (newAlpha: { a: number }, offset: Interaction) => void;
}

export const BACKGROUND_IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==';

const Alpha = React.forwardRef<HTMLDivElement, AlphaProps>((props, ref) => {
  const {
    prefixCls = 'w-color-alpha',
    className,
    hsva,
    background,
    bgProps = {},
    innerProps = {},
    pointerProps = {},
    radius = 0,
    width,
    height = 16,
    direction = 'horizontal',
    style,
    onChange,
    pointer,
    ...other
  } = props;

  const handleChange = (offset: Interaction) => {
    onChange && onChange({ ...hsva, a: direction === 'horizontal' ? offset.left : offset.top }, offset);
  };

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
  const styleWrapper = {
    '--alpha-background-color': '#fff',
    '--alpha-pointer-background-color': 'rgb(248, 248, 248)',
    '--alpha-pointer-box-shadow': 'rgb(0 0 0 / 37%) 0px 1px 4px 0px',
    borderRadius: radius,
    background: `url(${BACKGROUND_IMG}) left center`,
    backgroundColor: 'var(--alpha-background-color)',
    ...{ width, height },
    ...style,
    position: 'relative',
  } as CSSProperties;

  const pointerElement =
    pointer && typeof pointer === 'function' ? (
      pointer({ prefixCls, ...pointerProps, ...comProps })
    ) : (
      <Pointer {...pointerProps} prefixCls={prefixCls} {...comProps} />
    );

  return (
    <div
      {...other}
      className={[prefixCls, `${prefixCls}-${direction}`, className || ''].filter(Boolean).join(' ')}
      style={styleWrapper}
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
        {pointerElement}
      </Interactive>
    </div>
  );
});

Alpha.displayName = 'Alpha';

export default Alpha;
