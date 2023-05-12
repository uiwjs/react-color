import { useContext } from 'react';
import Compact from '@uiw/react-color-compact';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Compact
        color={hsva}
        style={{
          boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
        }}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-compact/README.md';
  getMdStr = () => import('@uiw/react-color-compact/README.md');
  example = (<Example />);
}
