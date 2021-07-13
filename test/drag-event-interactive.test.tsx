/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';
import * as testUtils from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Interactive, { clamp, isTouch } from '../packages/drag-event-interactive/src';

afterEach(cleanup);
class FakeMouseEvent extends MouseEvent {
  constructor(type: any, values: any = {}) {
    super(type, { buttons: 1, bubbles: true, ...values });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

class FakeTouchEvent extends TouchEvent {
  constructor(type: any, values: any = {}) {
    super(type, {
      buttons: 1,
      bubbles: true,
      ...values,
      touches: [{ pageX: values.pageX || 0, pageY: values.pageY || 0, bubbles: true }],
    });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

// Mock `HTMLElement.getBoundingClientRect` to be able to read element sizes
// See https://github.com/jsdom/jsdom/issues/135#issuecomment-68191941
Object.defineProperties(HTMLElement.prototype, {
  getBoundingClientRect: {
    get: () => () => ({
      left: 5,
      top: 5,
      width: 100,
      height: 100,
    }),
  },
});

it('Interactive', async () => {
  const MyComponent = () => {
    return <Interactive />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props).toHaveProperty('onMouseDown');
    expect(tree.props).toHaveProperty('onTouchStart');
  }
});

it('clamp', () => {
  expect(clamp(0.2)).toEqual(0.2);
  expect(clamp(2)).toEqual(1);
  expect(clamp(12)).toEqual(1);
  expect(clamp(-10)).toEqual(0);
  expect(clamp(-0.123)).toEqual(0);
  expect(clamp(0)).toEqual(0);
  expect(clamp(0.33)).toEqual(0.33);
});

it("Interactive - Doesn't trigger `onChange` after mounting", () => {
  const handleChange = jest.fn();
  render(<Interactive onChange={handleChange} />);
  expect(handleChange).not.toHaveReturned();
});

it('Interactive mouseDown', async () => {
  const handleChange = jest.fn((offset) => offset);
  const { getByTitle } = render(
    <div style={{ position: 'relative', width: 320, height: 16 }}>
      <Interactive
        title="test"
        onMove={(offset) => {
          expect(Object.keys(offset)).toEqual(expect.arrayContaining(['left', 'top']));
        }}
        onDown={handleChange}
      >
        <div>xxx</div>
      </Interactive>
    </div>,
  );
  const elm = getByTitle('test');
  fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 20, pageY: 10 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 10, pageY: 10 }));
  fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 1, pageY: 50, buttons: 0 }));
  expect(handleChange).toHaveReturnedWith({ left: 0.15, top: 0.05 });
});

it('Interactive touchStart/touchMove', async () => {
  const handleChange = jest.fn((offset) => offset);
  const { getByTitle } = render(
    <div style={{ position: 'relative', width: 320, height: 300 }}>
      <Interactive
        title="test"
        onMove={(offset) => {
          console.log('touchmove - ', offset);
        }}
        onDown={handleChange}
      >
        <div>xxx</div>
      </Interactive>
    </div>,
  );
  const elm = getByTitle('test');
  testUtils.act(() => {
    // fireEvent.touchStart(elm, { touches: [{ pageX: 0, pageY: 0, bubbles: true }] });
    // fireEvent.touchMove(elm, { touches: [{ pageX: 55, pageY: 0, bubbles: true }] });
    fireEvent(elm, new FakeTouchEvent('touchstart', { pageX: 10, pageY: 10 }));
    fireEvent(elm, new FakeTouchEvent('touchmove', { pageX: 55, pageY: 0 }));
    fireEvent(elm, new FakeTouchEvent('touchend', { pageX: 55, pageY: 0 }));

    // Should be skipped
    fireEvent(elm, new FakeMouseEvent('mousedown', { pageX: 35, pageY: 0 }));
    fireEvent(elm, new FakeMouseEvent('mousemove', { pageX: 105, pageY: 0 }));
    fireEvent(elm, new FakeMouseEvent('mouseup', { pageX: 105, pageY: 0 }));
    expect(handleChange).toHaveReturnedWith({ left: 0.05, top: 0.05 });
    expect(elm.getAttribute('tabindex')).toEqual('0');
  });
});

it('Interactive touchstart/touchmove/touchend', async () => {
  const handleChange = jest.fn((offset) => offset);
  const { getByTitle } = render(
    <div style={{ position: 'relative', width: 320, height: 16 }}>
      <Interactive
        title="test"
        onMove={(offset) => {
          expect(Object.keys(offset)).toEqual(expect.arrayContaining(['left', 'top']));
        }}
        onDown={handleChange}
      >
        <div>xxx</div>
      </Interactive>
    </div>,
  );
  const elm = getByTitle('test');
  fireEvent(elm, new FakeTouchEvent('touchstart', { pageX: 10, pageY: 10 }));
  fireEvent(elm, new FakeTouchEvent('touchmove', { pageX: 20, pageY: 10 }));
  fireEvent(elm, new FakeTouchEvent('touchend', { pageX: 20, pageY: 10 }));
  expect(handleChange).toHaveReturnedWith({ left: 0.05, top: 0.05 });
});
