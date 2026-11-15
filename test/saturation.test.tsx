/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { hsvaToHslaString } from '@uiw/color-convert';
import Saturation from '../packages/color-saturation/src';

class FakeMouseEvent extends MouseEvent {
  constructor(type: string, values: { pageX?: number; pageY?: number; buttons?: number } = {}) {
    super(type, { buttons: values.buttons ?? 1, bubbles: true });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

function mockRect(elm: HTMLElement, width = 200, height = 200) {
  jest.spyOn(elm, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: height,
    right: width,
    width,
    height,
    toJSON() {
      return {};
    },
  });
}

it('Saturation', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Saturation
        hsva={hsva}
        onChange={(newColor) => {
          setHsva({ ...hsva, ...newColor, a: hsva.a });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-interactive w-color-saturation');
    expect(tree.props.style).toEqual({
      width: 200,
      height: 200,
      borderRadius: 0,
      cursor: 'crosshair',
      inset: 0,
      outline: 'none',
      position: 'relative',
      touchAction: 'none',
      backgroundImage: 'linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(0, 100%, 50%))',
    });
  }
});

it('Saturation onChange', async () => {
  const handleChange = jest.fn((color) => Object.keys(color));
  render(<Saturation title="custom-element" hsva={{ h: 0, s: 0, v: 68, a: 1 }} onChange={handleChange} />);
  const elm = screen.getByTitle('custom-element');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
  expect(handleChange).toHaveReturnedWith(['h', 's', 'v', 'a']);
});

it('Saturation focus behavior after interaction', () => {
  const handleChange = jest.fn((color) => color);

  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 200, s: 50, v: 80, a: 1 });
    return (
      <Saturation
        title="focus-test-element"
        hsva={hsva}
        onChange={(newColor) => {
          setHsva({ ...hsva, ...newColor, a: hsva.a });
          handleChange(newColor);
        }}
      />
    );
  };

  render(<MyComponent />);
  const elm = screen.getByTitle('focus-test-element');

  // Mock getBoundingClientRect for proper drag simulation
  elm.getBoundingClientRect = jest.fn(() => ({
    left: 0,
    top: 0,
    width: 200,
    height: 200,
    right: 200,
    bottom: 200,
  })) as any;

  // Simulate mouse down which should trigger handleChange and focus
  fireEvent.mouseDown(elm, { clientX: 100, clientY: 100, buttons: 1 });

  // Verify that change was triggered
  expect(handleChange).toHaveBeenCalled();

  // Verify that the element maintains its ability to be focused
  elm.focus();
  expect(elm).toHaveAttribute('tabindex', '0');
});

it('Saturation maps pointer position to saturation and value and keeps focus', () => {
  const handleChange = jest.fn();
  render(<Saturation title="drag-position" hsva={{ h: 4, s: 5, v: 6, a: 0.2 }} onChange={handleChange} />);
  const elm = screen.getByTitle('drag-position');
  mockRect(elm);
  const focus = jest.spyOn(elm, 'focus');

  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 100, pageY: 50 }));
  fireEvent(window, new FakeMouseEvent('mousemove', { pageX: 0, pageY: 200 }));

  expect(handleChange).toHaveBeenNthCalledWith(1, { h: 4, s: 50, v: 75, a: 0.2 });
  expect(handleChange).toHaveBeenNthCalledWith(2, { h: 4, s: 0, v: 0, a: 0.2 });
  expect(focus).toHaveBeenCalled();
});

it('Saturation keyboard adjusts saturation and value by one percent', () => {
  const handleChange = jest.fn();
  const hsva = { h: 12, s: 40, v: 70, a: 0.3 };
  render(<Saturation title="keys" hsva={hsva} onChange={handleChange} />);
  const elm = screen.getByTitle('keys');

  const press = (key: string) => {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    elm.dispatchEvent(event);
    return event;
  };

  expect(press('ArrowLeft').defaultPrevented).toBe(true);
  expect(handleChange).toHaveBeenLastCalledWith({ h: 12, s: 39, v: 70, a: 0.3 });
  expect(press('ArrowRight').defaultPrevented).toBe(true);
  expect(handleChange).toHaveBeenLastCalledWith({ h: 12, s: 41, v: 70, a: 0.3 });
  expect(press('ArrowUp').defaultPrevented).toBe(true);
  expect(handleChange).toHaveBeenLastCalledWith({ h: 12, s: 40, v: 71, a: 0.3 });
  expect(press('ArrowDown').defaultPrevented).toBe(true);
  expect(handleChange).toHaveBeenLastCalledWith({ h: 12, s: 40, v: 69, a: 0.3 });

  const ignored = press('Enter');
  expect(ignored.defaultPrevented).toBe(false);
  expect(handleChange).toHaveBeenCalledTimes(4);
});

it('Saturation keyboard clamps saturation and value inside 0 to 100', () => {
  const handleChange = jest.fn();
  const { rerender } = render(<Saturation title="clamp" hsva={{ h: 1, s: 0, v: 0, a: 1 }} onChange={handleChange} />);
  const elm = screen.getByTitle('clamp');
  fireEvent.keyDown(elm, { key: 'ArrowLeft' });
  fireEvent.keyDown(elm, { key: 'ArrowDown' });
  expect(handleChange).toHaveBeenNthCalledWith(1, { h: 1, s: 0, v: 0, a: 1 });
  expect(handleChange).toHaveBeenNthCalledWith(2, { h: 1, s: 0, v: 0, a: 1 });

  rerender(<Saturation title="clamp" hsva={{ h: 1, s: 100, v: 100, a: 1 }} onChange={handleChange} />);
  fireEvent.keyDown(elm, { key: 'ArrowRight' });
  fireEvent.keyDown(elm, { key: 'ArrowUp' });
  expect(handleChange).toHaveBeenNthCalledWith(3, { h: 1, s: 100, v: 100, a: 1 });
  expect(handleChange).toHaveBeenNthCalledWith(4, { h: 1, s: 100, v: 100, a: 1 });
});

it('Saturation ignores input when hsva or onChange is missing and uses hue', () => {
  const handleChange = jest.fn();
  const tree = TestRenderer.create(<Saturation hue={122} onChange={handleChange} />).toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.props.style.backgroundImage).toBe(
      'linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(122, 100%, 50%))',
    );
    expect(tree.children).toBeNull();
  }

  const { rerender } = render(<Saturation title="empty" hue={122} onChange={handleChange} />);
  const elm = screen.getByTitle('empty');
  expect(elm.querySelector('[class*="pointer"]')).toBeNull();
  fireEvent.keyDown(elm, { key: 'ArrowLeft' });
  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 10, pageY: 10 }));
  expect(handleChange).not.toHaveBeenCalled();

  rerender(<Saturation title="empty" hsva={{ h: 1, s: 2, v: 3, a: 1 }} />);
  fireEvent.keyDown(elm, { key: 'ArrowUp' });
  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 10, pageY: 10 }));
  expect(handleChange).not.toHaveBeenCalled();
});

it('Saturation renders a custom pointer', () => {
  const hsva = { h: 200, s: 25, v: 80, a: 0.5 };
  render(
    <Saturation
      title="custom-pointer"
      prefixCls="sat"
      hsva={hsva}
      pointer={({ prefixCls, left, top, color }) => (
        <i data-testid="ptr" className={prefixCls} data-left={left} data-top={top} data-color={color} />
      )}
    />,
  );
  const ptr = screen.getByTestId('ptr');
  expect(ptr.className).toBe('sat');
  expect(ptr.getAttribute('data-left')).toBe('25%');
  expect(ptr.getAttribute('data-top')).toBe('20%');
  expect(ptr.getAttribute('data-color')).toBe(hsvaToHslaString(hsva));
});

it('Saturation uses the default pointer when pointer is not a function', () => {
  render(<Saturation title="bad-pointer" hsva={{ h: 0, s: 10, v: 20, a: 1 }} pointer={'x' as unknown as () => JSX.Element} />);
  expect(document.querySelector('.w-color-saturation-pointer')).toBeInTheDocument();
});

it('Saturation focuses the clicked target', () => {
  render(<Saturation title="click-me" hsva={{ h: 0, s: 0, v: 0, a: 1 }} />);
  const elm = screen.getByTitle('click-me');
  fireEvent.click(elm);
  expect(elm).toHaveFocus();
});

it('Saturation applies prefix, className, radius and style', () => {
  const component = TestRenderer.create(
    <Saturation
      prefixCls="my-sat"
      className="extra"
      radius="12px"
      style={{ width: 140, height: 80 }}
      hsva={{ h: 15, s: 60, v: 40, a: 1 }}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchObject({
    type: 'div',
    props: {
      className: 'w-color-interactive my-sat extra',
      style: expect.objectContaining({
        width: 140,
        height: 80,
        borderRadius: '12px',
        position: 'relative',
        backgroundImage: 'linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(15, 100%, 50%))',
      }),
    },
  });
});

it('Saturation forwards callback refs, object refs, and ignores plain objects', () => {
  const callback = jest.fn();
  const { rerender, unmount } = render(<Saturation ref={callback} title="ref-node" hsva={{ h: 0, s: 1, v: 1, a: 1 }} />);
  const elm = screen.getByTitle('ref-node');
  expect(callback).toHaveBeenCalledWith(elm);

  const objectRef = React.createRef<HTMLDivElement>();
  rerender(<Saturation ref={objectRef} title="ref-node" hsva={{ h: 0, s: 1, v: 1, a: 1 }} />);
  expect(callback).toHaveBeenLastCalledWith(null);
  expect(objectRef.current).toBe(screen.getByTitle('ref-node'));

  const plain: { current?: HTMLDivElement | null } = {};
  rerender(<Saturation ref={plain as React.Ref<HTMLDivElement>} title="ref-node" hsva={{ h: 0, s: 1, v: 1, a: 1 }} />);
  expect(plain.current).toBeUndefined();
  expect(objectRef.current).toBeNull();

  unmount();
  expect(callback.mock.calls.some((call) => call[0] === null)).toBe(true);
});
