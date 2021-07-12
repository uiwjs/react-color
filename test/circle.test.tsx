/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as testUtils from 'react-dom/test-utils';
import Circle from '../packages/color-circle/src';

it('Circle', async () => {
  const MyComponent = () => {
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch w-color-circle ');
    expect(tree.props.style).toMatchObject({
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
    });
    // expect(tree.props.style.background).toEqual(`url(${BACKGROUND_IMG}) left center`);
    if (tree.children) {
      expect(tree.children.length).toEqual(4);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Circle colors checked', async () => {
  const MyComponent = () => {
    // const [hex, setHex] = useState('#fff');
    return (
      <Circle
        colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
        color="#F44E3B"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#f44e3b');
          expect(color.hexa).toEqual('#f44e3bff');
        }}
      />
    );
  };
  const { getByTitle } = render(<MyComponent />);
  fireEvent(
    getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Circle colors === undefind', async () => {
  const MyComponent = () => {
    return <Circle />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.children).toBeNull();
  }
});

it('Circle mouseenter', async () => {
  const MyComponent = () => {
    return <Circle colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" />;
  };
  const { getByTitle } = render(<MyComponent />);
  userEvent.hover(getByTitle('#F44E3B'));
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseOver(elm);
});

// testUtils.act(() => {
//   const MyComponent = () => {
//     // const [hex, setHex] = useState('#fff');
//     return (
//       <Circle
//         colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
//         color="#F44E3B"
//         onChange={(color) => {
//           console.log(color)
//           expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
//           expect(color.hex).toEqual('#f44e3b');
//           expect(color.hexa).toEqual('#f44e3bff');
//         }}
//       />
//     );
//   };
//   const { getByTitle } = render(<MyComponent />);
//   userEvent.hover(getByTitle('#F44E3B'));
//   const elm = getByTitle('#F44E3B');
//   // fireEvent.mouseOver(elm);
//   // fireEvent.mouseEnter(elm);

//   testUtils.Simulate.mouseEnter(elm)

//   console.log(elm)

// })
