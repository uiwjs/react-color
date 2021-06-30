import React, { useState, useRef, useImperativeHandle } from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import { Pointer } from './Pointer';
import { calculateChange, preventDefaultMove, isTouch } from './utils';
import { useEffect } from 'react';
import { useCallback } from 'react';

export * from '@uiw/color-convert';

interface ColorSaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  hsva: HsvaColor;
  onChange: (newColor: HsvaColor) => void;
}

export default React.forwardRef<HTMLDivElement, ColorSaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', className, hsva, onChange, ...other } = props;
  const container = useRef<HTMLDivElement>(null);
  const hasTouched = useRef(false);
  const [isDragging, setDragging] = useState(false);

  useImperativeHandle(ref, () => container.current!);
  const containerStyle: React.CSSProperties = {
    width: 200,
    height: 200,
    position: 'relative',
    backgroundColor: `hsl(${hsva.h},100%, 50%)`,
  };

  // Prevent mobile browsers from handling mouse events (conflicting with touch ones).
  // If we detected a touch interaction before, we prefer reacting to touch events only.
  const isValid = (event: MouseEvent | TouchEvent): boolean => {
    if (hasTouched.current && !isTouch(event)) return false;
    if (!hasTouched.current) hasTouched.current = isTouch(event);
    return true;
  };

  const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
    preventDefaultMove(event);
    // If user moves the pointer outside of the window or iframe bounds and release it there,
    // `mouseup`/`touchend` won't be fired. In order to stop the picker from following the cursor
    // after the user has moved the mouse/finger back to the document, we check `event.buttons`
    // and `event.touches`. It allows us to detect that the user is just moving his pointer
    // without pressing it down
    const isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;

    if (isDown && container.current) {
      const rect = calculateChange(event as any, hsva, container.current!);
      onChange && onChange(rect);
    } else {
      setDragging(false);
    }
  }, []);

  const handleMoveEnd = useCallback(() => setDragging(false), []);

  const toggleDocumentEvents = useCallback((state: boolean) => {
    const toggleEvent = state ? window.addEventListener : window.removeEventListener;
    toggleEvent(hasTouched.current ? 'touchmove' : 'mousemove', handleMove);
    toggleEvent(hasTouched.current ? 'touchend' : 'mouseup', handleMoveEnd);
  }, []);

  useEffect(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      isDragging && toggleDocumentEvents(false);
    };
  }, [isDragging, toggleDocumentEvents]);

  const handleMoveStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    preventDefaultMove(event.nativeEvent);
    if (!isValid(event.nativeEvent)) return;

    const rect = calculateChange(event as any, hsva, container.current!);
    onChange && onChange(rect);
    setDragging(true);
  }, []);

  return (
    <div
      className={`${prefixCls} ${className || ''}`}
      style={containerStyle}
      ref={container}
      {...other}
      onMouseDown={handleMoveStart}
      onTouchStart={handleMoveStart}
    >
      <div
        style={{
          inset: 0,
          background: 'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
          position: 'absolute',
        }}
      >
        <div
          style={{
            inset: 0,
            background: 'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
            position: 'absolute',
          }}
        >
          <Pointer prefixCls={prefixCls} top={`${100 - hsva.v}%`} left={`${hsva.s}%`} color={hsvaToHslaString(hsva)} />
        </div>
      </div>
    </div>
  );
});
