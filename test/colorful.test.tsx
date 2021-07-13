/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Colorful from '../packages/color-colorful/src';

it('Colorful', async () => {
  const MyComponent = () => {
    // const [hex, setHex] = useState("#fff");
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Colorful
        color={hsva}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-colorful ');
    expect(tree.props.style).toMatchObject({
      width: 200,
      position: 'relative',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(3);
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
          if (idx === 0) {
            expect(child.props.className).toEqual('w-color-interactive w-color-saturation w-color-colorful');
            expect(child.props.style).toMatchObject({
              inset: 0,
              position: 'relative',
            });
          }
          if (idx === 1) {
            expect(child.props.className).toEqual('w-color-alpha w-color-alpha-horizontal w-color-hue w-color-colorful');
          }
        }
      });
    }
  }
});

it('Colorful mouseDown Saturation & onChange', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Colorful
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']);
        }}
      />
    );
  };
  const {
    container: { firstChild },
  } = render(<MyComponent />);
  const elm = firstChild?.firstChild?.firstChild;
  fireEvent.mouseDown(elm!, { pageX: 1, pageY: 12 });
});

it('Colorful mouseDown Hue & onChange', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Colorful
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']);
        }}
      />
    );
  };
  const {
    container: { firstChild },
  } = render(<MyComponent />);
  const elm = firstChild?.firstChild?.nextSibling?.firstChild?.nextSibling;
  fireEvent.mouseDown(elm!, { pageX: 1, pageY: 12 });
});

it('Colorful mouseDown Alpha & onChange', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Colorful
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']);
        }}
      />
    );
  };
  const {
    container: { firstChild },
  } = render(<MyComponent />);
  const elm = firstChild?.firstChild?.nextSibling?.nextSibling?.firstChild?.nextSibling;
  fireEvent.mouseDown(elm!, { pageX: 1, pageY: 12 });
});

it('Colorful color === undefined & onChange', async () => {
  const MyComponent = () => {
    const [hex, setHex] = useState('#fff');
    return (
      <Colorful
        color={undefined}
        onChange={(color) => {
          setHex(color.hex);
          expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']);
        }}
      />
    );
  };
  const {
    container: { firstChild },
  } = render(<MyComponent />);
  const elm = firstChild?.firstChild?.nextSibling?.nextSibling?.firstChild?.nextSibling;
  fireEvent.mouseDown(elm!, { pageX: 1, pageY: 12 });
});
