import React, { useCallback } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { type Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, type PointerProps } from './Pointer';
import type * as CSS from 'csstype';

export * from './Pointer';

export interface AlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: CSS.Properties<string | number>['width'];
  /** String, Pixel value for picker height. Default `16px` */
  height?: CSS.Properties<string | number>['height'];
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: (props: PointerProps) => JSX.Element;
  /** Set rounded corners. */
  radius?: CSS.Properties<string | number>['borderRadius'];
  /** Set the background color. */
  background?: string;
  /** Set the background element props. */
  bgProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Set the interactive element props. */
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  pointerProps?: PointerProps;
  /** String Enum, horizontal or vertical. Default `horizontal` */
  direction?: 'vertical' | 'horizontal';
  /** Flip alpha progression along the current axis. */
  reverse?: boolean;
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
    reverse = false,
    style,
    onChange,
    pointer,
    ...other
  } = props;

  const offsetToAlpha = useCallback(
    (offset: Interaction) => {
      const value = direction === 'horizontal' ? offset.left : offset.top;
      if (direction === 'horizontal') {
        return reverse ? 1 - value : value;
      }
      return reverse ? value : 1 - value;
    },
    [direction, reverse],
  );

  const alphaToOffset = useCallback(
    (alpha: number) => {
      if (direction === 'horizontal') {
        return reverse ? 1 - alpha : alpha;
      }
      return reverse ? alpha : 1 - alpha;
    },
    [direction, reverse],
  );

  const handleChange = (offset: Interaction) => {
    const alpha = offsetToAlpha(offset);
    onChange && onChange({ ...hsva, a: alpha }, offset);
  };

  const colorTo = hsvaToHslaString(Object.assign({}, hsva, { a: 1 }));
  const horizontalGradient = reverse
    ? `linear-gradient(to right, ${colorTo} 0%, rgba(244, 67, 54, 0) 100%)`
    : `linear-gradient(to right, rgba(244, 67, 54, 0) 0%, ${colorTo} 100%)`;
  const verticalGradient = reverse
    ? `linear-gradient(to bottom, rgba(244, 67, 54, 0) 0%, ${colorTo} 100%)`
    : `linear-gradient(to bottom, ${colorTo} 0%, rgba(244, 67, 54, 0) 100%)`;
  const innerBackground = direction === 'horizontal' ? horizontalGradient : verticalGradient;
  const comProps: { left?: string; top?: string } = {};
  if (direction === 'horizontal') {
    comProps.left = `${alphaToOffset(hsva.a) * 100}%`;
  } else {
    comProps.top = `${alphaToOffset(hsva.a) * 100}%`;
  }
  const styleWrapper: CSS.Properties<string | number> = {
    '--alpha-background-color': '#fff',
    '--alpha-pointer-background-color': 'rgb(248, 248, 248)',
    '--alpha-pointer-box-shadow': 'rgb(0 0 0 / 37%) 0px 1px 4px 0px',
    borderRadius: radius,
    background: `url(${BACKGROUND_IMG}) left center`,
    backgroundColor: 'var(--alpha-background-color)',
    ...{ width, height },
    ...style,
    position: 'relative',
  } as CSS.Properties<string | number>;

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const step = 0.01; // 1% step
      const currentAlpha = hsva.a;
      let newAlpha = currentAlpha;
      switch (event.key) {
        case 'ArrowLeft':
          if (direction === 'horizontal') {
            newAlpha = reverse ? Math.min(1, currentAlpha + step) : Math.max(0, currentAlpha - step);
            event.preventDefault();
          }
          break;
        case 'ArrowRight':
          if (direction === 'horizontal') {
            newAlpha = reverse ? Math.max(0, currentAlpha - step) : Math.min(1, currentAlpha + step);
            event.preventDefault();
          }
          break;
        case 'ArrowUp':
          if (direction === 'vertical') {
            newAlpha = reverse ? Math.max(0, currentAlpha - step) : Math.min(1, currentAlpha + step);
            event.preventDefault();
          }
          break;
        case 'ArrowDown':
          if (direction === 'vertical') {
            newAlpha = reverse ? Math.min(1, currentAlpha + step) : Math.max(0, currentAlpha - step);
            event.preventDefault();
          }
          break;
        default:
          return;
      }

      if (newAlpha !== currentAlpha) {
        const syntheticAxisOffset = alphaToOffset(newAlpha);
        const syntheticOffset: Interaction = {
          left: direction === 'horizontal' ? syntheticAxisOffset : hsva.a,
          top: direction === 'vertical' ? syntheticAxisOffset : hsva.a,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        };
        onChange && onChange({ ...hsva, a: newAlpha }, syntheticOffset);
      }
    },
    [alphaToOffset, hsva, direction, onChange, reverse],
  );

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (event.target as HTMLElement).focus();
  }, []);

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
          outline: 'none',
        }}
        onMove={handleChange}
        onDown={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {pointerElement}
      </Interactive>
    </div>
  );
});

Alpha.displayName = 'Alpha';

export default Alpha;
