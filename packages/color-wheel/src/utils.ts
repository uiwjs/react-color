import { HsvColor } from '@uiw/color-convert';
import { WheelProps } from './';

const TAU = Math.PI * 2;

/**
 * javascript's modulo operator doesn't produce positive numbers with negative input
 * https://www.geeksforgeeks.org/how-to-get-negative-result-using-modulo-operator-in-javascript/
 */
export const mod = (a: number, n: number) => ((a % n) + n) % n;

/** distance between points (x, y) and (0, 0) */
const dist = (x: number, y: number) => Math.sqrt(x * x + y * y);

/**
 * Get the point as the center of the wheel
 */
export function getWheelDimensions({ width = 0 }: Partial<WheelProps>) {
  const r = width / 2;
  return {
    width,
    radius: r,
    cx: r,
    cy: r,
  };
}

/**
 * Returns true if point (x, y) lands inside the wheel
 */
export function isInputInsideWheel(props: Partial<WheelProps>, x: number, y: number) {
  const { cx, cy, width } = getWheelDimensions(props);
  const r = width / 2;
  return dist(cx - x, cy - y) < r;
}

/**
 * Get the current handle position for a given color
 */
export function getWheelHandlePosition(props: Partial<WheelProps>, hsv: HsvColor) {
  const { cx, cy } = getWheelDimensions(props);
  const handleRange = getHandleRange(props);
  const handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  const handleDist = (hsv.s / 100) * handleRange;
  const direction = props.direction === 'clockwise' ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction,
  };
}

/**
 * Get Range
 */
export function getHandleRange({ width = 0 }: Partial<WheelProps>) {
  return width / 2;
}

/**
 * Translate an angle according to wheelAngle and wheelDirection
 */
export function translateWheelAngle(props: Partial<WheelProps>, angle: number, invert?: boolean) {
  const wheelAngle = props.angle || 0;
  const direction = props.direction;
  // inverted and clockwisee
  if (invert && direction === 'clockwise') angle = wheelAngle + angle;
  // clockwise (input handling)
  else if (direction === 'clockwise') angle = 360 - wheelAngle + angle;
  // inverted and anticlockwise
  else if (invert && direction === 'anticlockwise') angle = wheelAngle + 180 - angle;
  // anticlockwise (input handling)
  else if (direction === 'anticlockwise') angle = wheelAngle - angle;
  return mod(angle, 360);
}

/**
 * Get the current wheel value from user input
 * @param props - wheel props
 * @param x - global input x position
 * @param y - global input y position
 */
export function getWheelValueFromInput(props: Partial<WheelProps>, x: number, y: number) {
  const { cx, cy } = getWheelDimensions(props);
  const handleRange = getHandleRange(props);
  x = cx - x;
  y = cy - y;
  // Calculate the hue by converting the angle to radians
  const hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU));
  // Find the point's distance from the center of the wheel
  // This is used to show the saturation level
  const handleDist = Math.min(dist(x, y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round((100 / handleRange) * handleDist),
  };
}
