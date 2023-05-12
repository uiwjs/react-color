import { useContext } from 'react';
import Circle from '@uiw/react-color-circle';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div style={{ width: 256 }}>
      <Circle
        colors={[
          '#f44336',
          '#e91e63',
          '#9c27b0',
          '#673ab7',
          '#3f51b5',
          '#2196f3',
          '#03a9f4',
          '#00bcd4',
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#cddc39',
          '#ffeb3b',
          '#ffc107',
          '#ff9800',
          '#ff5722',
          '#795548',
          '#607d8b',
        ]}
        color={hsva}
        onChange={(color) => {
          dispatch!({ hsva: { ...hsva, ...color.hsva } });
        }}
      />
    </div>
  );
}

export class Component extends Markdown {
  editorUrl = '/packages/color-circle/README.md';
  getMdStr = () => import('@uiw/react-color-circle/README.md');
  example = (<Example />);
}
