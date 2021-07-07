/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Interactive, { clamp, isTouch } from '../packages/drag-event-interactive/src';

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

it('Interactive mouseDown', async () => {
  const { getByTitle } = render(
    <div style={{ position: 'relative', width: 320, height: 16 }}>
      <Interactive
        title="test"
        onMove={() => {
          console.log('test');
        }}
        onDown={(offset, event) => {
          expect(isTouch(event)).toBeFalsy();
          expect(Object.keys(offset)).toEqual(expect.arrayContaining(['left', 'top']));
        }}
      >
        <div>xxx</div>
      </Interactive>
    </div>,
  );
  getByTitle('test').focus();
  fireEvent.mouseDown(getByTitle('test'), { clientX: 1 });
  fireEvent.mouseMove(getByTitle('test'), { clientX: 24 });
});

it('Interactive mouseDown', async () => {
  const { getByTitle } = render(
    <div style={{ position: 'relative', width: 320, height: 16 }}>
      <Interactive
        title="test"
        onMove={() => {
          console.log('touchmove');
        }}
        onDown={(offset, event) => {
          console.log('tonDownest  xxxx', isTouch(event));
          expect(Object.keys(offset)).toEqual(expect.arrayContaining(['left', 'top']));
        }}
      >
        <div>xxx</div>
      </Interactive>
    </div>,
  );
  const elm = getByTitle('test');
  elm.focus();
  // fireEvent(
  //   elm,
  //   new MouseEvent('touchstart', {
  //     bubbles: true,
  //     cancelable: true,
  //   }),
  // );
  fireEvent.touchMove(document, {});
  fireEvent(
    elm,
    new MouseEvent('touchMove', {
      bubbles: true,
      cancelable: true,
    }),
  );
});
