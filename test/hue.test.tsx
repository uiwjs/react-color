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
    expect(tree.props.className).toEqual('w-color-alpha w-color-alpha-horizontal w-color-hue ');
    expect(tree.props.style).toMatchObject({
      height: 16,
      borderRadius: 0,
      position: 'relative',
      backgroundColor: 'var(--alpha-background-color)',
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

it('Hue onMouseDown', async () => {
  render(
    <Hue
      hue={209}
      data-testid="custom-element"
      innerProps={{
        title: 'custom-element',
      }}
      onChange={(newHue) => {
        expect(Object.keys(newHue)).toEqual(expect.arrayContaining(['h']));
      }}
    />,
  );

  const elm = screen.getByTitle('custom-element');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
});

it('Hue direction === vertical', async () => {
  render(
    <Hue
      hue={209}
      direction="vertical"
      data-testid="custom-element"
      innerProps={{
        title: 'custom-element',
      }}
      onChange={(newHue) => {
        expect(Object.keys(newHue)).toEqual(expect.arrayContaining(['h']));
      }}
    />,
  );

  const elm = screen.getByTitle('custom-element');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
});

it('Hue direction === vertical', async () => {
  render(
    <Hue
      hue={undefined!}
      direction="vertical"
      innerProps={{
        title: 'custom-element',
      }}
      onChange={(newHue) => {
        expect(Object.keys(newHue)).toEqual(expect.arrayContaining(['h']));
      }}
    />,
  );

  const elm = screen.getByTitle('custom-element');
  elm.focus();
  fireEvent.mouseDown(elm, { clientX: 1 });
  expect(elm.style).toHaveProperty('_values', { inset: '0', position: 'absolute', 'z-index': '1' });
});
