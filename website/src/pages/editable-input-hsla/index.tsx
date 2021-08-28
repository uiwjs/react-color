import { useContext } from 'react';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <EditableInputHSLA
        hsva={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-editable-input-hsla/README.md';
  getMdStr = () => import('@uiw/react-color-editable-input-hsla/README.md');
  example = (<Example />);
}
