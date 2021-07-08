/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sketch from '../packages/color-sketch/src';

it('Sketch', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Sketch
        style={{ marginLeft: 20 }}
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsv });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-sketch ');
    expect(tree.props.style).toMatchObject({
      background: 'rgb(255, 255, 255)',
      borderRadius: 4,
      boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
      width: 218,
      marginLeft: 20,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(3);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Sketch onChange color:HsvaColor', async () => {
  render(
    <Sketch
      style={{ marginLeft: 20 }}
      color={{ h: 0, s: 0, v: 68, a: 1 }}
      onChange={(color) => {
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
        expect(color.hex).toEqual('#d0021b');
        expect(color.hexa).toEqual('#d0021bff');
      }}
    />,
  );

  const elm = screen.getByTitle('#D0021B');
  elm.focus();
  fireEvent.click(elm);
});

it('Sketch onChange color:HexColor', async () => {
  render(
    <Sketch
      style={{ marginLeft: 20 }}
      color="#ca1d32"
      onChange={(color) => {
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
        expect(color.hex).toEqual('#d0021b');
        expect(color.hexa).toEqual('#d0021bff');
      }}
    />,
  );

  const elm = screen.getByTitle('#D0021B');
  elm.focus();
  fireEvent.click(elm);
});

it('Sketch onChange presetColors', async () => {
  render(
    <Sketch
      style={{ marginLeft: 20 }}
      color="#ca1d32"
      presetColors={[
        { color: '#D0021B' },
        '',
        '#F5A623',
        '#f8e61b',
        { color: '#8B572A' },
        { color: '#7ED321', title: 'Color Title' },
      ]}
      onChange={(color) => {
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
        expect(color.hex).toEqual('#d0021b');
        expect(color.hexa).toEqual('#d0021bff');
      }}
    />,
  );

  const elm = screen.getByTitle('#D0021B');
  elm.focus();
  fireEvent.click(elm);
});

// it('Sketch Click Saturation', async () => {
//   const { container } = render(
//     <Sketch
//       style={{ marginLeft: 20 }}
//       color="#ca1d32"
//       presetColors={['#D0021B', '#F5A623', '#f8e61b', { color: '#8B572A' }, { color: '#7ED321', title: 'Color Title' }]}
//       onChange={(color) => {
//         // expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
//         expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
//         expect(color.hex).toEqual('#d0021b');
//         expect(color.hexa).toEqual('#d0021bff');
//       }}
//     />,
//   );
//   if (container.firstChild && container.firstChild.firstChild) {
//     const elm = container.firstChild.firstChild.firstChild;
//     if (elm) {
//       // @ts-ignore
//       elm.focus();
//       fireEvent.click(elm);
//     }
//   }
// });

// it('Sketch Click Hue', async () => {
//   const { container } = render(
//     <Sketch
//       style={{ marginLeft: 20 }}
//       color="#ca1d32"
//       presetColors={['#D0021B', '#F5A623', '#f8e61b', { color: '#8B572A' }, { color: '#7ED321', title: 'Color Title' }]}
//       onChange={(color) => {
//         expect(color.hex).toEqual('#000000');
//         expect(color.hexa).toEqual('#000000ff');
//         expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
//         // expect(color.rgb).toEqual({ r: 208, g: 2, b: 27 });
//         // expect(color.rgba).toEqual({ r: 208, g: 2, b: 27, a: 1 });
//       }}
//     />,
//   );
//   if (container.firstChild && container.firstChild.firstChild && container.firstChild.firstChild.firstChild) {
//     const elm = container.firstChild.firstChild.firstChild;
//     // @ts-ignore
//     elm.focus();
//     fireEvent.mouseDown(elm, { clientX: 1 });
//   }
//   if (
//     container.firstChild &&
//     container.firstChild.firstChild &&
//     container.firstChild.firstChild.firstChild?.nextSibling!.firstChild!.firstChild!.firstChild?.nextSibling
//   ) {
//     const elm = container.firstChild.firstChild.firstChild?.nextSibling.firstChild.firstChild.firstChild?.nextSibling;

//     // @ts-ignore
//     elm.focus();
//     fireEvent.mouseDown(elm, { clientX: 1 });
//   }
// });

// it('Sketch Click Alpha', async () => {
//   const { container } = render(
//     <Sketch
//       style={{ marginLeft: 20 }}
//       color="#ca1d32"
//       presetColors={['#D0021B', '#F5A623', '#f8e61b', { color: '#8B572A' }, { color: '#7ED321', title: 'Color Title' }]}
//       onChange={(color) => {
//         expect(color.hex).toEqual('#ca1d32');
//         // expect(color.hexa).toEqual('#000000ff');
//         expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
//       }}
//     />,
//   );
//   // @ts-ignore
//   if (container.firstChild.firstChild.firstChild?.nextSibling.firstChild.firstChild?.nextSibling.firstChild?.nextSibling) {
//     const elm =
//       container.firstChild?.firstChild?.firstChild?.nextSibling.firstChild.firstChild?.nextSibling.firstChild?.nextSibling;

//     // @ts-ignore
//     elm.focus();
//     fireEvent.mouseDown(elm!, { clientX: 1 });
//   }
// });
