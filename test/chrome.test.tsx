/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chrome from '../packages/color-chrome/src';
import { EyeDropper } from '../packages/color-chrome/src/EyeDropper';

afterEach(() => {
  delete (window as any).EyeDropper;
});

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
      expect(tree.children.length).toBeGreaterThanOrEqual(4);
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
  const { container, getByText } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const input = getByText('R').previousSibling;
  expect((input as any).value).toEqual('244');
  const elm = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement;
  fireEvent.click(elm as HTMLElement);
  const inputHsla = getByText('H').previousSibling;
  expect((inputHsla as any).value).toEqual('6');
  fireEvent.click(elm as HTMLElement);
  const inputHexa = getByText('HEX').previousSibling;
  expect((inputHexa as any).value).toEqual('#F44E3B');
  fireEvent.click(elm as HTMLElement);
  const inputRgba = getByText('G').previousSibling;
  expect((inputRgba as any).value).toEqual('78');
  expect(handleChange).not.toHaveReturned();
});

it('Chrome Switch Input Button Style', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { container } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement as HTMLElement;
  fireEvent.mouseEnter(elm);
  // expect((elm as any).style['background-color']).toEqual('rgb(232, 232, 232)');
  fireEvent.mouseLeave(elm);
  expect(elm.style.backgroundColor || 'transparent').toEqual('transparent');
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
  const { container, getByText } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement;
  fireEvent.click(elm as HTMLElement);
  const inputHsla = getByText('A').previousSibling;
  fireEvent.change(inputHsla!, { target: { value: '0.34' } });
  expect(handleChange).toHaveReturnedWith('#f44e3b56');
});

it('Chrome HSLA Input "#93BEE699" onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const { container, getByText } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const elm = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement;
  fireEvent.click(elm as HTMLElement);
  fireEvent.click(elm as HTMLElement);
  const inputHsla = getByText('HEX').previousSibling;
  fireEvent.change(inputHsla!, { target: { value: '#93BEE699' } });
  expect(handleChange).toHaveReturnedWith('#93bee699');
});

it('Chrome HEX Input onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const { container, getByText } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const elm = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement;
  fireEvent.click(elm as HTMLElement);
  fireEvent.click(elm as HTMLElement);
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
  const { container } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const elm = container.querySelector('.w-color-hue .w-color-interactive');
  fireEvent(elm as Element, new FakeMouseEvent('mousedown', { pageX: 1, pageY: 12 }));
  expect(handleChange).toHaveReturnedWith('#e6939399');
});
it('Chrome ALPHA MouseClick onChange', async () => {
  const handleChange = jest.fn((color) => color.hexa);
  const { container } = render(<Chrome color="#93BEE699" onChange={handleChange} />);
  const alphaInteracts = container.querySelectorAll('.w-color-alpha-horizontal .w-color-interactive');
  const elm = alphaInteracts[alphaInteracts.length - 1];
  fireEvent(elm as Element, new FakeMouseEvent('mousedown', { pageX: 0.3, pageY: 1 }));
  expect(handleChange).toHaveReturnedWith('#93bee6ff');
});

it('Chrome horizontal layout uses a row and a wider panel', () => {
  const tree = TestRenderer.create(<Chrome horizontal color="#F44E3B" />).toJSON();
  expect(tree).toMatchObject({
    type: 'div',
    props: {
      style: expect.objectContaining({
        flexDirection: 'row',
        width: 460,
      }),
    },
  });
});

it('Chrome hides alpha inputs when showAlpha is false', () => {
  const { container, queryByText, getByText } = render(<Chrome color="#F44E3B" showAlpha={false} />);
  expect(queryByText('A')).toBeNull();
  const arrow = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement as HTMLElement;
  fireEvent.click(arrow);
  expect(getByText('H')).toBeInTheDocument();
  expect(queryByText('A')).toBeNull();
});

it('Chrome HEX input accepts a value that already includes a hash', () => {
  const handleChange = jest.fn((color) => color.hex);
  const { container, getByText } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const arrow = container.querySelector('svg[viewBox="0 0 1024 1024"]')?.parentElement as HTMLElement;
  fireEvent.click(arrow);
  fireEvent.click(arrow);
  const input = getByText('HEX').previousSibling;
  fireEvent.change(input!, { target: { value: '##112233' } });
  expect(handleChange).toHaveReturnedWith('#112233');
});

it('Chrome eyedropper picks a color and ignores open failures', async () => {
  const open = jest
    .fn()
    .mockResolvedValueOnce({ sRGBHex: '#112233' })
    .mockRejectedValueOnce(Object.assign(new Error('cancel'), { name: 'AbortError' }))
    .mockRejectedValueOnce(new Error('failed'));
  (window as any).EyeDropper = jest.fn(() => ({ open }));

  const handleChange = jest.fn((color) => color.hex);
  const { container } = render(<Chrome color="#F44E3B" onChange={handleChange} />);
  const dropper = container.querySelector('svg[viewBox="0 0 512 512"]') as SVGElement;
  expect(dropper).toBeInTheDocument();

  fireEvent.click(dropper);
  await act(async () => {
    await Promise.resolve();
  });
  expect(handleChange).toHaveReturnedWith('#112233');

  fireEvent.click(dropper);
  fireEvent.click(dropper);
  await act(async () => {
    await Promise.resolve();
  });
  expect(handleChange).toHaveBeenCalledTimes(1);

  const hidden = render(<Chrome color="#F44E3B" showEyeDropper={false} />);
  expect(hidden.container.querySelector('svg[viewBox="0 0 512 512"]')).toBeNull();
});

it('EyeDropper does nothing without the browser API or a color callback', async () => {
  const unsupported = render(<EyeDropper onPickColor={jest.fn()} />);
  fireEvent.click(unsupported.container.querySelector('svg') as SVGElement);
  unsupported.unmount();

  const open = jest.fn().mockResolvedValue({ sRGBHex: '#abcdef' });
  (window as any).EyeDropper = jest.fn(() => ({ open }));
  const silent = render(<EyeDropper />);
  fireEvent.click(silent.container.querySelector('svg') as SVGElement);
  await act(async () => {
    await Promise.resolve();
  });
  expect(open).toHaveBeenCalledTimes(1);
});
