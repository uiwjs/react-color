/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alpha, { BACKGROUND_IMG } from '../packages/color-alpha/src';

it('Alpha', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Alpha
        hsva={hsva}
        onChange={(newAlpha) => {
          setHsva({ ...hsva, ...newAlpha });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-alpha w-color-alpha-horizontal');
    expect(tree.props.style).toMatchObject({
      width: 320,
      height: 16,
      borderRadius: 0,
      position: 'relative',
      backgroundColor: '#fff',
    });
    expect(tree.props.style.background).toEqual(`url(${BACKGROUND_IMG}) left center`);
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

it('Alpha direction = vertical', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return <Alpha hsva={hsva} direction="vertical" />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-alpha w-color-alpha-vertical');
  }
});

it('Alpha mouseDown', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Alpha
        innerProps={{
          title: 'test',
        }}
        hsva={hsva}
        onChange={(newAlpha) => {
          expect(Object.keys(newAlpha)).toEqual(expect.arrayContaining(['h', 's', 'v', 'a']));
          setHsva({ ...hsva, ...newAlpha });
        }}
      />
    );
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('test');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
  // fireEvent.mouseMove(getByTitle('test'), { clientX: 24 });
});

it('Alpha direction = vertical & onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Alpha
        innerProps={{
          title: 'test',
        }}
        direction="vertical"
        hsva={hsva}
        onChange={(newAlpha) => {
          expect(Object.keys(newAlpha)).toEqual(expect.arrayContaining(['h', 's', 'v', 'a']));
          setHsva({ ...hsva, ...newAlpha });
        }}
      />
    );
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('test');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
});
