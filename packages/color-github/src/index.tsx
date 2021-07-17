import React, { Fragment } from 'react';
import { HsvaColor, ColorResult, color as handleColor, validHex, hexToHsva, hsvaToHex } from '@uiw/color-convert';
import Swatch, { SwatchProps, SwatchRectRenderProps } from '@uiw/react-color-swatch';
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

export enum GithubPlacement {
  Left = 'L',
  LeftTop = 'LT',
  LeftBotton = 'LB',
  Right = 'R',
  RightTop = 'RT',
  RightBotton = 'RB',
  Top = 'T',
  TopRight = 'TR',
  TopLeft = 'TL',
  Botton = 'B',
  BottonLeft = 'BL',
  BottonRight = 'BR',
}

export interface GithubRectRenderProps extends SwatchRectRenderProps {
  arrow?: JSX.Element;
}

export interface GithubProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  placement?: GithubPlacement;
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const Github = React.forwardRef<HTMLDivElement, GithubProps>((props, ref) => {
  const {
    prefixCls = 'w-color-github',
    placement = GithubPlacement.TopRight,
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
  const handleChange = (hsv: HsvaColor) => onChange && onChange(handleColor(hsv));

  const rStyle: React.CSSProperties = {
    borderStyle: 'solid',
    position: 'absolute',
  };
  let arrBrStyl: React.CSSProperties = { ...rStyle };
  let arrStyl: React.CSSProperties = { ...rStyle };
  if (/^T/.test(placement)) {
    arrBrStyl.borderWidth = '0 8px 8px';
    arrBrStyl.borderColor = 'transparent transparent rgba(0, 0, 0, 0.15)';
    arrStyl.borderWidth = '0 7px 7px';
    arrStyl.borderColor = 'transparent transparent #fff';
  }
  if (placement === GithubPlacement.TopRight) {
    arrBrStyl.top = -8;
    arrStyl.top = -7;
  }
  if (placement === GithubPlacement.Top) {
    arrBrStyl.top = -8;
    arrStyl.top = -7;
  }
  if (placement === GithubPlacement.TopLeft) {
    arrBrStyl.top = -8;
    arrStyl.top = -7;
  }
  if (/^B/.test(placement)) {
    arrBrStyl.borderWidth = '8px 8px 0 ';
    arrBrStyl.borderColor = 'rgba(0, 0, 0, 0.15) transparent transparent';
    arrStyl.borderWidth = '7px 7px 0px';
    arrStyl.borderColor = '#fff transparent transparent';
    if (placement === GithubPlacement.BottonRight) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
    if (placement === GithubPlacement.Botton) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
    if (placement === GithubPlacement.BottonLeft) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
  }
  if (/^(B|T)/.test(placement)) {
    if (placement === GithubPlacement.Top || placement === GithubPlacement.Botton) {
      arrBrStyl.left = '50%';
      arrBrStyl.marginLeft = -8;
      arrStyl.left = '50%';
      arrStyl.marginLeft = -7;
    }
    if (placement === GithubPlacement.TopRight || placement === GithubPlacement.BottonRight) {
      arrBrStyl.right = 10;
      arrStyl.right = 11;
    }
    if (placement === GithubPlacement.TopLeft || placement === GithubPlacement.BottonLeft) {
      arrBrStyl.left = 7;
      arrStyl.left = 8;
    }
  }
  if (/^L/.test(placement)) {
    arrBrStyl.borderWidth = '8px 8px 8px 0px';
    arrBrStyl.borderColor = 'transparent rgba(0, 0, 0, 0.15) transparent transparent';
    arrStyl.borderWidth = '7px 7px 7px 0px';
    arrStyl.borderColor = 'transparent #fff transparent transparent';
    arrBrStyl.left = -8;
    arrStyl.left = -7;
  }
  if (/^R/.test(placement)) {
    arrBrStyl.borderWidth = '8px 0px 8px 8px';
    arrBrStyl.borderColor = 'transparent transparent transparent rgba(0, 0, 0, 0.15)';
    arrStyl.borderWidth = '7px 0px 7px 7px';
    arrStyl.borderColor = 'transparent transparent transparent #fff';
    arrBrStyl.right = -8;
    arrStyl.right = -7;
  }
  if (/^(L|R)/.test(placement)) {
    if (placement === GithubPlacement.RightTop || placement === GithubPlacement.LeftTop) {
      arrBrStyl.top = 5;
      arrStyl.top = 6;
    }
    if (placement === GithubPlacement.Left || placement === GithubPlacement.Right) {
      arrBrStyl.top = '50%';
      arrStyl.top = '50%';
      arrBrStyl.marginTop = -8;
      arrStyl.marginTop = -7;
    }
    if (placement === GithubPlacement.LeftBotton || placement === GithubPlacement.RightBotton) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
      arrBrStyl.marginTop = -21;
      arrStyl.marginTop = -20;
    }
  }
  return (
    <Swatch
      ref={ref}
      className={[prefixCls, className].filter(Boolean).join(' ')}
      colors={colors}
      color={hex}
      rectRender={({ key, ...props }) => {
        return <Point key={key} {...props} rectProps={rectProps} />;
      }}
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
        ...style,
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
      addonBefore={
        <Fragment>
          <div style={arrBrStyl} />
          <div style={arrStyl} />
        </Fragment>
      }
    />
  );
});

Github.displayName = 'Github';

export default Github;
