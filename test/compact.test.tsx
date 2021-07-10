/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Compact from '../packages/color-compact/src';

it('Compact', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
      <Compact
        style={{
          boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
        }}
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsv })}
      />
    );
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-compact');
    expect(tree.props.style).toMatchObject({
      background: '#f6f6f6',
      borderRadius: 3,
      display: 'flex',
      width: 240,
      flexWrap: 'wrap',
      paddingTop: 5,
      paddingLeft: 5,
      boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(37);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Compact onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#4d4d4d');
        }}
      />
    );
  };
  render(<MyComponent />);
  fireEvent(
    screen.getByTitle('#4D4D4D'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Compact hex color onChange', async () => {
  render(
    <Compact
      color="#F44E3B"
      onChange={(color, evn) => {
        expect(color.hex).toEqual('#f44e3b');
      }}
    />,
  );
  fireEvent(
    screen.getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Compact color === undefined', async () => {
  render(<Compact onChange={(color) => expect(color.hex).toEqual('#f44e3b')} />);
  fireEvent(
    screen.getByTitle('#F44E3B'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});

it('Compact Input R onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#ff7300');
          expect(color.rgb.r).toEqual(255);
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('R').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('226');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '8888' } });
    fireEvent.blur(input);
  }
});

it('Compact Input G onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#e2ff00');
          expect(color.rgb.g).toEqual(255);
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('G').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('115');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '8888' } });
    fireEvent.blur(input);
  }
});

it('Compact Input B onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#e273ff');
          expect(color.rgb.b).toEqual(255);
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('0');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '8888' } });
    fireEvent.blur(input);
  }
});

it('Compact Input B = -111 onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#e27300"
        onChange={(color) => {
          expect(color.hex).toEqual('#e27300');
          expect(color.rgb.b).toEqual(0);
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('0');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-111' } });
    fireEvent.blur(input);
  }
});

it('Compact Input hex onChange', async () => {
  const MyComponent = () => {
    return (
      <Compact
        color="#ff7300"
        onChange={(color) => {
          expect(color.hex).toEqual('#eeeeee');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('R').parentElement?.previousSibling?.firstChild;
  if (input) {
    expect((input as any).value).toEqual('FF7300');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'eee' } });
    fireEvent.blur(input);
  }
});
