import React, { useRef, useState, useCallback, useEffect } from 'react';
import { isTouch, preventDefaultMove, getRelativePosition, Interaction, useEventCallback } from './utils';

export * from './utils';

export interface InteractiveProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  onMove?: (interaction: Interaction, event: MouseEvent | TouchEvent) => void;
  onDown?: (offset: Interaction, event: MouseEvent | TouchEvent) => void;
}

const Interactive = React.forwardRef<HTMLDivElement, InteractiveProps>((props, ref) => {
  const { prefixCls = 'w-color-interactive', className, onMove, onDown, ...reset } = props;
  const container = useRef<HTMLDivElement>(null);
  const hasTouched = useRef(false);
  const [isDragging, setDragging] = useState(false);
  const onMoveCallback = useEventCallback<Interaction, MouseEvent | TouchEvent>(onMove);
  const onKeyCallback = useEventCallback<Interaction, MouseEvent | TouchEvent>(onDown);

  // Prevent mobile browsers from handling mouse events (conflicting with touch ones).
  // If we detected a touch interaction before, we prefer reacting to touch events only.
  const isValid = (event: MouseEvent | TouchEvent): boolean => {
    if (hasTouched.current && !isTouch(event)) return false;
    hasTouched.current = isTouch(event);
    return true;
  };

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      preventDefaultMove(event);
      // If user moves the pointer outside of the window or iframe bounds and release it there,
      // `mouseup`/`touchend` won't be fired. In order to stop the picker from following the cursor
      // after the user has moved the mouse/finger back to the document, we check `event.buttons`
      // and `event.touches`. It allows us to detect that the user is just moving his pointer
      // without pressing it down
      const isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;
      if (isDown && container.current) {
        onMoveCallback && onMoveCallback(getRelativePosition(container.current!, event), event);
      } else {
        setDragging(false);
      }
    },
    [onMoveCallback],
  );

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

  const handleMoveStart = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      preventDefaultMove(event.nativeEvent);
      if (!isValid(event.nativeEvent)) return;
      onKeyCallback && onKeyCallback(getRelativePosition(container.current!, event.nativeEvent), event.nativeEvent);
      setDragging(true);
    },
    [onKeyCallback],
  );

  return (
    <div
      {...reset}
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      style={{
        ...reset.style,
        touchAction: 'none',
      }}
      ref={container}
      tabIndex={0}
      onMouseDown={handleMoveStart}
      onTouchStart={handleMoveStart}
    />
  );
});

Interactive.displayName = 'Interactive';

export default Interactive;
