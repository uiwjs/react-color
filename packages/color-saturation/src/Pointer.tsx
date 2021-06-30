import React from 'react';

interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: string;
  left: string;
  color?: string;
}

export const Pointer = ({
  className,
  color,
  left,
  top,
  prefixCls,
}: PointerProps): JSX.Element => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
  };

  return (
    <div className={`${prefixCls}-pointer ${className || ''}`} style={style}>
      <div
        className={`${prefixCls}-fill`}
        style={{
          width: 5,
          height: 5,
          transform: 'translate(-3px, -3px)',
          boxShadow:
            'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px',
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
    </div>
  );
};
