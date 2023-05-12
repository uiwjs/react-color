import { useContext } from 'react';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <ShadeSlider
        hsva={hsva}
        onChange={(newShade) => {
          dispatch!({ hsva: { ...hsva, ...newShade } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-shade-slider/README.md';
  getMdStr = () => import('@uiw/react-color-shade-slider/README.md');
  example = (<Example />);
}
