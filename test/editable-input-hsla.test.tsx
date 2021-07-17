/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditableInputHSLA from '../packages/color-editable-input-hsla/src';
import { hsvaToHex, hexToHsva, HsvaColor } from '../packages/color-convert/src';

it('EditableInputHSLA', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputHSLA
        hsva={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input-rgba w-color-editable-input-hsla');
    expect(tree.props.style).toMatchObject({
      fontSize: 11,
      display: 'flex',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(4);
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('EditableInputHSLA Input H onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('H').previousSibling;
  fireEvent.change(input!, { target: { value: '12' } });
  expect(handleChange).toHaveReturnedWith('#e6a393');
  fireEvent.change(input!, { target: { value: '3000' } });
  expect(handleChange).toHaveReturnedWith('#e69393');
  fireEvent.change(input!, { target: { value: '-300' } });
  expect(handleChange).toHaveReturnedWith('#e69393');
});

it('EditableInputHSLA Input S onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('S').previousSibling;
  fireEvent.change(input!, { target: { value: '12' } });
  expect(handleChange).toHaveReturnedWith('#b4bcc4');
});

it('EditableInputHSLA Input S > 100 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('S').previousSibling;
  fireEvent.change(input!, { target: { value: '122' } });
  expect(handleChange).toHaveReturnedWith('#79beff');
});

it('EditableInputHSLA Input S < 0 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('S').previousSibling;
  fireEvent.change(input!, { target: { value: '-122' } });
  expect(handleChange).toHaveReturnedWith('#bcbcbc');
});

it('EditableInputHSLA Input L onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('L').previousSibling;
  fireEvent.change(input!, { target: { value: '12' } });
  expect(handleChange).toHaveReturnedWith('#0c1f32');
});

it('EditableInputHSLA Input L > 100 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('L').previousSibling;
  fireEvent.change(input!, { target: { value: '122' } });
  expect(handleChange).toHaveReturnedWith('#ffffff');
});

it('EditableInputHSLA Input L < 0 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('L').previousSibling;
  fireEvent.change(input!, { target: { value: '-122' } });
  expect(handleChange).toHaveReturnedWith('#000000');
});

it('EditableInputHSLA Input A onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('A').previousSibling;
  fireEvent.change(input!, { target: { value: '0.34' } });
  expect(handleChange).toHaveReturnedWith('#93bee6');
});

it('EditableInputHSLA Input A > 1 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('A').previousSibling;
  fireEvent.change(input!, { target: { value: '12' } });
  expect(handleChange).toHaveReturnedWith('#93bee6');
});

it('EditableInputHSLA Input A < 0 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={{ h: 209, s: 36, v: 90, a: 1 }} onChange={handleChange} />);
  const input = getByText('A').previousSibling;
  fireEvent.change(input!, { target: { value: '-12' } });
  expect(handleChange).toHaveReturnedWith('#93bee6');
});

it('EditableInputHSLA Input A < 0 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<EditableInputHSLA hsva={undefined as any} onChange={handleChange} />);
  const input = getByText('A').previousSibling;
  fireEvent.change(input!, { target: { value: '-12' } });
  expect(handleChange).toHaveReturnedWith('#000000');
});
