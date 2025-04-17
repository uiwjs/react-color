import { useContext } from 'react';
import Chrome from '@uiw/react-color-chrome';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Chrome
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
      <Chrome
        color={hsva}
        showTriangle={false}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-chrome/README.md';
  getMdStr = () => import('@uiw/react-color-chrome/README.md');
  example = (<Example />);
}
