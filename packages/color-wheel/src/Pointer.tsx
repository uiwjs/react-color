import React from 'react';
import { useMemo } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: string;
  left: string;
  color?: string;
}

const BOXSHADOW = 'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px';

export const Pointer = ({ className, color, left, top, style, prefixCls }: PointerProps): JSX.Element => {
  const styleWarp: React.CSSProperties = {
    ...style,
    position: 'absolute',
    top,
    left,
  };
  const cls = `${prefixCls}-pointer ${className || ''}`;
  return (
    <div className={cls} style={styleWarp}>
      <div
        className={`${prefixCls}-fill`}
        style={{
          width: 10,
          height: 10,
          transform: 'translate(-5px, -5px)',
          boxShadow: BOXSHADOW,
          borderRadius: '50%',
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            inset: 0,
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};
