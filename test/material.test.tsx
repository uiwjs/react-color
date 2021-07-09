/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, waitFor, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Material from '../packages/color-material/src';

it('Material', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Material
        color={hsva}
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
    expect(tree.props.className).toEqual('w-color-material');
    expect(tree.props.style).toMatchObject({
      width: 98,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(2);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Material hex onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#333"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#f5a623');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('Hex').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('333333');
    fireEvent.change(input, { target: { value: 'f5a623' } });
  }
});

it('Material hex onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color=""
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#f5a623');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('Hex').previousSibling;
  if (input) {
    fireEvent.change(input, { target: { value: 'f5a623' } });
    fireEvent.blur(input);
  }
});

it('Material R onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#333"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#423333');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('R').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('51');
    fireEvent.change(input, { target: { value: '66' } });
    expect((input as any).value).toEqual('66');
  }
});

it('Material G onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#333"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#334233');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('G').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('51');
    fireEvent.change(input, { target: { value: '66' } });
    expect((input as any).value).toEqual('66');
  }
});

it('Material B onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#333"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#3333ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('51');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '6666' } });
    fireEvent.blur(input);
  }
});

it('Material B = -22 onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#93BEE6"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#93be00');
          expect(color.rgb.b).toEqual(0);
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('230');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-22' } });
    fireEvent.blur(input);
  }
});

it('Material B = 8888 onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#93BEE6"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          expect(color.hex).toEqual('#93beff');
          expect(color.rgb.b).toEqual(255);
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('230');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '8888' } });
    fireEvent.blur(input);
  }
});

// ==========>=

it('Material #333333333 onChange', async () => {
  const MyComponent = () => {
    return (
      <Material
        color="#ccc"
        onChange={(color) => {
          console.log('color:', color);
          // expect(Object.keys(color)).toEqual(expect.arrayContaining(['hex', 'hsl', 'hsv', 'rgb']));
          // expect(color.hex).toEqual('#f5a623');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('Hex').previousSibling;
  if (input) {
    // fireEvent.change(input, { target: { value: '#333333333' } });
    fireEvent.input(input, { target: { value: '#333333333' } });
    // console.log('-->', input.value)
    fireEvent.blur(input);
    // console.log('-->', input.value)
    // fireEvent.change(input, { target: { value: '' } });
  }
});
