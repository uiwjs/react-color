import React from 'react';
import { HsvaColor, hexToHsva } from '@uiw/color-convert';

export type PresetColor = { color: string; title?: string } | string;
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'> {
  color?: string;
  colors?: PresetColor[];
  onClick?: (hsva: HsvaColor) => void;
}

const PRESET_COLORS = [
  '#D0021B',
  '#F5A623',
  '#f8e61b',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

export default function Swatch(props: SwatchProps) {
  const { colors = PRESET_COLORS, onClick } = props;
  const rectStyle: React.CSSProperties = {
    background: 'rgb(144, 19, 254)',
    height: 16,
    width: 16,
    marginRight: 10,
    marginBottom: 10,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 3,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  };
  const handleClick = (hex: string) => {
    onClick && onClick(hexToHsva(hex));
  };
  return (
    <div
      style={{
        paddingLeft: 10,
        paddingTop: 10,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        borderTop: '1px solid rgb(238, 238, 238)',
      }}
    >
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
          return (
            <div
              tabIndex={0}
              key={idx}
              title={title}
              onClick={() => handleClick(background)}
              style={{ ...rectStyle, background }}
            />
          );
        })}
    </div>
  );
}
