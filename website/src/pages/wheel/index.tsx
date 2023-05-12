import { useContext } from 'react';
import Wheel from '@uiw/react-color-wheel';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Wheel
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-wheel/README.md';
  getMdStr = () => import('@uiw/react-color-wheel/README.md');
  example = (<Example />);
}
