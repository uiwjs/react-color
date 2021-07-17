/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import * as testUtils from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Swatch from '../packages/color-swatch/src';

it('Swatch', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Swatch
        colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
        color={hex}
        rectProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch');
    expect(tree.props.style).toMatchObject({
      display: 'flex',
      flexWrap: 'wrap',
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

it('Swatch colors', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Swatch
        colors={['#F44E3B', '#FE9200', { color: '#FCDC00', title: 'test title' }, { color: '#DBDF00' }]}
        color={hex}
        rectProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch');
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

it('Swatch colors', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#F44E3B');
    function Point(props: { color?: string; checked?: boolean }) {
      if (!props.checked) return null;
      return (
        <div
          style={{
            height: 5,
            width: 5,
            backgroundColor: 'red',
          }}
        />
      );
    }
    return (
      <Swatch
        colors={['#F44E3B', '#FE9200', { color: '#FCDC00', title: 'test title' }, { color: '#DBDF00' }]}
        color={hex}
        rectProps={{
          children: <Point />,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch');
    if (tree.children) {
      expect(tree.children.length).toEqual(4);
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object' && idx === 0) {
          expect(child.children?.length).toEqual(1);
        }
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Swatch colors = undefined', async () => {
  const MyComponent = () => {
    return <Swatch colors={undefined} color="#fff" />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch');
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

it('Swatch colors', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Swatch
        colors={['#F44E3B', '#FE9200', { color: '#FCDC00', title: 'test title' }, { color: '#DBDF00' }]}
        color={hex}
        onChange={(hsvColor) => {
          expect(hsvColor).toEqual({
            h: 6.162162162162162,
            s: 75.81967213114754,
            v: 95.68627450980392,
            a: 1,
          });
        }}
      />
    );
  };
  const { getByTitle } = render(<MyComponent />);
  fireEvent(
    getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Swatch rectRender', async () => {
  const handleChange = jest.fn((color) => color);
  const { getByTitle } = render(
    <Swatch
      colors={['#F44E3B', '#FE9200', { color: '#FCDC00', title: 'test title' }, { color: '#DBDF00' }]}
      color="#F44E3B"
      onChange={handleChange}
      rectRender={({ key, color, checked, onClick }) => (
        <div key={key} onClick={onClick} data-checked={checked} title={color}>
          {color}
        </div>
      )}
    />,
  );
  const elm = getByTitle('#F44E3B');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith({
    h: 6.162162162162162,
    s: 75.81967213114754,
    v: 95.68627450980392,
    a: 1,
  });
});

it('Swatch rectRender props', async () => {
  const { getByTitle } = render(
    <Swatch colors={undefined} color="#fff" addonBefore={<div title="before" />} addonAfter={<div title="test" />} />,
  );
  const elm = getByTitle('test');
  expect(elm).toHaveAttribute('title', 'test');
  const elmbefore = getByTitle('before');
  expect(elmbefore).toHaveAttribute('title', 'before');
});
