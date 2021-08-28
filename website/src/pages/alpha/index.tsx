import { useContext } from 'react';
import Alpha from '@uiw/react-color-alpha';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 300 }}>
      <Alpha
        hsva={hsva}
        onChange={(newAlpha) => {
          dispatch!({ hsva: { ...hsva, ...newAlpha } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-alpha/README.md';
  getMdStr = () => import('@uiw/react-color-alpha/README.md');
  example = (<Example />);
}
