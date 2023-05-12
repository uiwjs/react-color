import { useContext } from 'react';
import EditableInputRGBA from '@uiw/react-color-editable-input-rgba';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 0 10px 0' }}>
        <EditableInputRGBA
          style={{ maxWidth: 180, marginRight: 15 }}
          hsva={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <EditableInputRGBA
          style={{ maxWidth: 180 }}
          hsva={hsva}
          placement="top"
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <EditableInputRGBA
          style={{ maxWidth: 180, marginRight: 15 }}
          hsva={hsva}
          placement="left"
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
        <EditableInputRGBA
          style={{ maxWidth: 180 }}
          hsva={hsva}
          placement="right"
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color.hsva } });
          }}
        />
      </div>
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-editable-input-rgba/README.md';
  getMdStr = () => import('@uiw/react-color-editable-input-rgba/README.md');
  example = (<Example />);
}
