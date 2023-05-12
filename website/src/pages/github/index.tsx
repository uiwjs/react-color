import { useContext } from 'react';
import Github from '@uiw/react-color-github';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Github
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-github/README.md';
  getMdStr = () => import('@uiw/react-color-github/README.md');
  example = (<Example />);
}
