/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { hexToHsva, hsvaToHex } from '@uiw/color-convert';
import {
  getWheelDimensions,
  getHandleRange,
  getWheelValueFromInput,
  isInputInsideWheel,
  mod,
  getWheelHandlePosition,
  translateWheelAngle,
} from '../packages/color-wheel/src/utils';
import Wheel from '../packages/color-wheel/src';

class FakeMouseEvent extends MouseEvent {
  constructor(type: any, values: any = {}) {
    super(type, { buttons: 1, bubbles: true, ...values });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

it('Wheel mousedown onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const color = '#ff7300';
  const hsva = hexToHsva(color);
  const {
    container: { firstChild },
  } = render(<Wheel color={color} onChange={handleChange} />);
  fireEvent(firstChild!, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 1 }));
  const result = getWheelValueFromInput({ width: 200, direction: 'anticlockwise', angle: 180 }, 20, 1);
  expect(handleChange).toHaveReturnedWith(hsvaToHex({ ...hsva, ...result }));
});

it('Wheel color=hsvaColor ', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const hsva = { h: 209, s: 36, v: 90, a: 1 };
  const {
    container: { firstChild },
  } = render(<Wheel color={hsva} onChange={handleChange} />);
  fireEvent(firstChild!, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 1 }));
  const result = getWheelValueFromInput({ width: 200, direction: 'anticlockwise', angle: 180 }, 20, 1);
  expect(handleChange).toHaveReturnedWith(hsvaToHex({ ...hsva, ...result }));
});

it('Wheel mousedown onChange 2', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Wheel color={undefined} onChange={handleChange} />);
  fireEvent(firstChild!, new FakeMouseEvent('mousedown', { pageX: 30, pageY: 33 }));
  expect(handleChange).toHaveReturnedWith('#000000');
});

it('Wheel direction="clockwise" onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Wheel direction="clockwise" color={undefined} onChange={handleChange} />);
  fireEvent(firstChild!, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 1 }));
  expect(handleChange).toHaveReturnedWith('#000000');
});

it('Wheel direction and angle should affect pointer position', () => {
  const hsv = { h: 60, s: 100, v: 100, a: 1 };
  const {
    container: { firstChild },
    container,
  } = render(<Wheel color={hsv} direction="clockwise" angle={30} />);
  expect(firstChild).toBeTruthy();
  const pointer = container.querySelector('.w-color-wheel-pointer') as HTMLDivElement;
  const { x, y } = getWheelHandlePosition({ width: 200, direction: 'clockwise', angle: 30 }, hsv);
  expect(pointer.style.transform).toContain(`translate(${x}px, ${y}px)`);
});

it('Wheel direction and angle should affect onChange hue', async () => {
  const handleChange = jest.fn();
  const wheelProps = { width: 200, direction: 'clockwise' as const, angle: 30 };
  const {
    container: { firstChild },
  } = render(<Wheel color={{ h: 200, s: 20, v: 100, a: 1 }} {...wheelProps} onChange={handleChange} />);
  fireEvent(firstChild!, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 1 }));
  const expected = getWheelValueFromInput(wheelProps, 20, 1).h;
  expect(handleChange).toHaveBeenCalled();
  expect(handleChange.mock.calls[0][0].hsva.h).toEqual(expected);
});

it('Wheel background should rotate with angle in the same coordinate system', () => {
  const {
    container: { firstChild },
  } = render(<Wheel color={{ h: 0, s: 100, v: 100, a: 1 }} angle={30} />);
  expect(firstChild).toBeTruthy();
  const background = (firstChild as HTMLDivElement).children[1] as HTMLDivElement;
  expect(background.style.transform).toBe('rotateZ(60deg)');
});

it('getWheelDimensions', () => {
  expect(getWheelDimensions({ width: 200 })).toEqual({
    cx: 100,
    cy: 100,
    radius: 100,
    width: 200,
  });
  expect(getWheelDimensions({ width: 160 })).toEqual({
    cx: 80,
    cy: 80,
    radius: 80,
    width: 160,
  });
  expect(getWheelDimensions({})).toEqual({
    cx: 0,
    cy: 0,
    radius: 0,
    width: 0,
  });
});

it('isInputInsideWheel', () => {
  expect(isInputInsideWheel({ width: 200 }, 10, 10)).toBeFalsy();
  expect(isInputInsideWheel({ width: 200 }, 100, 10)).toBeTruthy();
  expect(isInputInsideWheel({ width: 200 }, 1, 100)).toBeTruthy();
  expect(isInputInsideWheel({ width: 200 }, 0, 100)).toBeFalsy();
});

it('getHandleRange', () => {
  expect(getHandleRange({ width: 200 })).toEqual(100);
  expect(getHandleRange({})).toEqual(0);
});

it('translateWheelAngle', () => {
  expect(translateWheelAngle({ angle: 180, direction: 'clockwise' }, 10, true)).toEqual(190);
  expect(translateWheelAngle({ angle: 180, direction: 'anticlockwise' }, 10, true)).toEqual(350);
  expect(translateWheelAngle({ angle: 180, direction: 'clockwise' }, 10, false)).toEqual(190);
  expect(translateWheelAngle({ angle: 180, direction: 'anticlockwise' }, 10, false)).toEqual(170);
});

it('getWheelHandlePosition', () => {
  expect(getWheelHandlePosition({ width: 200 }, { h: 60, s: 100, v: 66.66666666666666 })).toEqual({
    x: 49.99999999999996,
    y: 13.397459621556152,
  });
  expect(getWheelHandlePosition({ width: 200, direction: 'clockwise' }, { h: 60, s: 100, v: 66.66666666666666 })).toEqual({
    x: 150.00000000000006,
    y: 186.60254037844385,
  });
});

it('getWheelValueFromInput', () => {
  expect(getWheelValueFromInput({ width: 200 }, 10, 10)).toEqual({
    h: 225,
    s: 100,
  });
  expect(getWheelValueFromInput({ width: 200, direction: 'clockwise' }, 10, 10)).toEqual({
    h: 225,
    s: 100,
  });
});

it('mod', () => {
  /** https://realpython.com/python-modulo-operator/ */
  expect(mod(15, 4)).toEqual(3);
  expect(mod(17, 12)).toEqual(5);
  expect(mod(240, 13)).toEqual(6);
  expect(mod(10, 16)).toEqual(10);
  expect(mod(12.5, 5.5)).toEqual(1.5);
  expect(mod(17.0, 12.0)).toEqual(5);
  expect(mod(13.3, 1.1)).toEqual(0.09999999999999964);
  expect(mod(13.3, 1.1)).toEqual(0.09999999999999964);
  expect(mod(22, 0)).toBeNaN();

  expect(mod(21, 4)).toEqual(1);
  expect(mod(-21, 4)).toEqual(3);
  expect(mod(8, -3)).toEqual(-1);
  expect(mod(-33, 5)).toEqual(2);
  expect(mod(-13, 64)).toEqual(51);
});
