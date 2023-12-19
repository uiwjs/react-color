import React, { CSSProperties, Fragment } from 'react';
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
  LeftBottom = 'LB',
  Right = 'R',
  RightTop = 'RT',
  RightBottom = 'RB',
  Top = 'T',
  TopRight = 'TR',
  TopLeft = 'TL',
  Bottom = 'B',
  BottomLeft = 'BL',
  BottomRight = 'BR',
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
    rectRender,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const handleChange = (hsv: HsvaColor) => onChange && onChange(handleColor(hsv));

  const styleWrapper = {
    '--github-border': '1px solid rgba(0, 0, 0, 0.2)',
    '--github-background-color': '#fff',
    '--github-box-shadow': 'rgb(0 0 0 / 15%) 0px 3px 12px',
    '--github-arrow-border-color': 'rgba(0, 0, 0, 0.15)',
    width: 200,
    borderRadius: 4,
    background: 'var(--github-background-color)',
    boxShadow: 'var(--github-box-shadow)',
    border: 'var(--github-border)',
    position: 'relative',
    padding: 5,
    ...style,
  } as CSSProperties;

  const rStyle: React.CSSProperties = {
    borderStyle: 'solid',
    position: 'absolute',
  };
  let arrBrStyl: React.CSSProperties = { ...rStyle };
  let arrStyl: React.CSSProperties = { ...rStyle };
  if (/^T/.test(placement)) {
    arrBrStyl.borderWidth = '0 8px 8px';
    arrBrStyl.borderColor = 'transparent transparent var(--github-arrow-border-color)';
    arrStyl.borderWidth = '0 7px 7px';
    arrStyl.borderColor = 'transparent transparent var(--github-background-color)';
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
    arrBrStyl.borderWidth = '8px 8px 0';
    arrBrStyl.borderColor = 'var(--github-arrow-border-color) transparent transparent';
    arrStyl.borderWidth = '7px 7px 0';
    arrStyl.borderColor = 'var(--github-background-color) transparent transparent';
    if (placement === GithubPlacement.BottomRight) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
    if (placement === GithubPlacement.Bottom) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
    if (placement === GithubPlacement.BottomLeft) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
    }
  }
  if (/^(B|T)/.test(placement)) {
    if (placement === GithubPlacement.Top || placement === GithubPlacement.Bottom) {
      arrBrStyl.left = '50%';
      arrBrStyl.marginLeft = -8;
      arrStyl.left = '50%';
      arrStyl.marginLeft = -7;
    }
    if (placement === GithubPlacement.TopRight || placement === GithubPlacement.BottomRight) {
      arrBrStyl.right = 10;
      arrStyl.right = 11;
    }
    if (placement === GithubPlacement.TopLeft || placement === GithubPlacement.BottomLeft) {
      arrBrStyl.left = 7;
      arrStyl.left = 8;
    }
  }
  if (/^L/.test(placement)) {
    arrBrStyl.borderWidth = '8px 8px 8px 0';
    arrBrStyl.borderColor = 'transparent var(--github-arrow-border-color) transparent transparent';
    arrStyl.borderWidth = '7px 7px 7px 0';
    arrStyl.borderColor = 'transparent var(--github-background-color) transparent transparent';
    arrBrStyl.left = -8;
    arrStyl.left = -7;
  }
  if (/^R/.test(placement)) {
    arrBrStyl.borderWidth = '8px 0 8px 8px';
    arrBrStyl.borderColor = 'transparent transparent transparent var(--github-arrow-border-color)';
    arrStyl.borderWidth = '7px 0 7px 7px';
    arrStyl.borderColor = 'transparent transparent transparent var(--github-background-color)';
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
    if (placement === GithubPlacement.LeftBottom || placement === GithubPlacement.RightBottom) {
      arrBrStyl.top = '100%';
      arrStyl.top = '100%';
      arrBrStyl.marginTop = -21;
      arrStyl.marginTop = -20;
    }
  }
  const render = ({ ...props }: SwatchRectRenderProps) => {
    const handle = rectRender && rectRender({ ...props });
    if (handle) return handle;
    return <Point {...props} rectProps={rectProps} />;
  };
  return (
    <Swatch
      ref={ref}
      className={[prefixCls, className].filter(Boolean).join(' ')}
      colors={colors}
      color={hex}
      rectRender={render}
      {...other}
      onChange={handleChange}
      style={styleWrapper}
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
