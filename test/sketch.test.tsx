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
        expect(Object.keys(color)).toEqual(expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']));
        expect(color.hex).toEqual('#d0021b');
        expect(color.hexa).toEqual('#d0021bff');
      }}
    />,
  );

  const elm = screen.getByTitle('#D0021B');
  elm.focus();
  fireEvent.click(elm);
});

it('Sketch Input hex onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#333333');
          expect(color.hexa).toEqual('#333333ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('Hex').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('CA1D32');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '333' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input R onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#ff1d32');
          expect(color.hexa).toEqual('#ff1d32ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('R').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('202');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input G onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#caff32');
          expect(color.hexa).toEqual('#caff32ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('G').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('29');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input B onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#ca1dff');
          expect(color.hexa).toEqual('#ca1dffff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('50');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input B = -4444 onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.hex).toEqual('#ca1d00');
          expect(color.hexa).toEqual('#ca1d00ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('50');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input A onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.rgba.a).toEqual(1);
          expect(color.hex).toEqual('#ca1d32');
          expect(color.hexa).toEqual('#ca1d32ff');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('A').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('100');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch Input A = -4444 onChange', async () => {
  const MyComponent = () => {
    return (
      <Sketch
        color="#ca1d32"
        onChange={(color) => {
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          expect(color.rgba.a).toEqual(0);
          expect(color.hex).toEqual('#ca1d32');
          expect(color.hexa).toEqual('#ca1d3200');
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('A').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('100');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-4444' } });
    fireEvent.blur(input);
  }
});

it('Sketch editableDisable=false onChange', async () => {
  const MyComponent = () => {
    return <Sketch color="#ca1d32" editableDisable={false} />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children) {
    expect(tree.children.length).toEqual(2);
  }
});

it('Sketch presetColors=false onChange', async () => {
  const MyComponent = () => <Sketch color="#ca1d32" presetColors={false} />;
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children) {
    expect(tree.children.length).toEqual(2);
  }
});
