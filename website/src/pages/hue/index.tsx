import { useContext } from 'react';
import Hue from '@uiw/react-color-hue';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Hue
        hue={hsva.h}
        onChange={(newHue) => {
          dispatch!({ hsva: { ...hsva, ...newHue } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-hue/README.md';
  getMdStr = () => import('@uiw/react-color-hue/README.md');
  example = (<Example />);
}
