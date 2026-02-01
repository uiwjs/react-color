/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Saturation from '../packages/color-saturation/src';

it('Saturation', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Saturation
        hsva={hsva}
        onChange={(newColor) => {
          setHsva({ ...hsva, ...newColor, a: hsva.a });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-interactive w-color-saturation');
    expect(tree.props.style).toEqual({
      width: 200,
      height: 200,
      borderRadius: 0,
      cursor: 'crosshair',
      inset: 0,
      outline: 'none',
      position: 'relative',
      touchAction: 'none',
      backgroundImage: 'linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(0, 100%, 50%))',
    });
  }
});

it('Saturation onChange', async () => {
  const handleChange = jest.fn((color) => Object.keys(color));
  render(<Saturation title="custom-element" hsva={{ h: 0, s: 0, v: 68, a: 1 }} onChange={handleChange} />);
  const elm = screen.getByTitle('custom-element');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
  expect(handleChange).toHaveReturnedWith(['h', 's', 'v', 'a']);
});

it('Saturation focus behavior after interaction', () => {
  const handleChange = jest.fn((color) => color);

  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 200, s: 50, v: 80, a: 1 });
    return (
      <Saturation
        title="focus-test-element"
        hsva={hsva}
        onChange={(newColor) => {
          setHsva({ ...hsva, ...newColor, a: hsva.a });
          handleChange(newColor);
        }}
      />
    );
  };

  render(<MyComponent />);
  const elm = screen.getByTitle('focus-test-element');

  // Mock getBoundingClientRect for proper drag simulation
  elm.getBoundingClientRect = jest.fn(() => ({
    left: 0,
    top: 0,
    width: 200,
    height: 200,
    right: 200,
    bottom: 200,
  })) as any;

  // Simulate mouse down which should trigger handleChange and focus
  fireEvent.mouseDown(elm, { clientX: 100, clientY: 100, buttons: 1 });

  // Verify that change was triggered
  expect(handleChange).toHaveBeenCalled();

  // Verify that the element maintains its ability to be focused
  elm.focus();
  expect(elm).toHaveAttribute('tabindex', '0');
});
