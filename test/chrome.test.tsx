/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chrome from '../packages/color-chrome/src';

it('Chrome', async () => {
  const component = TestRenderer.create(<Chrome />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch w-color-github w-color-chrome');
    expect(tree.props.style).toMatchObject({
      borderRadius: 0,
      flexDirection: 'column',
      width: 230,
      padding: 0,
    });
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

it('Chrome saturation click', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = firstChild?.firstChild?.nextSibling?.nextSibling;
  fireEvent.mouseDown(elm!, { clientX: 1 });
  expect(handleChange).toHaveReturnedWith('#000000');
});

it('Chrome Switch Input', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
    getByText,
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const input = getByText('R').previousSibling;
  expect((input as any).value).toEqual('244');
  const elm = firstChild?.lastChild?.lastChild;
  fireEvent.click(elm!);
  const inputHsla = getByText('H').previousSibling;
  expect((inputHsla as any).value).toEqual('6');
  fireEvent.click(elm!);
  const inputHexa = getByText('HEX').previousSibling;
  expect((inputHexa as any).value).toEqual('#F44E3B');
  fireEvent.click(elm!);
  const inputRgba = getByText('G').previousSibling;
  expect((inputRgba as any).value).toEqual('78');
  expect(handleChange).not.toHaveReturned();
});

it('Chrome Switch Input Button Style', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.lastChild;
  fireEvent.mouseEnter(elm!);
  // expect((elm as any).style['background-color']).toEqual('rgb(232, 232, 232)');
  fireEvent.mouseLeave(elm!);
  expect((elm as any).style['background-color']).toEqual('transparent');
});

it('Chrome RGBA Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const {
    container: { firstChild },
    getByText,
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const input = getByText('R').previousSibling;
  expect((input as any).value).toEqual('244');
  fireEvent.change(input!, { target: { value: '4444' } });
  expect(handleChange).toHaveReturnedWith('#ff4e3b');
});

it('Chrome HSLA Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const {
    container: { firstChild },
    getByText,
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.lastChild;
  fireEvent.click(elm!);
  const inputHsla = getByText('A').previousSibling;
  fireEvent.change(inputHsla!, { target: { value: '0.34' } });
  expect(handleChange).toHaveReturnedWith('#f44e3b56');
});

it('Chrome HSLA Input "#93BEE699" onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const {
    container: { firstChild },
    getByText,
  } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.lastChild;
  fireEvent.click(elm!);
  fireEvent.click(elm!);
  const inputHsla = getByText('HEX').previousSibling;
  fireEvent.change(inputHsla!, { target: { value: '#93BEE699' } });
  expect(handleChange).toHaveReturnedWith('#93bee699');
});

it('Chrome HEX Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const {
    container: { firstChild },
    getByText,
  } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.lastChild;
  fireEvent.click(elm!);
  fireEvent.click(elm!);
  const inputHsla = getByText('HEX').previousSibling;
  expect((inputHsla as any).value).toEqual('#93BEE699');
  fireEvent.change(inputHsla!, { target: { value: '333' } });
  expect(handleChange).toHaveReturnedWith('#333333ff');
});

class FakeMouseEvent extends MouseEvent {
  constructor(type: any, values: any = {}) {
    super(type, { buttons: 1, bubbles: true, ...values });
    Object.assign(this, {
      pageX: values.pageX || 0,
      pageY: values.pageY || 0,
    });
  }
}

it('Chrome HUE MouseClick onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const {
    container: { firstChild },
  } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.previousSibling?.lastChild?.firstChild?.lastChild;
  fireEvent(elm!, new FakeMouseEvent('mousedown', { pageX: 1, pageY: 12 }));
  expect(handleChange).toHaveReturnedWith('#e6939399');
});
it('Chrome ALPHA MouseClick onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const {
    container: { firstChild },
  } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const elm = firstChild?.lastChild?.previousSibling?.lastChild?.lastChild?.lastChild;
  fireEvent(elm!, new FakeMouseEvent('mousedown', { pageX: 0.3, pageY: 1 }));
  expect(handleChange).toHaveReturnedWith('#93bee6ff');
});
