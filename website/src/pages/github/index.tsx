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
          placement={GithubPlacement.BottonLeft}
          color={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.Botton}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <Github
          color={hsva}
          placement={GithubPlacement.BottonRight}
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
