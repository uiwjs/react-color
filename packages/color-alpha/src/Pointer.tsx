import React, { CSSProperties } from 'react';
import { useMemo } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  left?: string;
  top?: string;
}

export const Pointer = ({ className, prefixCls, left, top }: PointerProps): JSX.Element => {
  const style: React.CSSProperties = {
    position: 'absolute',
    left,
    top,
  };
  const stylePointer = {
    width: 18,
    height: 18,
    transform: left ? 'translate(-9px, -1px)' : 'translate(-1px, -9px)',
    boxShadow: 'var(--alpha-pointer-box-shadow)',
    borderRadius: '50%',
    backgroundColor: 'var(--alpha-pointer-background-color)',
  } as CSSProperties;
  return useMemo(
    () => (
      <div className={`${prefixCls}-pointer ${className || ''}`} style={style}>
        <div className={`${prefixCls}-fill`} style={stylePointer} />
      </div>
    ),
    [className, left, top, prefixCls],
  );
};
