import { useContext } from 'react';
import Slider from '@uiw/react-color-slider';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Slider
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsv } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-slider/README.md';
  getMdStr = () => import('@uiw/react-color-slider/README.md');
  example = (<Example />);
}
