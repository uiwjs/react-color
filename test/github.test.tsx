/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Github, { GithubPlacement } from '../packages/color-github/src';

it('Github', async () => {
  const MyComponent = () => {
    return <Github />;
  };
  const component = TestRenderer.create(<MyComponent />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('w-color-swatch w-color-github');
    expect(tree.props.style).toMatchObject({
      width: 200,
      borderRadius: 4,
      background: '#fff',
      boxShadow: 'rgb(0 0 0 / 15%) 0px 3px 12px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      position: 'relative',
      padding: 5,
    });
    if (tree.children) {
      expect(tree.children.length).toEqual(18);
      tree.children.forEach((child) => {
        if (typeof child === 'object') {
          expect(child.type).toEqual('div');
        }
      });
    }
  }
});

it('Github mouseOut', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const MyComponent = () => {
    return <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />;
  };
  const { getByTitle } = render(<MyComponent />);
  const elm = getByTitle('#F44E3B');
  fireEvent.click(elm);
  expect(handleChange).toHaveReturnedWith('#f44e3b');
});

it('Github mouseEnter/mouseLeave checked', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} color="#F44E3B" onChange={handleChange} />,
  );
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseEnter(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  fireEvent.mouseLeave(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  expect(handleChange).not.toHaveReturned();
});

it('Github mouseEnter/mouseLeave color = undefined', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(<Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} onChange={handleChange} />);
  const elm = getByTitle('#F44E3B');
  fireEvent.mouseEnter(elm);
  expect(elm.style.outline).toEqual('#fff solid 2px');
  fireEvent.mouseLeave(elm);
  expect(elm.style.outline).toEqual('initial');
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.Left', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.Left} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 7px 0px',
    'border-color': 'transparent #fff transparent transparent',
    left: '-7px',
    top: '50%',
    'margin-top': '-7px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 8px 8px 0px',
    'border-color': 'transparent rgba(0, 0, 0, 0.15) transparent transparent',
    left: '-8px',
    top: '50%',
    'margin-top': '-8px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.LeftTop', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.LeftTop} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 7px 0px',
    'border-color': 'transparent #fff transparent transparent',
    left: '-7px',
    top: '6px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 8px 8px 0px',
    'border-color': 'transparent rgba(0, 0, 0, 0.15) transparent transparent',
    left: '-8px',
    top: '5px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.LeftBotton', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      placement={GithubPlacement.LeftBotton}
      onChange={handleChange}
    />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 7px 0px',
    'border-color': 'transparent #fff transparent transparent',
    left: '-7px',
    top: '100%',
    'margin-top': '-20px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 8px 8px 0px',
    'border-color': 'transparent rgba(0, 0, 0, 0.15) transparent transparent',
    left: '-8px',
    top: '100%',
    'margin-top': '-21px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.Right', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.Right} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-width': '7px 0px 7px 7px',
    'border-color': 'transparent transparent transparent #fff',
    right: '-7px',
    top: '50%',
    'margin-top': '-7px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-width': '8px 0px 8px 8px',
    'border-color': 'transparent transparent transparent rgba(0, 0, 0, 0.15)',
    right: '-8px',
    top: '50%',
    'margin-top': '-8px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.RightTop', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.RightTop} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 0px 7px 7px',
    'border-color': 'transparent transparent transparent #fff',
    right: '-7px',
    top: '6px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 0px 8px 8px',
    'border-color': 'transparent transparent transparent rgba(0, 0, 0, 0.15)',
    right: '-8px',
    top: '5px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.RightBotton', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      placement={GithubPlacement.RightBotton}
      onChange={handleChange}
    />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  const style = {
    position: 'absolute',
  };
  expect((arr as any).style).toMatchObject({
    ...style,
    'border-width': '7px 0px 7px 7px',
    'border-color': 'transparent transparent transparent #fff',
    'border-left-color': '#fff',
    right: '-7px',
    top: '100%',
    'margin-top': '-20px',
  });
  expect((borderArr as any).style).toMatchObject({
    ...style,
    'border-width': '8px 0px 8px 8px',
    'border-color': 'transparent transparent transparent rgba(0, 0, 0, 0.15)',
    'border-left-color': 'rgba(0, 0, 0, 0.15)',
    right: '-8px',
    top: '100%',
    'margin-top': '-21px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.Top', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.Top} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-width': '0px 7px 7px',
    'border-color': 'transparent transparent #fff',
    top: '-7px',
    left: '50%',
    'margin-left': '-7px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    position: 'absolute',
    'border-width': '0px 8px 8px',
    'border-color': 'transparent transparent rgba(0, 0, 0, 0.15)',
    top: '-8px',
    left: '50%',
    'margin-left': '-8px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.TopLeft', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.TopLeft} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    position: 'absolute',
    'border-width': '0px 7px 7px',
    'border-color': 'transparent transparent #fff',
    top: '-7px',
    left: '8px',
  });
  expect((borderArr as any).style).toMatchObject({
    position: 'absolute',
    'border-width': '0px 8px 8px',
    'border-color': 'transparent transparent rgba(0, 0, 0, 0.15)',
    top: '-8px',
    left: '7px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.TopRight', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.TopRight} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    position: 'absolute',
    'border-width': '0px 7px 7px',
    'border-color': 'transparent transparent #fff',
    top: '-7px',
    right: '11px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    position: 'absolute',
    'border-width': '0px 8px 8px',
    'border-color': 'transparent transparent rgba(0, 0, 0, 0.15)',
    top: '-8px',
    right: '10px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.Botton', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} placement={GithubPlacement.Botton} onChange={handleChange} />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 0px',
    'border-color': '#fff transparent transparent',
    top: '100%',
    left: '50%',
    'margin-left': '-7px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 8px 0px',
    'border-color': 'rgba(0, 0, 0, 0.15) transparent transparent',
    top: '100%',
    left: '50%',
    'margin-left': '-8px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.BottonLeft', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      placement={GithubPlacement.BottonLeft}
      onChange={handleChange}
    />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 0px',
    'border-color': '#fff transparent transparent',
    top: '100%',
    left: '8px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    position: 'absolute',
    'border-width': '8px 8px 0px',
    'border-color': 'rgba(0, 0, 0, 0.15) transparent transparent',
    top: '100%',
    left: '7px',
  });
  expect(handleChange).not.toHaveReturned();
});

it('Github GithubPlacement.BottonRight', async () => {
  const handleChange = jest.fn((color) => color.hex);
  const { getByTitle } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      placement={GithubPlacement.BottonRight}
      onChange={handleChange}
    />,
  );
  const arr = getByTitle('#F44E3B').previousSibling;
  const borderArr = arr?.previousSibling;
  expect((arr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '7px 7px 0px',
    'border-color': '#fff transparent transparent',
    top: '100%',
    right: '11px',
  });
  expect((borderArr as any).style).toMatchObject({
    'border-style': 'solid',
    'border-width': '8px 8px 0px',
    'border-color': 'rgba(0, 0, 0, 0.15) transparent transparent',
    top: '100%',
    right: '10px',
  });
  expect(handleChange).not.toHaveReturned();
});
