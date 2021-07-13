/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, waitFor, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Material from '../packages/color-material/src';

it('Material', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Material
        color={hsva}
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
    expect(tree.props.className).toEqual('w-color-material');
    expect(tree.props.style).toMatchObject({
      width: 98,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(2);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Material hex onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#e27300" onChange={handleChange} />);
  const input = screen.getByText('Hex').previousSibling;
  expect((input as any).value).toEqual('E27300');
  fireEvent.change(input!, { target: { value: '333333' } });
  expect(handleChange).toHaveReturnedWith('#333333');
});

it('Material hex.length > 6 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#e27300" onChange={handleChange} />);
  const input = screen.getByText('Hex').previousSibling;
  expect((input as any).value).toEqual('E27300');
  fireEvent.change(input!, { target: { value: 'd1021axxxxx' } });
  expect((input as any).value).toEqual('d1021axxxxx');
  fireEvent.blur(input!);
  expect((input as any).value).toEqual('E27300');
  expect(handleChange).toHaveReturnedWith('#d1021a');
});

it('Material hex onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#e27300" onChange={handleChange} />);
  const input = screen.getByText('Hex').previousSibling;
  expect((input as any).value).toEqual('E27300');
  fireEvent.change(input!, { target: { value: '#333333' } });
  expect((input as any).value).toEqual('#333333');
  fireEvent.blur(input!);
  expect((input as any).value).toEqual('E27300');
});

it('Material color === "" onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="" onChange={handleChange} />);
  const input = screen.getByText('Hex').previousSibling;
  expect((input as any).value).toEqual('');
  fireEvent.change(input!, { target: { value: 'f5a623' } });
  expect(handleChange).toHaveReturnedWith('#f5a623');
});

it('Material R onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#333" onChange={handleChange} />);
  const input = screen.getByText('R').previousSibling;
  expect((input as any).value).toEqual('51');
  fireEvent.change(input!, { target: { value: '66' } });
  expect(handleChange).toHaveReturnedWith('#423333');
});

it('Material G onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#333" onChange={handleChange} />);
  const input = screen.getByText('G').previousSibling;
  expect((input as any).value).toEqual('51');
  fireEvent.change(input!, { target: { value: '66' } });
  expect(handleChange).toHaveReturnedWith('#334233');
});

it('Material B onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#333" onChange={handleChange} />);
  const input = screen.getByText('B').previousSibling;
  expect((input as any).value).toEqual('51');
  fireEvent.change(input!, { target: { value: '6666' } });
  expect(handleChange).toHaveReturnedWith('#3333ff');
});

it('Material B = -22 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#333" onChange={handleChange} />);
  const input = screen.getByText('B').previousSibling;
  expect((input as any).value).toEqual('51');
  fireEvent.change(input!, { target: { value: '-22' } });
  expect(handleChange).toHaveReturnedWith('#333300');
});

it('Material B = 8888 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Material color="#93BEE6" onChange={handleChange} />);
  const input = screen.getByText('B').previousSibling;
  expect((input as any).value).toEqual('230');
  fireEvent.change(input!, { target: { value: '8888' } });
  expect(handleChange).toHaveReturnedWith('#93beff');
});
