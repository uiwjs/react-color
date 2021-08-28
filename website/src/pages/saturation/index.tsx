import { useContext } from 'react';
import Saturation from '@uiw/react-color-saturation';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Saturation
        hsva={hsva}
        onChange={(newColor) => {
          dispatch!({ hsva: { ...hsva, ...newColor, a: hsva.a } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-saturation/README.md';
  getMdStr = () => import('@uiw/react-color-saturation/README.md');
  example = (<Example />);
}
