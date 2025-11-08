import React, { cloneElement, useCallback, useReducer, useRef } from 'react';
import type * as CSS from 'csstype';
import {
  type HsvaColor,
  type ColorResult,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  getContrastingColor,
} from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';
import Swatch from '@uiw/react-color-swatch';

const CORLER_HEX = [
  '#EB144C',
  '#FF6900',
  '#FCB900',
  '#FCF800',
  '#23D000',
  '#7BDCB5',
  '#00D084',
  '#8ED1FC',
  '#06C2E3',
  '#0693E3',
  '#F8B7D2',
  '#F78DA7',
  '#9E7EDA',
  '#9900EF',
];

export interface BlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  showTriangle?: boolean;
  showMainBlock?: boolean;
  flexCenter?: boolean;
  showSmallBlock?: boolean;
  color?: string | HsvaColor;
  colors?: string[];
  widthBlock?: string | number;
  inputWidth?: string | number;
  swatchStyle?: React.HTMLAttributes<HTMLDivElement>;
  onChange?: (color: ColorResult, env?: React.SyntheticEvent<HTMLElement>) => void;
}

const Block = React.forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const {
    prefixCls = 'w-color-block',
    className,
    style,
    color,
    colors = CORLER_HEX,
    widthBlock = 170,
    inputWidth = '100%',
    swatchStyle = { style: { width: 22, height: 22 } },
    showTriangle = true,
    showMainBlock = true,
    showSmallBlock = false,
    flexCenter = false,
    onChange,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const handleChange = (hsv: HsvaColor, evn?: React.SyntheticEvent<HTMLElement>) => {
    onChange && onChange(handleColor(hsv), evn);
  };
  const handleHex = (value: string | number, evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string' && validHex(value) && /(3|6)/.test(String(value.replace(/^#/, '').length))) {
      onChange && onChange(handleColor(hexToHsva(value)), evn);
    }
  };
  const stylePointer: CSS.Properties<string | number> = {
    '--block-background-color': 'rgb(255, 255, 255)',
    '--block-box-shadow': 'rgb(0 0 0 / 10%) 0 1px',
    width: widthBlock,
    borderRadius: 6,
    background: 'var(--block-background-color)',
    boxShadow: 'var(--block-box-shadow)',
    position: 'relative',
    ...style,
  } as CSS.Properties<string | number>;
  return (
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ')} style={stylePointer} {...other}>
      {showTriangle && (
        <div
          style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 10px 10px',
            borderColor: `${showMainBlock ? `transparent transparent ${hex}` : `transparent transparent #323232`}`,
            position: 'absolute',
            top: -10,
            left: '50%',
            marginLeft: -10,
          }}
        />
      )}
      {showMainBlock && (
        <div
          title={hex}
          style={{
            backgroundColor: `${hex}`,
            color: getContrastingColor(hex),
            height: 110,
            fontSize: 18,
            borderRadius: '6px 6px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hex.toLocaleUpperCase()}
        </div>
      )}
      <div>
        <Swatch
          colors={colors}
          color={hex}
          flexCenter={flexCenter}
          rectProps={swatchStyle}
          onChange={(hsva, color, evn) => handleChange(hsva, evn)}
        />
      </div>
      <div style={{ display: 'flex', marginTop: 5, justifyContent: 'space-between' }}>
        <EditableInput
          label={'Write your color'}
          onChange={(evn, val) => handleHex(val, evn)}
          onBlur={(evn) => {
            const value = evn.target.value;
            evn.target.value = value.slice(0, 6);
            handleHex(value.slice(0, 6), evn);
          }}
          inputStyle={{
            height: 22,
            width: inputWidth,
            outline: 0,
            borderRadius: 3,
            padding: '0 7px',
            fontSize: 12,
          }}
          style={{
            padding: '0px 10px 10px 10px',
            paddingTop: 0,
            borderRadius: '0 0 6px 6px',
          }}
        />
        {!showMainBlock && showSmallBlock && (
          <span
            style={{
              display: 'flex',
              width: '60%',
              height: 22,
              backgroundColor: hex,
              color: getContrastingColor(hex),
              marginRight: '13.5px',
              borderRadius: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {hex}
          </span>
        )}
      </div>
    </div>
  );
});

Block.displayName = 'Block';

export default Block;
