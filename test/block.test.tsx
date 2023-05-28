/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Block from '../packages/color-block/src';

it('Block', async () => {
  const MyComponent = () => {
    return <Block />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-block');
    expect(tree.props.style).toMatchObject({
      width: 170,
      borderRadius: 6,
      background: 'var(--block-background-color)',
      boxShadow: 'var(--block-box-shadow)',
      position: 'relative',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(4);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Block Click onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  render(<Block onChange={handleChange} />);
  const elm = screen.getByTitle('#D9E3F0');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#d9e3f0');
});

it('Block color = hexColor', async () => {
  render(<Block color="#93BEE6" />);
  const elm = screen.getByTitle('#93bee6');
  expect(elm.innerHTML).toEqual('#93BEE6');
});

it('Block Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Block color="#93BEE6" onChange={handleChange} />);
  const input = firstChild?.lastChild?.firstChild;
  fireEvent.change(input!, { target: { value: 'eee' } });
  expect(handleChange).toHaveReturnedWith('#eeeeee');
});

it('Block Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Block color="#93BEE6" onChange={handleChange} />);
  const input = firstChild?.lastChild?.firstChild;
  fireEvent.change(input!, { target: { value: '' } });
  expect((input as any).value).toEqual('');
  expect(handleChange).not.toHaveReturned();
  fireEvent.blur(input!);
  expect((input as any).value).toEqual('#93BEE6');
});
