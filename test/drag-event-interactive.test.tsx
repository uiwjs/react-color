/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Interactive from '../packages/drag-event-interactive/src';

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
