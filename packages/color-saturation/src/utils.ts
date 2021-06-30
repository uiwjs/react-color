import {
  HslColor,
  HslaColor,
  HsvaColor,
  hsvaToHslString,
} from '@uiw/color-convert';

export interface Interaction {
  left: number;
  top: number;
}

export const calculateChange = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent> &
    React.TouchEvent<HTMLDivElement>,
  hsva: HsvaColor,
  container: HTMLDivElement,
): HsvaColor => {
  const { width: containerWidth, height: containerHeight } =
    container.getBoundingClientRect();
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
