import { useContext } from 'react';
import Block from '@uiw/react-color-block';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ minWidth: 300, display: 'flex', gap: '1rem' }}>
      <Block
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
      <Block
        color={hsva}
        showTriangle={false}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-block/README.md';
  getMdStr = () => import('@uiw/react-color-block/README.md');
  example = (<Example />);
}
