import { Component } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example/markdown';
import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`;

interface MarkdownProps {}
interface MarkdownState {
  mdStr: string;
  mdObj?: CodeBlockData;
}

const EditorUrl = styled.a`
  position: absolute;
  right: 20px;
  padding: 3px 8px 4px 8px;
  background: #333333;
  border-radius: 0 0 6px 6px;
  text-decoration: initial;
  color: #fff;
  transition: all 0.3s;
  font-size: 14px;
  &:hover {
    background-color: #3f51b4;
  }
`;

const Wrapper = styled.div`
  padding-bottom: 120px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`;

const Example = styled.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  editorUrl?: string;
  getMdStr?: any;
  example?: React.ReactNode;
  componentDidMount() {
    if (this.getMdStr) {
      this.getMdStr().then((str: any) => {
        this.setState({
          mdStr: str.default.source,
          mdObj: str.default,
        });
      });
    }
  }
  render() {
    const { source, components, data } = (this.state.mdObj || {}) as CodeBlockData;
    return (
      <Wrapper className="wmde-markdown-var">
        <MarkdownWrapper>
          {this.editorUrl && (
            <EditorUrl target="_blank" rel="noreferrer" href={`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`}>
              Edit this page
            </EditorUrl>
          )}
          {this.example && (
            <Example>
              <h3>Example</h3>
              {this.example}
            </Example>
          )}
          <MarkdownPreviewExample data={{ data, components, source }} style={{ border: 0, boxShadow: '0 0 0' }} />
          {this.editorUrl && (
            <EditorUrl target="_blank" rel="noreferrer" href={`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`}>
              Edit this page
            </EditorUrl>
          )}
        </MarkdownWrapper>
        <Footer>
          <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md" target="__blank">
            <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg" />
          </a>
          <a href="https://github.com/uiwjs/react-color/issues" target="__blank">
            <img src="https://img.shields.io/github/issues/uiwjs/react-color" alt="Github Issues" />
          </a>
          <a href="https://github.com/uiwjs/react-color/stargazers" target="__blank">
            <img src="https://img.shields.io/github/stars/uiwjs/react-color.svg" alt="Github Stars" />
          </a>
          <a href="https://github.com/uiwjs/react-color/releases" target="__blank">
            <img src="https://img.shields.io/github/release/uiwjs/react-color.svg" alt="Github Release" />
          </a>
          <a href="https://github.com/uiwjs/react-color" target="__blank">
            <img src="https://img.shields.io/dub/l/vibe-d.svg" alt="License MIT" />
          </a>
          <a href="https://www.npmjs.com/package/@uiw/react-color" target="__blank">
            <img src="https://img.shields.io/npm/v/@uiw/react-color.svg" alt="npm" />
          </a>
          <p>
            Copyright © 2021{' '}
            <a href="https://github.com/uiwjs" target="__blank">
              uiwjs
            </a>
            . All rights reserved.
          </p>
        </Footer>
      </Wrapper>
    );
  }
}
