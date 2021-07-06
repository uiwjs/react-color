/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Interactive, { clamp } from '../packages/drag-event-interactive/src';

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
