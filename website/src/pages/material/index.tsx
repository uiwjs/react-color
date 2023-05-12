import { useContext } from 'react';
import Material from '@uiw/react-color-material';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Material
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-material/README.md';
  getMdStr = () => import('@uiw/react-color-material/README.md');
  example = (<Example />);
}
