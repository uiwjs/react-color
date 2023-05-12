import { useContext } from 'react';
import Chrome from '@uiw/react-color-chrome';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 300 }}>
      <Chrome
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-chrome/README.md';
  getMdStr = () => import('@uiw/react-color-chrome/README.md');
  example = (<Example />);
}
