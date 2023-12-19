import React, { Fragment } from 'react';
import { HsvaColor, hexToHsva, color as handleColor, ColorResult } from '@uiw/color-convert';

export type SwatchPresetColor = { color: string; title?: string } | string;
export type SwatchRectRenderProps = {
  title: string;
  color: string;
  checked: boolean;
  style: React.CSSProperties;
  onClick: (evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string;
  colors?: SwatchPresetColor[];
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
    style,
    rectProps = {},
    onChange,
    addonAfter,
    addonBefore,
    rectRender,
    ...other
  } = props;
  const rectStyle = {
    '--swatch-background-color': 'rgb(144, 19, 254)',
    background: 'var(--swatch-background-color)',
    height: 15,
    width: 15,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2,
    ...rectProps.style,
  } as React.CSSProperties;
  const handleClick = (hex: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange && onChange(hexToHsva(hex), handleColor(hexToHsva(hex)), evn);
  };
  return (
    <div
      ref={ref}
      {...other}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
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
              {...rectProps}
              children={child}
              style={{ ...rectStyle, background }}
            />
          );
        })}
      {addonAfter && React.isValidElement(addonAfter) && addonAfter}
    </div>
  );
});

Swatch.displayName = 'Swatch';

export default Swatch;
