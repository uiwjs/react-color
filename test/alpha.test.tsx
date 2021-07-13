/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alpha, { BACKGROUND_IMG } from '../packages/color-alpha/src';

class FakeMouseEvent extends MouseEvent {
  constructor(type: any, values: any = {}) {
    super(type, { buttons: 1, bubbles: true, ...values });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

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
});

it('Alpha direction = vertical & onChange', async () => {
  const handleChange = jest.fn((newAlpha) => newAlpha);
  const { getByTitle } = render(
    <Alpha
      innerProps={{
        title: 'test',
      }}
      direction="vertical"
      onChange={handleChange}
      hsva={{ h: 0, s: 0, v: 68, a: 1 }}
    />,
  );
  const elm = getByTitle('test');
  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 1 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 10, pageY: 1 }));
  expect(handleChange).toHaveReturnedWith({ a: 1, h: 0, s: 0, v: 68 });
});
