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

function pressKey(elm: HTMLElement, key: string) {
  const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
  elm.dispatchEvent(event);
  return event;
}

function lastAlphaCall(handleChange: jest.Mock) {
  const [color, offset] = handleChange.mock.calls.at(-1);
  return { color, offset };
}

it('Alpha keyboard adjusts horizontal alpha and ignores the other axis', () => {
  const handleChange = jest.fn();
  const hsva = { h: 10, s: 20, v: 30, a: 0.5 };
  const { rerender } = render(<Alpha innerProps={{ title: 'alpha-keys' }} hsva={hsva} onChange={handleChange} />);
  const elm = screen.getByTitle('alpha-keys');

  expect(pressKey(elm, 'ArrowLeft').defaultPrevented).toBe(true);
  let { color, offset } = lastAlphaCall(handleChange);
  expect(color).toMatchObject({ h: 10, s: 20, v: 30 });
  expect(color.a).toBeCloseTo(0.49);
  expect(offset.left).toBeCloseTo(0.49);
  expect(offset.top).toBe(0.5);
  expect(offset).toMatchObject({ width: 0, height: 0, x: 0, y: 0 });

  expect(pressKey(elm, 'ArrowRight').defaultPrevented).toBe(true);
  ({ color, offset } = lastAlphaCall(handleChange));
  expect(color.a).toBeCloseTo(0.51);
  expect(offset.left).toBeCloseTo(0.51);
  expect(offset.top).toBe(0.5);

  expect(pressKey(elm, 'ArrowUp').defaultPrevented).toBe(false);
  expect(pressKey(elm, 'ArrowDown').defaultPrevented).toBe(false);
  expect(pressKey(elm, 'Enter').defaultPrevented).toBe(false);
  expect(handleChange).toHaveBeenCalledTimes(2);

  rerender(<Alpha innerProps={{ title: 'alpha-keys' }} hsva={{ ...hsva, a: 0 }} onChange={handleChange} />);
  pressKey(elm, 'ArrowLeft');
  rerender(<Alpha innerProps={{ title: 'alpha-keys' }} hsva={{ ...hsva, a: 1 }} onChange={handleChange} />);
  pressKey(elm, 'ArrowRight');
  expect(handleChange).toHaveBeenCalledTimes(2);
});

it('Alpha reverse keyboard flips horizontal arrows and clamps the ends', () => {
  const handleChange = jest.fn();
  const hsva = { h: 10, s: 20, v: 30, a: 0.5 };
  const { rerender } = render(<Alpha reverse innerProps={{ title: 'alpha-reverse-keys' }} hsva={hsva} onChange={handleChange} />);
  const elm = screen.getByTitle('alpha-reverse-keys');

  expect(pressKey(elm, 'ArrowLeft').defaultPrevented).toBe(true);
  let { color, offset } = lastAlphaCall(handleChange);
  expect(color.a).toBeCloseTo(0.51);
  expect(offset.left).toBeCloseTo(0.49);
  expect(offset.top).toBe(0.5);

  expect(pressKey(elm, 'ArrowRight').defaultPrevented).toBe(true);
  ({ color, offset } = lastAlphaCall(handleChange));
  expect(color.a).toBeCloseTo(0.49);
  expect(offset.left).toBeCloseTo(0.51);

  rerender(<Alpha reverse innerProps={{ title: 'alpha-reverse-keys' }} hsva={{ ...hsva, a: 1 }} onChange={handleChange} />);
  pressKey(elm, 'ArrowLeft');
  rerender(<Alpha reverse innerProps={{ title: 'alpha-reverse-keys' }} hsva={{ ...hsva, a: 0 }} onChange={handleChange} />);
  pressKey(elm, 'ArrowRight');
  expect(handleChange).toHaveBeenCalledTimes(2);
});

it('Alpha keyboard adjusts vertical alpha and ignores horizontal arrows', () => {
  const handleChange = jest.fn();
  const hsva = { h: 10, s: 20, v: 30, a: 0.5 };
  const { rerender } = render(
    <Alpha direction="vertical" innerProps={{ title: 'alpha-vertical-keys' }} hsva={hsva} onChange={handleChange} />,
  );
  const elm = screen.getByTitle('alpha-vertical-keys');

  expect(pressKey(elm, 'ArrowUp').defaultPrevented).toBe(true);
  let { color, offset } = lastAlphaCall(handleChange);
  expect(color.a).toBeCloseTo(0.51);
  expect(offset.top).toBeCloseTo(0.49);
  expect(offset.left).toBe(0.5);

  expect(pressKey(elm, 'ArrowDown').defaultPrevented).toBe(true);
  ({ color, offset } = lastAlphaCall(handleChange));
  expect(color.a).toBeCloseTo(0.49);
  expect(offset.top).toBeCloseTo(0.51);
  expect(offset.left).toBe(0.5);

  expect(pressKey(elm, 'ArrowLeft').defaultPrevented).toBe(false);
  expect(pressKey(elm, 'ArrowRight').defaultPrevented).toBe(false);
  expect(handleChange).toHaveBeenCalledTimes(2);

  rerender(
    <Alpha direction="vertical" innerProps={{ title: 'alpha-vertical-keys' }} hsva={{ ...hsva, a: 1 }} onChange={handleChange} />,
  );
  pressKey(elm, 'ArrowUp');
  rerender(
    <Alpha direction="vertical" innerProps={{ title: 'alpha-vertical-keys' }} hsva={{ ...hsva, a: 0 }} onChange={handleChange} />,
  );
  pressKey(elm, 'ArrowDown');
  expect(handleChange).toHaveBeenCalledTimes(2);
});

it('Alpha reverse keyboard flips vertical arrows and clamps the ends', () => {
  const handleChange = jest.fn();
  const hsva = { h: 10, s: 20, v: 30, a: 0.5 };
  const { rerender } = render(
    <Alpha
      reverse
      direction="vertical"
      innerProps={{ title: 'alpha-reverse-vertical-keys' }}
      hsva={hsva}
      onChange={handleChange}
    />,
  );
  const elm = screen.getByTitle('alpha-reverse-vertical-keys');

  expect(pressKey(elm, 'ArrowUp').defaultPrevented).toBe(true);
  let { color, offset } = lastAlphaCall(handleChange);
  expect(color.a).toBeCloseTo(0.49);
  expect(offset.top).toBeCloseTo(0.49);
  expect(offset.left).toBe(0.5);

  expect(pressKey(elm, 'ArrowDown').defaultPrevented).toBe(true);
  ({ color, offset } = lastAlphaCall(handleChange));
  expect(color.a).toBeCloseTo(0.51);
  expect(offset.top).toBeCloseTo(0.51);

  rerender(
    <Alpha
      reverse
      direction="vertical"
      innerProps={{ title: 'alpha-reverse-vertical-keys' }}
      hsva={{ ...hsva, a: 0 }}
      onChange={handleChange}
    />,
  );
  pressKey(elm, 'ArrowUp');
  rerender(
    <Alpha
      reverse
      direction="vertical"
      innerProps={{ title: 'alpha-reverse-vertical-keys' }}
      hsva={{ ...hsva, a: 1 }}
      onChange={handleChange}
    />,
  );
  pressKey(elm, 'ArrowDown');
  expect(handleChange).toHaveBeenCalledTimes(2);
});

it('Alpha keyboard does nothing when onChange is missing', () => {
  render(<Alpha innerProps={{ title: 'alpha-no-change' }} hsva={{ h: 0, s: 0, v: 0, a: 0.4 }} />);
  const elm = screen.getByTitle('alpha-no-change');
  expect(pressKey(elm, 'ArrowRight').defaultPrevented).toBe(true);
});

it('Alpha focuses the clicked target', () => {
  render(<Alpha innerProps={{ title: 'alpha-click' }} hsva={{ h: 0, s: 0, v: 68, a: 1 }} />);
  const elm = screen.getByTitle('alpha-click');
  fireEvent.click(elm);
  expect(elm).toHaveFocus();
});

it('Alpha renders a custom pointer and falls back when pointer is not a function', () => {
  const hsva = { h: 1, s: 2, v: 3, a: 0.25 };
  const { rerender } = render(
    <Alpha
      hsva={hsva}
      prefixCls="alpha"
      pointerProps={{ className: 'extra' }}
      pointer={({ prefixCls, left, top, className }) => (
        <i data-testid="ptr" className={`${prefixCls} ${className || ''}`} data-left={left ?? ''} data-top={top ?? ''} />
      )}
    />,
  );
  const ptr = screen.getByTestId('ptr');
  expect(ptr.className).toBe('alpha extra');
  expect(ptr.getAttribute('data-left')).toBe('25%');
  expect(ptr.getAttribute('data-top')).toBe('');

  rerender(
    <Alpha
      hsva={hsva}
      direction="vertical"
      pointer={({ left, top }) => <i data-testid="ptr" data-left={left ?? ''} data-top={top ?? ''} />}
    />,
  );
  expect(screen.getByTestId('ptr').getAttribute('data-top')).toBe('75%');
  expect(screen.getByTestId('ptr').getAttribute('data-left')).toBe('');

  rerender(<Alpha hsva={hsva} pointer={'x' as unknown as () => JSX.Element} />);
  expect(document.querySelector('.w-color-alpha-pointer')).toBeInTheDocument();
});
