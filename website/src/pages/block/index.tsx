import { useContext } from 'react';
import Block from '@uiw/react-color-block';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 300 }}>
      <Block
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-block/README.md';
  getMdStr = () => import('@uiw/react-color-block/README.md');
  example = (<Example />);
}
