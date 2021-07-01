import React from 'react';
import { useMemo } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  left?: string;
  top?: string;
}

const BOXSHADOW = 'rgb(0 0 0 / 37%) 0px 1px 4px 0px';

export const Pointer = ({ className, prefixCls, left, top }: PointerProps): JSX.Element => {
  const style: React.CSSProperties = {
    position: 'absolute',
    left,
    top,
  };
  return useMemo(
    () => (
      <div className={`${prefixCls}-pointer ${className || ''}`} style={style}>
        <div
          className={`${prefixCls}-fill`}
          style={{
            width: 18,
            height: 18,
            transform: left ? 'translate(-9px, -1px)' : 'translate(-1px, -9px)',
            boxShadow: BOXSHADOW,
            borderRadius: '50%',
            backgroundColor: 'rgb(248, 248, 248)',
          }}
        />
      </div>
    ),
    [className, left, top, prefixCls],
  );
};
