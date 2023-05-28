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
      background: 'var(--github-background-color)',
      boxShadow: 'var(--github-box-shadow)',
      border: 'var(--github-border)',
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

it('Github rectRender props', async () => {
  const { getByTitle } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      rectRender={({ key, color }) => <div key={key} title={color} data-uiw="title" />}
    />,
  );
  const elm = getByTitle('#F44E3B');
  expect(elm.dataset.uiw).toEqual('title');
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
  const { getByTitle, getByTestId } = render(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      data-testid="test-element"
      placement={GithubPlacement.Left}
      onChange={handleChange}
    />,
  );
  // const arr = getByTitle('#F44E3B').previousSibling;
  expect(getByTitle('#F44E3B').title).toEqual('#F44E3B');
  const elm = getByTestId('test-element');
  expect(elm.firstElementChild?.getAttribute('style')).toEqual(
    'border-style: solid; position: absolute; border-width: 8px 8px 8px 0px; left: -8px; top: 50%; margin-top: -8px;',
  );
  expect(elm.firstElementChild).toHaveProperty(['style', 'left'], '-8px');
  expect(elm.firstElementChild).toHaveProperty(['style', 'top'], '50%');
  expect(elm.firstElementChild).toHaveProperty(['style', 'borderStyle'], 'solid');
  expect(elm.firstElementChild).toHaveProperty(['style', 'position'], 'absolute');
  expect(elm.firstElementChild).toHaveProperty(['style', 'borderWidth'], '8px 8px 8px 0px');
  expect(elm.firstElementChild).toHaveProperty(['style', 'marginTop'], '-8px');
  // expect(elm.firstElementChild).toHaveProperty(['style', 'borderColor'], 'transparent var(--github-arrow-border-color) transparent transparent')
  expect(handleChange).not.toHaveReturned();
  const component = TestRenderer.create(
    <Github colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']} data-testid="test-element" placement={GithubPlacement.Left} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 8px 0',
      borderColor: 'transparent var(--github-arrow-border-color) transparent transparent',
      left: -8,
      top: '50%',
      marginTop: -8,
    });
  }
});

it('Github GithubPlacement.LeftTop', async () => {
  const component = TestRenderer.create(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      data-testid="test-element"
      placement={GithubPlacement.LeftTop}
    />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 8px 0',
      borderColor: 'transparent var(--github-arrow-border-color) transparent transparent',
      left: -8,
      top: 5,
    });
  }
});

it('Github GithubPlacement.LeftBotton', async () => {
  const component = TestRenderer.create(
    <Github
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      data-testid="test-element"
      placement={GithubPlacement.LeftBotton}
    />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 8px 0',
      borderColor: 'transparent var(--github-arrow-border-color) transparent transparent',
      left: -8,
      top: '100%',
    });
  }
});

it('Github GithubPlacement.Right', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.Right} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 0 8px 8px',
      borderColor: 'transparent transparent transparent var(--github-arrow-border-color)',
      right: -8,
      top: '50%',
      marginTop: -8,
    });
  }
});

it('Github GithubPlacement.RightTop', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.RightTop} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 0 8px 8px',
      borderColor: 'transparent transparent transparent var(--github-arrow-border-color)',
      right: -8,
      top: 5,
    });
  }
});

it('Github GithubPlacement.RightBotton', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.RightBotton} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 0 8px 8px',
      borderColor: 'transparent transparent transparent var(--github-arrow-border-color)',
      top: '100%',
      marginTop: -21,
      right: -8,
    });
  }
});

it('Github GithubPlacement.Top', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.Top} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '0 8px 8px',
      borderColor: 'transparent transparent var(--github-arrow-border-color)',
      left: '50%',
      top: -8,
      marginLeft: -8,
    });
  }
});

it('Github GithubPlacement.TopLeft', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.TopLeft} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '0 8px 8px',
      borderColor: 'transparent transparent var(--github-arrow-border-color)',
      left: 7,
      top: -8,
    });
  }
});

it('Github GithubPlacement.TopRight', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.TopRight} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '0 8px 8px',
      borderColor: 'transparent transparent var(--github-arrow-border-color)',
      right: 10,
      top: -8,
    });
  }
});

it('Github GithubPlacement.Botton', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.Botton} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 0',
      borderColor: 'var(--github-arrow-border-color) transparent transparent',
      left: '50%',
      top: '100%',
      marginLeft: -8,
    });
  }
});

it('Github GithubPlacement.BottonLeft', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.BottonLeft} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 0',
      borderColor: 'var(--github-arrow-border-color) transparent transparent',
      top: '100%',
      left: 7,
    });
  }
});

it('Github GithubPlacement.BottonRight', async () => {
  const component = TestRenderer.create(
    <Github colors={['#F44E3B']} data-testid="test-element" placement={GithubPlacement.BottonRight} />,
  );
  const tree = component.toJSON();
  if (tree && !Array.isArray(tree) && tree.children && tree.children[0]) {
    const child = (tree.children[0] as any)?.props.style;
    expect(child).toMatchObject({
      borderStyle: 'solid',
      position: 'absolute',
      borderWidth: '8px 8px 0',
      borderColor: 'var(--github-arrow-border-color) transparent transparent',
      top: '100%',
      right: 10,
    });
  }
});
