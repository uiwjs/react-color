import React, { useCallback } from 'react';
import { SwatchRectRenderProps, SwatchProps } from '@uiw/react-color-swatch';

interface PointProps extends SwatchRectRenderProps {
  rectProps?: SwatchProps['rectProps'];
}

export default function Point({ style, title, checked, color, onClick, rectProps }: PointProps) {
  const handleMouseEnter = useCallback((evn) => {
    evn.target.style['transform'] = 'scale(1.2)';
  }, []);

  const handleMouseLeave = useCallback((evn) => {
    evn.target.style['transform'] = 'scale(1)';
  }, []);

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      title={title}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        marginRight: 12,
        marginBottom: 12,
        boxShadow: `${color} 0px 0px ${checked ? 5 : 0}px`,
        transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s',
      }}
    >
      <div
        {...rectProps}
        style={{
          height: checked ? 20 : 0,
          width: checked ? 20 : 0,
          borderRadius: '50%',
          backgroundColor: '#fff',
          transform: 'scale(1)',
          transition: 'height 100ms ease 0s, width 100ms ease 0s',
          ...rectProps!.style,
        }}
      />
    </div>
  );
}
