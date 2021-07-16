import React from 'react';
import { useMemo } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: string;
  left: string;
  color?: string;
}

const BOXSHADOW = 'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px';

export const Pointer = ({ className, color, left, top, prefixCls }: PointerProps): JSX.Element => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
  };
  return useMemo(
    () => (
      <div className={`${prefixCls}-pointer ${className || ''}`} style={style}>
        <div
          className={`${prefixCls}-fill`}
          style={{
            width: 6,
            height: 6,
            transform: 'translate(-3px, -3px)',
            boxShadow: BOXSHADOW,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      </div>
    ),
    [top, left, color, className, prefixCls],
  );
};
