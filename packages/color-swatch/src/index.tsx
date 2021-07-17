import React from 'react';
import { HsvaColor, hexToHsva } from '@uiw/color-convert';

export type SwatchPresetColor = { color: string; title?: string } | string;
export type SwatchRectRenderProps = {
  key: string | number;
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
  rectRender?: (props: SwatchRectRenderProps) => JSX.Element;
  onChange?: (hsva: HsvaColor) => void;
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
  const rectStyle: React.CSSProperties = {
    background: 'rgb(144, 19, 254)',
    height: 15,
    width: 15,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2,
    ...rectProps.style,
  };
  const handleClick = (hex: string) => {
    onChange && onChange(hexToHsva(hex));
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
          if (rectRender) {
            return rectRender({
              key: idx,
              title,
              color: background,
              checked: !!checked,
              style: { ...rectStyle, background },
              onClick: () => handleClick(background),
            });
          }
          const child =
            rectProps.children && React.isValidElement(rectProps.children)
              ? React.cloneElement(rectProps.children, {
                  color: background,
                  checked,
                })
              : null;
          return (
            <div
              tabIndex={0}
              key={idx}
              title={title}
              onClick={() => handleClick(background)}
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
