/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Saturation from '../packages/color-saturation/src';

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
    expect(tree.props.className).toEqual('w-color-saturation ');
    expect(tree.props.style).toMatchObject({
      width: 200,
      height: 200,
      position: 'relative',
      backgroundColor: 'hsl(0,100%, 50%)',
    });
  }
});
