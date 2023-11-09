import React, { CSSProperties, useCallback } from 'react';
import { SwatchRectRenderProps, SwatchProps } from '@uiw/react-color-swatch';
import { useRef } from 'react';

interface PointProps extends SwatchRectRenderProps {
  rectProps?: SwatchProps['rectProps'];
}

const defalutStyle: CSSProperties = {
  marginRight: 0,
  marginBottom: 0,
  borderRadius: 0,
  boxSizing: 'border-box',
  height: 25,
  width: 25,
};

export default function Point({ style, title, checked, color, onClick, rectProps }: PointProps) {
  const btn = useRef<HTMLDivElement>(null);
  const handleMouseEnter = useCallback(() => {
    btn.current!.style['zIndex'] = '2';
    btn.current!.style['outline'] = '#fff solid 2px';
    btn.current!.style['boxShadow'] = 'rgb(0 0 0 / 25%) 0 0 5px 2px';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!checked) {
      btn.current!.style['zIndex'] = '0';
      btn.current!.style['outline'] = 'initial';
      btn.current!.style['boxShadow'] = 'initial';
    }
  }, [checked]);

  const rectStyle = checked
    ? {
        zIndex: 1,
        outline: '#fff solid 2px',
        boxShadow: 'rgb(0 0 0 / 25%) 0 0 5px 2px',
      }
    : {
        zIndex: 0,
      };

  return (
    <div
      ref={btn}
      title={title}
      {...rectProps}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        marginRight: 0,
        marginBottom: 0,
        borderRadius: 0,
        boxSizing: 'border-box',
        height: 25,
        width: 25,
        ...defalutStyle,
        ...rectStyle,
        ...rectProps?.style,
      }}
    ></div>
  );
}
