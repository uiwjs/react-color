import React from 'react';
import {
  ColorResult,
  color as handleColor,
  hexToHsva,
  equalColorObjects,
  validHex,
  HsvaColor,
  getContrastingColor,
} from '@uiw/color-convert';

export interface CompactProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const COLORS = [
  '#4D4D4D',
  '#999999',
  '#FFFFFF',
  '#F44E3B',
  '#FE9200',
  '#FCDC00',
  '#DBDF00',
  '#A4DD00',
  '#68CCCA',
  '#73D8FF',
  '#AEA1FF',
  '#FDA1FF',
  '#333333',
  '#808080',
  '#cccccc',
  '#D33115',
  '#E27300',
  '#FCC400',
  '#B0BC00',
  '#68BC00',
  '#16A5A5',
  '#009CE0',
  '#7B64FF',
  '#FA28FF',
  '#000000',
  '#666666',
  '#B3B3B3',
  '#9F0500',
  '#C45100',
  '#FB9E00',
  '#808900',
  '#194D33',
  '#0C797D',
  '#0062B1',
  '#653294',
  '#AB149E',
];

export default React.forwardRef<HTMLDivElement, CompactProps>((props, ref) => {
  const { prefixCls = 'w-color-compact', className, style, onChange, color, colors = COLORS, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const handleClick = (hexStr: string, evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange && onChange(handleColor(hexToHsva(hexStr)), evn);
  };
  return (
    <div
      ref={ref}
      style={{
        background: '#f6f6f6',
        borderRadius: 3,
        display: 'flex',
        width: 240,
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingLeft: 5,
        ...style,
      }}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
    >
      {colors.map((hex, idx) => {
        const checked = hsva ? equalColorObjects(hexToHsva(hex), hsva) : false;
        return (
          <div
            key={hex}
            style={{
              boxSizing: 'border-box',
            }}
          >
            <div
              onClick={(evn) => handleClick(hex, evn)}
              title={hex}
              style={{
                backgroundColor: hex,
                height: 15,
                width: 15,
                marginRight: 5,
                marginBottom: 5,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
              }}
            >
              {checked && (
                <div
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: '50%',
                    backgroundColor: getContrastingColor(hex),
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});
