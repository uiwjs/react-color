import { useContext } from 'react';
import Colorful from '@uiw/react-color-colorful';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Colorful
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-colorful/README.md';
  getMdStr = () => import('@uiw/react-color-colorful/README.md');
  example = (<Example />);
}
