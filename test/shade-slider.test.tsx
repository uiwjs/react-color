/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShadeSlider from '../packages/color-shade-slider/src';
import { BACKGROUND_IMG } from '../packages/color-alpha/src';

it('ShadeSlider', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <ShadeSlider
        hsva={hsva}
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
    expect(tree.props.className).toEqual('w-color-alpha w-color-alpha-horizontal w-color-saturation ');
    expect(tree.props.style).toMatchObject({
      // width: 320,
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
        }
        if (idx === 0 && typeof child === 'object') {
          expect(child.props.style).toMatchObject({
            inset: 0,
            position: 'absolute',
            background: 'linear-gradient(to right, hsla(0, 0%, 100%, 1), rgb(0, 0, 0))',
            borderRadius: 0,
          });
        }
      });
    }
  }
});

it('ShadeSlider onChange', async () => {
  render(
    <ShadeSlider
      innerProps={{
        title: 'test',
      }}
      hsva={{ h: 0, s: 0, v: 68, a: 1 }}
      onChange={(newShade) => {
        expect(Object.keys(newShade)).toEqual(expect.arrayContaining(['v']));
      }}
    />,
  );

  const elm = screen.getByTitle('test');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
});

it('ShadeSlider direction === vertical', async () => {
  render(
    <ShadeSlider
      innerProps={{
        title: 'test',
      }}
      direction="vertical"
      hsva={{ h: 0, s: 0, v: 68, a: 1 }}
      onChange={(newShade) => {
        expect(Object.keys(newShade)).toEqual(expect.arrayContaining(['v']));
      }}
    />,
  );

  const elm = screen.getByTitle('test');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
});
