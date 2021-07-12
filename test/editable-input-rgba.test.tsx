/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditableInputRGBA from '../packages/color-editable-input-rgba/src';
import { hsvaToHex, hexToHsva, HsvaColor } from '../packages/color-convert/src';

it('EditableInputRGBA', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input-rgba');
    expect(tree.props.style).toMatchObject({
      fontSize: 11,
      display: 'flex',
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(4);
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('EditableInputRGBA Input R onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          expect(color.hex).toEqual('#ffbee6');
          expect(color.hexa).toEqual('#ffbee6ff');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('R').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('147');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});

it('EditableInputRGBA Input G onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          expect(color.hex).toEqual('#9300e6');
          expect(color.hexa).toEqual('#9300e6ff');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('G').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('190');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-4444' } });
    fireEvent.blur(input);
  }
});

it('EditableInputRGBA Input B onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          expect(color.hex).toEqual('#93be00');
          expect(color.hexa).toEqual('#93be00ff');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('B').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('230');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-4444' } });
    fireEvent.blur(input);
  }
});

it('EditableInputRGBA Input A onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          expect(color.hex).toEqual('#93bee6');
          expect(color.hexa).toEqual('#93bee600');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
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

it('EditableInputRGBA Input A = 100 onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={hsva}
        onChange={(color) => {
          expect(color.hex).toEqual('#93bee6');
          expect(color.hexa).toEqual('#93bee6ff');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
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

it('EditableInputRGBA Input A = 100 onChange', async () => {
  const MyComponent = () => {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInputRGBA
        hsva={undefined as any}
        onChange={(color) => {
          expect(color.hex).toEqual('#000000');
          expect(color.hexa).toEqual('#000000ff');
          expect(Object.keys(color)).toEqual(
            expect.arrayContaining(['rgb', 'hsl', 'hsv', 'rgba', 'hsla', 'hsva', 'hex', 'hexa']),
          );
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
    );
  };
  const { getByText } = render(<MyComponent />);
  const input = getByText('A').previousSibling;
  if (input) {
    expect((input as any).value).toEqual('0');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '4444' } });
    fireEvent.blur(input);
  }
});
