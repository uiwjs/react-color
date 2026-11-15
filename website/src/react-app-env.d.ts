/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare var VERSION: string;

declare namespace JSX {
  interface IntrinsicElements {
    'dark-mode': React.DetailedHTMLAttributes<HTMLElement> & {
      permanent?: boolean;
      light?: string;
      dark?: string;
    };
  }
}

declare module '*.md' {
  import { CodeBlockData } from 'markdown-react-code-preview-loader';
  const src: CodeBlockData;
  export default src;
}