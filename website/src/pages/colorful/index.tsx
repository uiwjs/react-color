import { useContext, useState } from 'react';
import Colorful from '@uiw/react-color-colorful';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  const [disableAlpha, setDisableAlpha] = useState(false);
  return (
    <div style={{ width: 256 }}>
      <Colorful
        color={hsva}
        disableAlpha={disableAlpha}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
      <div>
        <label>
          <input type="checkbox" checked={disableAlpha} onChange={(evn) => setDisableAlpha(evn.target.checked)} />
          {disableAlpha ? 'Hide' : 'Show'} Alpha
        </label>
      </div>
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-colorful/README.md';
  getMdStr = () => import('@uiw/react-color-colorful/README.md');
  example = (<Example />);
}
