/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as testUtils from 'react-dom/test-utils';
import Circle from '../packages/color-circle/src';

it('Circle', async () => {
  const MyComponent = () => {
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch w-color-circle');
    expect(tree.props.style).toMatchObject({
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
    });
    // expect(tree.props.style.background).toEqual(`url(${BACKGROUND_IMG}) left center`);
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

it('Circle colors checked', async () => {
  const handleChange = jest.fn((color) => {
    return color;
  });
  const MyComponent = () => {
    // const [hex, setHex] = useState('#fff');
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />;
  };
  const { getByTitle } = render(<MyComponent />);
  fireEvent(
    getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

  expect(handleChange).toHaveReturnedWith({
    rgb: { r: 244, g: 78, b: 59 },
    hsl: { h: 6.162162162162162, s: 89.37198067632849, l: 59.41176470588235 },
    hsv: { h: 6.162162162162162, s: 75.81967213114754, v: 95.68627450980392 },
    rgba: { r: 244, g: 78, b: 59, a: 1 },
    hsla: {
      h: 6.162162162162162,
      s: 89.37198067632849,
      l: 59.41176470588235,
      a: 1,
    },
    hsva: {
      h: 6.162162162162162,
      s: 75.81967213114754,
      v: 95.68627450980392,
      a: 1,
    },
    xy: {
      bri: 0.06811140344707436,
      x: 0.40822033351750947,
      y: 0.24997641962334327,
    },
    hex: '#f44e3b',
    hexa: '#f44e3bff',
  });
});

it('Circle colors === undefind', async () => {
  const MyComponent = () => {
    return <Circle />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.children).toBeNull();
  }
});

it('Circle mouseEnter', async () => {
  const MyComponent = () => {
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" />;
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('#F44E3B');
  testUtils.act(() => {
    testUtils.Simulate.mouseEnter(elm);
    expect(elm.style.transform).toEqual('scale(1.2)');
  });
});

it('Circle mouseOut', async () => {
  const MyComponent = () => {
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" />;
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('#F44E3B');
  testUtils.act(() => {
    testUtils.Simulate.mouseOut(elm);
    expect(elm.style.transform).toEqual('scale(1)');
  });
});

it('Circle mouseEnter/mouseLeave', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />,
  );
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseEnter(elm);
  expect(elm.style.transform).toEqual('scale(1.2)');
  fireEvent.mouseLeave(elm);
  expect(elm.style.transform).toEqual('scale(1)');
  expect(handleChange).not.toHaveReturned();
});

it('Circle mouseOut', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />,
  );
  const elm = getByTitle('#F44E3B');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#f44e3b');
});
