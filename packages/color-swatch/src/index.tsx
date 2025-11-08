import React, { Fragment, useCallback, useRef } from 'react';
import { type HsvaColor, hexToHsva, color as handleColor, type ColorResult } from '@uiw/color-convert';
import type * as CSS from 'csstype';

export type SwatchPresetColor = { color: string; title?: string } | string;
export interface SwatchRectRenderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  color: string;
  checked: boolean;
  style: CSS.Properties<string | number>;
  onClick: (evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string;
  colors?: SwatchPresetColor[];
  flexCenter?: boolean;
  rectProps?: React.HTMLAttributes<HTMLDivElement>;
  rectRender?: (props: SwatchRectRenderProps) => JSX.Element | undefined;
  onChange?: (hsva: HsvaColor, color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}

const Swatch = React.forwardRef<HTMLDivElement, SwatchProps>((props, ref) => {
  const {
    prefixCls = 'w-color-swatch',
    className,
    color,
    colors = [],
    flexCenter,
    style,
    rectProps = {},
    onChange,
    addonAfter,
    addonBefore,
    rectRender,
    ...other
  } = props;
  const rectStyle: CSS.Properties<string | number> = {
    '--swatch-background-color': 'rgb(144, 19, 254)',
    background: 'var(--swatch-background-color)',
    height: 15,
    width: 15,
    marginRight: flexCenter ? 0 : 10,
    marginBottom: flexCenter ? 0 : 10,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2,
    transition: '.15s ease-in-out',
    ...rectProps.style,
  } as CSS.Properties<string | number>;
  const swatchBtn = useRef<HTMLDivElement>(null);
  const handleMouseEnter = useCallback((evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evn.currentTarget.style.transform = 'scale(1.2)';
  }, []);
  const handleMouseLeave = useCallback((evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evn.currentTarget.style.transform = 'scale(1)';
  }, []);
  const handleClick = (hex: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(evn.currentTarget.tagName)
    onChange && onChange(hexToHsva(hex), handleColor(hexToHsva(hex)), evn);
  };
  return (
    <div
      ref={ref}
      {...other}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        ...(flexCenter
          ? {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(22px, 1fr))',
              alignItems: 'center',
              margin: '10px 10px 10px',
              gap: '10px',
            }
          : {
              display: 'flex',
              flexWrap: 'wrap',
              position: 'relative',
              paddingLeft: 10,
              paddingTop: 10,
            }),
        ...style,
      }}
    >
      {addonBefore && React.isValidElement(addonBefore) && addonBefore}
      {colors &&
        Array.isArray(colors) &&
        colors.map((item, idx) => {
          let title = '';
          let background = '';
          if (typeof item === 'string') {
            title = item;
            background = item;
          }
          if (typeof item === 'object' && item.color) {
            title = item.title || item.color;
            background = item.color;
          }
          const checked = color && color.toLocaleLowerCase() === background.toLocaleLowerCase();
          const render =
            rectRender &&
            rectRender({
              title,
              color: background,
              checked: !!checked,
              style: { ...rectStyle, background },
              onClick: (evn) => handleClick(background, evn),
            });
          if (render) {
            return <Fragment key={idx}>{render}</Fragment>;
          }
          const child =
            rectProps.children && React.isValidElement(rectProps.children)
              ? React.cloneElement<any>(rectProps.children, {
                  color: background,
                  checked,
                })
              : null;
          return (
            <div
              tabIndex={0}
              key={idx}
              title={title}
              onClick={(evn) => handleClick(background, evn)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...rectProps}
              children={child}
              style={{
                boxSizing: 'border-box',
                border: `${checked ? `1px solid ${color}` : ''}`,
                boxShadow: `${checked ? `0px 0px 5px ${color}` : ''}`,
                ...rectStyle,
                background,
              }}
            />
          );
        })}
      {addonAfter && React.isValidElement(addonAfter) && addonAfter}
    </div>
  );
});

Swatch.displayName = 'Swatch';

export default Swatch;
