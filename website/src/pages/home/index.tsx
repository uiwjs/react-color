import { useContext } from 'react';
import { Colorful, Sketch, Block, Circle, Compact, Wheel, Github, Material, Chrome } from '@uiw/react-color';
import { hsvaToHex } from '@uiw/react-color';
import Markdown from '../../components/Markdown';
import { Context } from '../../Store';
import Title from '../../components/Title';
import styles from './index.module.less';

function Example() {
  const { hsva, dispatch } = useContext(Context);
  return (
    <div>
      <div className={styles.warpper}>
        <div>
          <Colorful
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Colorful color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
        <div style={{ marginLeft: 60, marginRight: 60 }}>
          <Sketch
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Sketch color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
        <div>
          <Chrome
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Chrome color="..." />`}</Title>
        </div>
      </div>
      <div className={styles.warpper}>
        <div>
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
            style={{ width: 252 }}
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Circle color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <Compact
            color={hsva}
            style={{
              boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
            }}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Compact color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
        <div style={{ marginLeft: 25 }}>
          <Wheel
            color={hsva}
            width={140}
            height={140}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Wheel color="..." />`}</Title>
        </div>
      </div>
      <div className={styles.warpper}>
        <div>
          <Github
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Github color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
        <div style={{ marginRight: 30, marginLeft: 30 }}>
          <Material
            color={hsva}
            style={{
              boxShadow: 'rgb(0 0 0 / 12%) 0px 2px 10px, rgb(0 0 0 / 16%) 0px 2px 5px',
            }}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Material color="..." />`}</Title>
        </div>
        <div>
          <Block
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Block color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
      </div>
    </div>
  );
}

export class Component extends Markdown {
  displayName = 'HomePage';
  editorUrl = '/packages/color/README.md';
  getMdStr = () => import('@uiw/react-color/README.md');
  example = (<Example />);
}
