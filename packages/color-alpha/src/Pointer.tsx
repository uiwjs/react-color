import React, { CSSProperties } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  left?: string;
  top?: string;
  fillProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Pointer = ({ className, prefixCls, left, top, style, fillProps, ...reset }: PointerProps): JSX.Element => {
  const styleWrapper: React.CSSProperties = {
    ...style,
    position: 'absolute',
    left,
    top,
  };
  const stylePointer = {
    width: 18,
    height: 18,
    boxShadow: 'var(--alpha-pointer-box-shadow)',
    borderRadius: '50%',
    backgroundColor: 'var(--alpha-pointer-background-color)',
    ...fillProps?.style,
    transform: left ? 'translate(-9px, -1px)' : 'translate(-1px, -9px)',
  } as CSSProperties;
  return (
    <div className={`${prefixCls}-pointer ${className || ''}`} style={styleWrapper} {...reset}>
      <div className={`${prefixCls}-fill`} {...fillProps} style={stylePointer} />
    </div>
  );
};
