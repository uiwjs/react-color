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
      expect(tree.children.length).toEqual(37);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Compact onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#4d4d4d');
        }}
      />
    );
  };
  render(<MyComponent />);
  fireEvent(
    screen.getByTitle('#4D4D4D'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Compact hex color onChange', async () => {
  render(
    <Compact
      color="#F44E3B"
      onChange={(color, evn) => {
        expect(color.hex).toEqual('#f44e3b');
      }}
    />,
  );
  fireEvent(
    screen.getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Compact color === undefined', async () => {
  render(<Compact onChange={(color) => expect(color.hex).toEqual('#f44e3b')} />);
  fireEvent(
    screen.getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});
