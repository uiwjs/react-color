/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditableInput from '../packages/color-editable-input/src';
import { hsvaToHex, hexToHsva } from '../packages/color-convert/src';

it('EditableInput', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInput
        label="Hex"
        value={hsvaToHex(hsva)}
        labelStyle={{ position: 'relative', display: 'block' }}
        style={{
          width: 84,
          marginTop: 8,
          flexDirection: 'row-reverse',
        }}
      />
    );
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input');
    expect(tree.props.style).toMatchObject({
      flexDirection: 'row-reverse',
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
      width: 84,
      marginTop: 8,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(2);
      tree.children.forEach((child, idx) => {
        if (typeof child === 'object' && idx === 0) {
          expect(child.type).toEqual('input');
        }
        if (typeof child === 'object' && idx === 1) {
          expect(child.type).toEqual('span');
        }
      });
    }
  }
});

it('EditableInput placement = top', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInput
        label="Hex"
        placement="top"
        value={hsvaToHex(hsva)}
        labelStyle={{ position: 'relative', display: 'block' }}
      />
    );
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input');
    expect(tree.props.style).toMatchObject({
      flexDirection: 'column-reverse',
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
    });
  }
});

it('EditableInput placement = bottom', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return <EditableInput label="Hex" placement="bottom" value={hsvaToHex(hsva)} />;
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input');
    expect(tree.props.style).toMatchObject({
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
    });
  }
});

it('EditableInput placement = left', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return <EditableInput label="Hex" placement="left" value={hsvaToHex(hsva)} />;
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input');
    expect(tree.props.style).toMatchObject({
      flexDirection: 'row-reverse',
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
    });
  }
});

it('EditableInput placement = right', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return <EditableInput label="Hex" placement="right" value={hsvaToHex(hsva)} />;
  }
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-editable-input');
    expect(tree.props.style).toMatchObject({
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
    });
  }
});

it('EditableInput Input Hex String', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInput
        label="Hex"
        title="test"
        value={hsvaToHex(hsva)}
        onChange={(evn, value) => {
          expect(value).toEqual('#333');
          expect(evn.target.value).toEqual('#333');
          setHsva(hexToHsva(value as string));
        }}
        labelStyle={{ position: 'relative', display: 'block' }}
        style={{
          width: 84,
          marginTop: 8,
          flexDirection: 'row-reverse',
        }}
      />
    );
  }
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('test');
  elm.focus();
  fireEvent.change(elm, { target: { value: '#333' } });
});

it('EditableInput Input Number', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <EditableInput
        label="Alpha"
        title="test"
        value={hsva.a}
        onChange={(evn, value) => {
          expect(value).toEqual(0.15);
          expect(evn.target.value).toEqual('0.15');
          setHsva({ ...hsva, a: value as number });
        }}
        labelStyle={{ position: 'relative', display: 'block' }}
        style={{
          width: 84,
          marginTop: 8,
          flexDirection: 'row-reverse',
        }}
      />
    );
  }
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('test');
  elm.focus();
  fireEvent.change(elm, { target: { value: 0.15 } });
});

it('EditableInput Input Number', async () => {
  function MyComponent() {
    const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
    return (
      <div>
        <EditableInput
          label="Alpha"
          title="test"
          value={hsva.a}
          onChange={(evn, value) => {
            expect(value).toEqual(0.15);
            expect(evn.target.value).toEqual('0.15');
            setHsva({ ...hsva, a: value as number });
          }}
          onBlur={(evn) => {
            expect(evn.target.tagName).toEqual('INPUT');
          }}
          style={{
            width: 84,
            marginTop: 8,
            flexDirection: 'row-reverse',
          }}
        />
        <EditableInput
          label="Alpha"
          title="test2"
          value={hsva.a}
          onChange={(evn, value) => {
            expect(value).toEqual(0.15);
            expect(evn.target.value).toEqual('0.15');
            setHsva({ ...hsva, a: value as number });
          }}
        />
      </div>
    );
  }
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('test');
  elm.focus();
  fireEvent.change(elm, { target: { value: 0.15 } });
  // elm.blur();
});
