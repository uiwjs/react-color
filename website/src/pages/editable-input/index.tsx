import { useContext } from 'react';
import EditableInput from '@uiw/react-color-editable-input';
import { hsvaToHex, validHex, hexToHsva } from '@uiw/react-color';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div>
      <EditableInput
        label="Hex"
        value={hsvaToHex(hsva)}
        onChange={(value, evn) => {
          if (validHex(evn.target.value)) {
            dispatch!({ hsva: hexToHsva(evn.target.value) });
          }
        }}
        onBlur={(evn) => {
          const value = evn.target.value;
          if (value.replace(/^#/, '').length > 6) {
            evn.target.value = value.slice(0, value.startsWith('#') ? 7 : 6);
          }
        }}
        placement="top"
        style={{ width: 68, alignItems: 'flex-start' }}
      />
      <EditableInput
        label="Hex"
        placement="right"
        value={hsvaToHex(hsva)}
        onChange={(value, evn) => {
          if (validHex(evn.target.value)) {
            dispatch!({ hsva: hexToHsva(evn.target.value) });
          }
        }}
        labelStyle={{ position: 'relative', display: 'block' }}
        style={{
          width: 84,
          marginTop: 8,
        }}
      />
      <br />
      <EditableInput
        label="Hex"
        value={hsvaToHex(hsva)}
        onChange={(value, evn) => {
          if (validHex(evn.target.value)) {
            dispatch!({ hsva: hexToHsva(evn.target.value) });
          }
        }}
        placement="left"
        style={{ width: 84 }}
      />
      <EditableInput
        label="Alpha"
        value={hsva.a}
        onChange={(evn, value) => {
          let val = (Number(value) > 1 ? 1 : value) as number;
          dispatch!({ hsva: { ...hsva, a: val } });
        }}
        onBlur={(evn) => {
          if (Number(evn.target.value) > 1) {
            evn.target.value = '1';
          }
        }}
        labelStyle={{ position: 'relative', display: 'block' }}
        style={{
          width: 68,
          marginTop: 8,
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-editable-input/README.md';
  getMdStr = () => import('@uiw/react-color-editable-input/README.md');
  example = (<Example />);
}
