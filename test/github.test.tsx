/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Github from '../packages/color-github/src';

it('Github', async () => {
  const MyComponent = () => {
    return <Github />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch w-color-github');
    expect(tree.props.style).toMatchObject({
      width: 200,
      borderRadius: 4,
      background: '#fff',
      boxShadow: 'rgb(0 0 0 / 15%) 0px 3px 12px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      position: 'relative',
      padding: 5,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(18);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Github mouseOut', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const MyComponent = () => {
    return <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />;
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('#F44E3B');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#f44e3b');
});

it('Github mouseEnter/mouseLeave checked', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />,
  );
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseEnter(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  fireEvent.mouseLeave(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  expect(handleChange).not.toHaveReturned();
});

it('Github mouseEnter/mouseLeave color = undefined', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(<Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} onChange={handleChange} />);
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseEnter(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  fireEvent.mouseLeave(elm);
  expect(elm.style.outline).toEqual('initial');
  expect(handleChange).not.toHaveReturned();
});
