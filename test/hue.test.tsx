/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hue from '../packages/color-hue/src';
import { BACKGROUND_IMG } from '../packages/color-alpha/src';

it('Hue', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Hue
        hue={hsva.h}
        onChange={(newHue) => {
          setHsva({ ...hsva, ...newHue });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-alpha w-color-hue ');
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
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
          if (idx === 0) {
            expect(child.props.style).toMatchObject({
              inset: 0,
              position: 'absolute',
            });
          }
        }
      });
    }
  }
});

// it('Hue onChange', async () => {
//   const MyComponent = () => {
//     const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
//     return (
//       <div>
//         <Hue
//           hue={hsva.h}
//           data-testid="custom-element"
//           innerProps={{
//             // ['data-testid']: 'custom-element',
//           }}
//           onChange={(newHue) => {
//             console.log('newHue')
//             // setHsva({ ...hsva, ...newHue });
//           }}
//         />
//         <div>Load Greeting</div>
//       </div>
//     );
//   };
//   render(<MyComponent />);
//   fireEvent.click(screen.getByTestId('custom-element'));
// });
