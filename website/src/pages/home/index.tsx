import { useContext } from 'react';
import {
  Colorful,
  Sketch,
  Block,
  Circle,
  Compact,
  Wheel,
  Github,
  Material,
  Chrome,
  Saturation,
  Alpha,
  ShadeSlider,
  Hue,
  Swatch,
  Slider,
} from '@uiw/react-color';
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
            style={{ width: 222 }}
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
            colors={['#EB144C', '#FF6900', '#FCB900', '#FCF800', '#23D000', '#7BDCB5', '#00D084']}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsva } });
            }}
          />
          <Title>{`<Block color="${hsvaToHex(hsva)}" />`}</Title>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', paddingTop: 40 }}>
        <Saturation
          hsva={hsva}
          onChange={(color) => {
            dispatch!({ hsva: { ...hsva, ...color } });
          }}
        />
        <div style={{ flex: 1, display: 'flex', gap: '20px', flexDirection: 'column' }}>
          <Hue
            hue={hsva.h}
            onChange={(newHue) => {
              dispatch!({ hsva: { ...hsva, ...newHue } });
            }}
          />
          <Alpha
            hsva={hsva}
            onChange={(newAlpha) => {
              dispatch!({ hsva: { ...hsva, ...newAlpha } });
            }}
          />
          <ShadeSlider
            hsva={hsva}
            onChange={(newShade) => {
              dispatch!({ hsva: { ...hsva, ...newShade } });
            }}
          />
          <Slider
            color={hsva}
            onChange={(color) => {
              dispatch!({ hsva: { ...hsva, ...color.hsv } });
            }}
            customColorShades={[
              { color: '#000000', lightness: [50, 40, 30, 20, 10] },
              { color: '#ffffff', lightness: [95, 90, 80, 70, 60] },
            ]}
          />
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
