/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { waitFor, screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { hsvaToRgba } from '@uiw/color-convert';
import Slider from '../packages/color-slider/src';

const swatchColor = (hsva: { h: number; s: number; v: number; a: number }, lightness: number) => {
  const rgba = hsvaToRgba({ ...hsva, v: lightness });
  return rgba.a === 1 ? `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})` : `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
};

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
        expect(color.hex).toEqual('#82a9cc');
        expect(color.hexa).toEqual('#82a9ccff');
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

it('Slider uses the matching custom shade when the color is within range', () => {
  const hsva = { h: 1, s: 1, v: 1, a: 1 };
  const { container } = render(<Slider color={hsva} />);
  const root = container.firstElementChild as HTMLDivElement;
  const swatches = Array.from(root.children).map((column) => column.firstElementChild as HTMLDivElement);
  const expected = [50, 40, 30, 20, 10].map((lightness) => swatchColor(hsva, lightness));
  expect(swatches).toHaveLength(5);
  swatches.forEach((node, index) => {
    expect(node.style.backgroundColor).toEqual(expected[index]);
  });
});

it('Slider keeps the default lightness when a custom shade has no lightness array', () => {
  const hsva = { h: 200, s: 50, v: 40, a: 1 };
  const { container } = render(
    <Slider color={hsva} customColorShades={[{ color: '#ff0000' } as { color: string; lightness: number[] }]} />,
  );
  const root = container.firstElementChild as HTMLDivElement;
  const swatches = Array.from(root.children).map((column) => column.firstElementChild as HTMLDivElement);
  const expected = [80, 65, 50, 35, 20].map((lightness) => swatchColor(hsva, lightness));
  expect(swatches).toHaveLength(5);
  swatches.forEach((node, index) => {
    expect(node.style.backgroundColor).toEqual(expected[index]);
  });
});
