import { Fragment, useContext } from 'react';
import Github, { GithubPlacement } from '@uiw/react-color-github';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <Fragment>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Github
          color={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.Top}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.TopLeft}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 20 }}>
        <Github
          placement={GithubPlacement.Left}
          color={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.LeftTop}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.LeftBottom}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 20 }}>
        <Github
          placement={GithubPlacement.Right}
          color={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.RightTop}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.RightBottom}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 20 }}>
        <Github
          placement={GithubPlacement.BottomLeft}
          color={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.Bottom}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.BottomRight}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
    </Fragment>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-github/README.md';
  getMdStr = () => import('@uiw/react-color-github/README.md');
  example = (<Example />);
}
