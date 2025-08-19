import React, { useMemo } from 'react';
import type * as CSS from 'csstype';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: CSS.Properties<string | number>['top'];
  left: CSS.Properties<string | number>['left'];
  color?: string;
}

export const Pointer = ({ className, color, left, top, prefixCls }: PointerProps): JSX.Element => {
  const style: CSS.Properties<string | number> = {
    position: 'absolute',
    top,
    left,
  };

  const stylePointer: CSS.Properties<string | number> = {
    '--saturation-pointer-box-shadow':
      'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px',
    width: 6,
    height: 6,
    transform: 'translate(-3px, -3px)',
    boxShadow: 'var(--saturation-pointer-box-shadow)',
    borderRadius: '50%',
    backgroundColor: color,
  } as CSS.Properties<string | number>;

  return useMemo(
    () => (
      <div className={`${prefixCls}-pointer ${className || ''}`} style={style}>
        <div className={`${prefixCls}-fill`} style={stylePointer} />
      </div>
    ),
    [top, left, color, className, prefixCls],
  );
};
