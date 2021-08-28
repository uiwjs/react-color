import { useContext } from 'react';
import Sketch from '@uiw/react-color-sketch';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Sketch
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-sketch/README.md';
  getMdStr = () => import('@uiw/react-color-sketch/README.md');
  example = (<Example />);
}
