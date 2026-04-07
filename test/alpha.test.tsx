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
      backgroundColor: 'var(--alpha-background-color)',
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
    expect(tree.children?.[0]).toMatchObject({
      type: 'div',
      props: {
        style: expect.objectContaining({
          background: 'linear-gradient(to bottom, hsla(0, 0%, 68%, 1) 0%, rgba(244, 67, 54, 0) 100%)',
        }),
      },
    });
  }
});

it('Alpha reverse renders opposite horizontal gradient and pointer position', async () => {
  const component = TestRenderer.create(<Alpha hsva={{ h: 0, s: 0, v: 68, a: 0.25 }} reverse />);
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.children?.[0]).toMatchObject({
      type: 'div',
      props: {
        style: expect.objectContaining({
          background: 'linear-gradient(to right, hsla(0, 0%, 68%, 1) 0%, rgba(244, 67, 54, 0) 100%)',
        }),
      },
    });
    expect(tree.children?.[1]).toMatchObject({
      type: 'div',
      children: expect.arrayContaining([
        expect.objectContaining({
          props: expect.objectContaining({
            style: expect.objectContaining({
              left: '75%',
            }),
          }),
        }),
      ]),
    });
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
  jest.spyOn(elm, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 100,
    right: 20,
    width: 20,
    height: 100,
    toJSON: () => ({}),
  });
  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 10, pageY: 1 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 10, pageY: 1 }));
  expect(handleChange).toHaveBeenLastCalledWith({ a: 0.99, h: 0, s: 0, v: 68 }, expect.objectContaining({ top: 0.01 }));
});

it('Alpha direction = vertical maps top to 1 and bottom to 0', async () => {
  const handleChange = jest.fn((newAlpha) => newAlpha);
  const { getByTitle } = render(
    <Alpha
      innerProps={{
        title: 'vertical-alpha',
      }}
      direction="vertical"
      onChange={handleChange}
      hsva={{ h: 0, s: 0, v: 68, a: 0.5 }}
    />,
  );

  const elm = getByTitle('vertical-alpha');
  jest.spyOn(elm, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 100,
    right: 20,
    width: 20,
    height: 100,
    toJSON: () => ({}),
  });

  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 10, pageY: 0 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 10, pageY: 100 }));

  expect(handleChange).toHaveBeenNthCalledWith(1, { a: 1, h: 0, s: 0, v: 68 }, expect.objectContaining({ top: 0 }));
  expect(handleChange).toHaveBeenNthCalledWith(2, { a: 0, h: 0, s: 0, v: 68 }, expect.objectContaining({ top: 1 }));
});

it('Alpha reverse maps horizontal left to 1 and right to 0', async () => {
  const handleChange = jest.fn((newAlpha) => newAlpha);
  const { getByTitle } = render(
    <Alpha
      innerProps={{
        title: 'reverse-horizontal-alpha',
      }}
      reverse
      onChange={handleChange}
      hsva={{ h: 0, s: 0, v: 68, a: 0.5 }}
    />,
  );

  const elm = getByTitle('reverse-horizontal-alpha');
  jest.spyOn(elm, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 20,
    right: 100,
    width: 100,
    height: 20,
    toJSON: () => ({}),
  });

  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 0, pageY: 10 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 100, pageY: 10 }));

  expect(handleChange).toHaveBeenNthCalledWith(1, { a: 1, h: 0, s: 0, v: 68 }, expect.objectContaining({ left: 0 }));
  expect(handleChange).toHaveBeenNthCalledWith(2, { a: 0, h: 0, s: 0, v: 68 }, expect.objectContaining({ left: 1 }));
});

it('Alpha reverse maps vertical top to 0 and bottom to 1', async () => {
  const handleChange = jest.fn((newAlpha) => newAlpha);
  const { getByTitle } = render(
    <Alpha
      innerProps={{
        title: 'reverse-vertical-alpha',
      }}
      direction="vertical"
      reverse
      onChange={handleChange}
      hsva={{ h: 0, s: 0, v: 68, a: 0.5 }}
    />,
  );

  const elm = getByTitle('reverse-vertical-alpha');
  jest.spyOn(elm, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 100,
    right: 20,
    width: 20,
    height: 100,
    toJSON: () => ({}),
  });

  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 10, pageY: 0 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 10, pageY: 100 }));

  expect(handleChange).toHaveBeenNthCalledWith(1, { a: 0, h: 0, s: 0, v: 68 }, expect.objectContaining({ top: 0 }));
  expect(handleChange).toHaveBeenNthCalledWith(2, { a: 1, h: 0, s: 0, v: 68 }, expect.objectContaining({ top: 1 }));
});
