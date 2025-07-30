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
      if (!container.current) return;

      const isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;
      if (!isDown) {
        setDragging(false);
        return;
      }

      onMoveCallback?.(getRelativePosition(container.current, event), event);
    },
    [onMoveCallback],
  );

  const handleMoveEnd = useCallback(() => setDragging(false), []);
  const toggleDocumentEvents = useCallback(
    (state: boolean) => {
      if (state) {
        window.addEventListener(hasTouched.current ? 'touchmove' : 'mousemove', handleMove);
        window.addEventListener(hasTouched.current ? 'touchend' : 'mouseup', handleMoveEnd);
      } else {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleMoveEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleMoveEnd);
      }
    },
    [handleMove, handleMoveEnd],
  );

  useEffect(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      toggleDocumentEvents(false);
    };
  }, [isDragging, handleMove, handleMoveEnd, toggleDocumentEvents]);

  const handleMoveStart = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      const activeEl = document.activeElement as HTMLElement | null;
      activeEl?.blur();
      preventDefaultMove(event.nativeEvent);
      if (!isValid(event.nativeEvent)) return;
      if (!container.current) return;
      onKeyCallback?.(getRelativePosition(container.current, event.nativeEvent), event.nativeEvent);
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
