import React, { Fragment } from 'react';
import { HsvaColor, ColorResult, color as handleColor, validHex, hexToHsva, hsvaToHex } from '@uiw/color-convert';
import Swatch, { SwatchProps } from '@uiw/react-color-swatch';
import Point from './Point';

const CORLER_HEX = [
  '#B80000',
  '#DB3E00',
  '#FCCB00',
  '#008B02',
  '#006B76',
  '#1273DE',
  '#004DCF',
  '#5300EB',
  '#EB9694',
  '#FAD0C3',
  '#FEF3BD',
  '#C1E1C5',
  '#BEDADC',
  '#C4DEF6',
  '#BED3F3',
  '#D4C4FB',
];

export interface GithubProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const Github = React.forwardRef<HTMLDivElement, GithubProps>((props, ref) => {
  const {
    prefixCls = 'w-color-github',
    className,
    style,
    color,
    colors = CORLER_HEX,
    rectProps = {},
    onChange,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const handleChange = (hsv: HsvaColor) => {
    onChange && onChange(handleColor(hsv));
  };
  return (
    <Swatch
      ref={ref}
      className={[prefixCls, className].filter(Boolean).join(' ')}
      colors={colors}
      color={hex}
      {...other}
      onChange={handleChange}
      style={{
        width: 200,
        borderRadius: 4,
        background: '#fff',
        boxShadow: 'rgb(0 0 0 / 15%) 0px 3px 12px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        position: 'relative',
        padding: 5,
      }}
      rectProps={{
        style: {
          marginRight: 0,
          marginBottom: 0,
          borderRadius: 0,
          height: 25,
          width: 25,
        },
      }}
      rectRender={({ key, ...props }) => {
        if (key === 0) {
          return (
            <Fragment key={key}>
              <div
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 8px 8px',
                  borderColor: `transparent transparent rgba(0, 0, 0, 0.15)`,
                  position: 'absolute',
                  top: -8,
                  right: 10,
                }}
              />
              <div
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 7px 7px',
                  borderColor: `transparent transparent #fff`,
                  position: 'absolute',
                  top: -7,
                  right: 11,
                }}
              />
              <Point key={key} {...props} rectProps={rectProps} />
            </Fragment>
          );
        }
        return <Point key={key} {...props} rectProps={rectProps} />;
      }}
    />
  );
});

Github.displayName = 'Github';

export default Github;
