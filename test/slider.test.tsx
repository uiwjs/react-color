/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { waitFor, screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from '../packages/color-slider/src';

it('Slider', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Slider
        color={hsva}
        onChange={(newShade) => {
          setHsva({ ...hsva, ...newShade });
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-slider');
    expect(tree.props.style).toMatchObject({ display: 'flex' });
    if (tree.children) {
      expect(tree.children.length).toEqual(5);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Slider onChange color:HexColor', async () => {
  const { container } = render(
    <Slider
      style={{ marginLeft: 20 }}
      color="#93bee6"
      onChange={(color) => {
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
        expect(color.hex).toEqual('#b3cde6');
        expect(color.hexa).toEqual('#b3cde6ff');
      }}
    />,
  );

  if (container.firstChild && container.firstChild.firstChild) {
    const elm = container.firstChild.firstChild.firstChild;
    if (elm) {
      // @ts-ignore
      elm.focus();
      fireEvent.click(elm);
    }
  }
});

it('Slider onChange color = undefined', async () => {
  const { container } = render(
    <Slider
      style={{ marginLeft: 20 }}
      color={undefined}
      onChange={(color) => {
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
        expect(color.hex).toEqual('#000000');
        expect(color.hexa).toEqual('#000000ff');
      }}
    />,
  );

  if (container.firstChild && container.firstChild.firstChild) {
    const elm = container.firstChild.firstChild.firstChild;
    if (elm) {
      // @ts-ignore
      elm.focus();
      fireEvent.click(elm);
    }
  }
});

it('Slider onChange checked', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Slider
        color={hsva}
        onChange={(color, evn) => {
          // console.log(color)
          // console.log('evn:', evn.target)
          // console.log('evn:', evn.target)
          // console.log('evn:', evn.target.style)
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  }
  const { container } = render(<MyComponent />);
  if (container.firstChild && container.firstChild.firstChild) {
    const elm = container.firstChild.firstChild.firstChild;
    if (elm) {
      // @ts-ignore
      elm.focus();
      fireEvent.click(elm);
    }
  }
});
