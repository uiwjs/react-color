import { useContext } from 'react';
import Swatch from '@uiw/react-color-swatch';
import { hsvaToHex } from '@uiw/react-color';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Swatch
        colors={[
          '#D0021B',
          '#F5A623',
          '#f8e61b',
          '#8B572A',
          '#7ED321',
          '#417505',
          '#BD10E0',
          '#9013FE',
          '#4A90E2',
          '#50E3C2',
          '#B8E986',
          '#000000',
          '#4A4A4A',
          '#9B9B9B',
          '#FFFFFF',
        ]}
        color={hsvaToHex(hsva)}
        onChange={(hsva) => {
          dispatch!({ hsva: { ...hsva, ...hsva } });
        }}
      />
    </div>
  );
}

export default class Page extends Markdown {
  editorUrl = '/packages/color-swatch/README.md';
  getMdStr = () => import('@uiw/react-color-swatch/README.md');
  example = (<Example />);
}
