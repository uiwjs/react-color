import { useContext } from 'react';
import Block from '@uiw/react-color-block';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ minWidth: 300, display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Block
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
      <Block
        color={hsva}
        widthBlock={200}
        swatchStyle={{ style: { width: 30, height: 30, borderRadius: '50%' } }}
        showTriangle={false}
        showMainBlock={true}
        showSmallBlock={false}
        flexCenter={true}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
      <Block
        color={hsva}
        swatchStyle={{ style: { width: 22, height: 22 } }}
        showTriangle={true}
        showMainBlock={false}
        showSmallBlock={true}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />

      <Block
        color={hsva}
        widthBlock={297}
        swatchStyle={{ style: { width: 22, height: 22 } }}
        showTriangle={false}
        showMainBlock={false}
        showSmallBlock={true}
        flexCenter={true}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-block/README.md';
  getMdStr = () => import('@uiw/react-color-block/README.md');
  example = (<Example />);
}
