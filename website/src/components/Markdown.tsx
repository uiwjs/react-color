import { Component } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import styles from './Markdown.module.less';

interface MarkdownProps {}
interface MarkdownState {
  mdStr: string;
}

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
          mdStr: str.default || str,
        });
      });
    }
  }
  render() {
    return (
      <div className={styles.warpper}>
        <div className={styles.markdown}>
          {this.example && <div className={styles.example}>{this.example}</div>}
          <MarkdownPreview source={this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/, '')} style={{ padding: '20px 26px' }} />
        </div>
        <div className={styles.footer}>
          <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md" target="__blank">
            <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg" />
          </a>
          <a href="https://github.com/uiwjs/react-color/issues" target="__blank">
            <img src="https://img.shields.io/github/issues/uiwjs/react-color.svg" alt="Github Issues" />
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
        </div>
      </div>
    );
  }
}
