import React, { CSSProperties, useCallback } from 'react';
import {
  ColorResult,
  color as handleColor,
  hexToHsva,
  validHex,
  HsvaColor,
  hsvaToHex,
  getContrastingColor,
} from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';
import RGBA from '@uiw/react-color-editable-input-rgba';
import Swatch, { type SwatchProps, type SwatchRectRenderProps } from '@uiw/react-color-swatch';

export interface CompactProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult, evn?: T) => void;
  rectRender?: (props: SwatchRectRenderProps) => JSX.Element | undefined;
  rectProps?: SwatchProps['rectProps'];
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

function Point(props: { color?: string; checked?: boolean }) {
  if (!props.checked) return null;
  return (
    <div
      style={{
        height: 5,
        width: 5,
        borderRadius: '50%',
        backgroundColor: getContrastingColor(props.color!),
      }}
    />
  );
}

const Compact = React.forwardRef<HTMLDivElement, CompactProps<React.MouseEvent<HTMLDivElement, MouseEvent>>>((props, ref) => {
  const {
    prefixCls = 'w-color-compact',
    className,
    style,
    onChange,
    color,
    colors = COLORS,
    rectProps,
    rectRender,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva).replace(/^#/, '') : '';
  const handleChangeCallback = useCallback((hsv: HsvaColor) => onChange && onChange(handleColor(hsv)), []);
  const handleHex = (value: string | number, evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string' && validHex(value) && /(3|6)/.test(String(value.length))) {
      handleChangeCallback(hexToHsva(value));
    }
  };
  const rgbProps = {
    style: {
      alignItems: 'baseline',
    },
    inputStyle: { boxShadow: 'none', backgroundColor: 'transparent', outline: 0 },
  };
  const wrapperStyle = {
    '--compact-background-color': '#f6f6f6',
    background: 'var(--compact-background-color)',
    borderRadius: 3,
    display: 'flex',
    width: 240,
    flexWrap: 'wrap',
    paddingTop: 5,
    paddingLeft: 5,
    ...style,
  } as CSSProperties;
  return (
    <div ref={ref} style={wrapperStyle} className={[prefixCls, className || ''].filter(Boolean).join(' ')} {...other}>
      <Swatch
        colors={colors}
        color={color ? hsvaToHex(hsva) : undefined}
        rectRender={rectRender}
        rectProps={{
          children: <Point />,
          ...rectProps,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...rectProps?.style,
          },
        }}
        onChange={(hsvColor) => handleChangeCallback(hsvColor)}
      />
      <div style={{ display: 'flex', margin: '0 4px 3px 0' }}>
        <EditableInput
          onChange={(evn, val) => handleHex(val, evn)}
          labelStyle={{ paddingRight: 5, marginTop: -1 }}
          value={hex.toLocaleUpperCase()}
          label={<div style={{ width: 8, height: 8, backgroundColor: `#${hex}` }} />}
          inputStyle={{
            outline: 'none',
            boxShadow: 'initial',
            background: 'transparent',
          }}
          style={{
            flexDirection: 'row-reverse',
            flex: '1 1 0%',
            minWidth: 80,
          }}
        />
        <RGBA
          hsva={hsva}
          placement="left"
          onChange={(result) => handleChangeCallback(result.hsva)}
          aProps={false}
          rProps={rgbProps}
          gProps={rgbProps}
          bProps={rgbProps}
        />
      </div>
    </div>
  );
});

Compact.displayName = 'Compact';

export default Compact;
