import { HsvaColor } from '@uiw/color-convert';

export interface Interaction {
  left: number;
  top: number;
}

// Check if an event was triggered by touch
export const isTouch = (event: MouseEvent | TouchEvent): event is TouchEvent => 'touches' in event;

// Browsers introduced an intervention, making touch events passive by default.
// This workaround removes `preventDefault` call from the touch handlers.
// https://github.com/facebook/react/issues/19651
export const preventDefaultMove = (event: MouseEvent | TouchEvent): void => {
  !isTouch(event) && event.preventDefault();
};

export const calculateChange = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent> & React.TouchEvent<HTMLDivElement>,
  hsva: HsvaColor,
  container: HTMLDivElement,
): HsvaColor => {
  const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  let left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  let top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  const saturation = left / containerWidth;
  const bright = 1 - top / containerHeight;

  return {
    h: hsva.h,
    s: saturation * 100,
    v: bright * 100,
    a: hsva.a,
    // source: 'hsv',
  };
};
