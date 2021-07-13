/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Compact from '../packages/color-compact/src';

it('Compact', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Compact
        style={{
          boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
        }}
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsv })}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-compact');
    expect(tree.props.style).toMatchObject({
      background: '#f6f6f6',
      borderRadius: 3,
      display: 'flex',
      width: 240,
      flexWrap: 'wrap',
      paddingTop: 5,
      paddingLeft: 5,
      boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(2);
      tree.children.forEach((child, idx) => {
        if (idx === 0 && typeof child === 'object') {
          expect(child.children?.length).toEqual(36);
        }
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Compact hex color onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Compact color="#e27300" onChange={handleChange} />);
  const elm = screen.getByTitle('#4D4D4D');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#4d4d4d');
});

it('Compact color === undefined', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Compact onChange={handleChange} />);
  const elm = screen.getByTitle('#4D4D4D');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#4d4d4d');
});

it('Compact Input R onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#e27300" onChange={handleChange} />);
  const input = getByText('R').previousSibling;
  fireEvent.change(input!, { target: { value: '8888' } });
  expect(handleChange).toHaveReturnedWith('#ff7300');
});

it('Compact Input G onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#e27300" onChange={handleChange} />);
  const input = getByText('G').previousSibling;
  expect((input as any).value).toEqual('115');
  fireEvent.change(input!, { target: { value: '8888' } });
  expect(handleChange).toHaveReturnedWith('#e2ff00');
});

it('Compact Input B onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#e273ff" onChange={handleChange} />);
  const input = getByText('B').previousSibling;
  expect((input as any).value).toEqual('255');
  fireEvent.change(input!, { target: { value: '8888' } });
  expect(handleChange).toHaveReturnedWith('#e273ff');
});

it('Compact Input B = -111 onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#e27300" onChange={handleChange} />);
  const input = getByText('B').previousSibling;
  expect((input as any).value).toEqual('0');
  fireEvent.change(input!, { target: { value: '-111' } });
  expect(handleChange).toHaveReturnedWith('#e27300');
});

it('Compact Input hex onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#ff7300" onChange={handleChange} />);
  const input = getByText('R').parentElement?.parentElement?.previousSibling?.firstChild;
  fireEvent.change(input!, { target: { value: 'eee' } });
  expect(handleChange).toHaveReturnedWith('#eeeeee');
});

it('Compact Input value === "" onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByText } = render(<Compact color="#ff7300" onChange={handleChange} />);
  const input = getByText('R').parentElement?.parentElement?.previousSibling?.firstChild;
  fireEvent.change(input!, { target: { value: '' } });
  expect(handleChange).not.toHaveReturned();
});
