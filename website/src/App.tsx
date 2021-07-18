import { useState } from 'react';
import {
  Saturation,
  Sketch,
  Alpha,
  Block,
  Colorful,
  Circle,
  Compact,
  Chorme,
  Wheel,
  Swatch,
  Github,
  Hue,
  Slider,
  EditableInputRGBA,
  EditableInputHSLA,
  GithubPlacement,
  ShadeSlider,
  EditableInput,
  Material,
  hsvaToHex,
  hexToHsva,
  hsvaToHslaString,
  validHex,
  BACKGROUND_IMG,
} from '@uiw/react-color';
import GitHubCorners from '@uiw/react-github-corners';
import Markdown from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import styles from './App.module.css';
import Title from './components/Title';

import mdStr from '@uiw/react-color/README.md';
import mdStrSketch from '@uiw/react-color-sketch/README.md';
import mdStrSlider from '@uiw/react-color-slider/README.md';
import mdStrCompact from '@uiw/react-color-compact/README.md';
import mdStrMaterial from '@uiw/react-color-material/README.md';
import mdStrColorful from '@uiw/react-color-colorful/README.md';
import mdStrCircle from '@uiw/react-color-circle/README.md';
import mdStrChorme from '@uiw/react-color-chorme/README.md';
import mdStrWheel from '@uiw/react-color-wheel/README.md';
import mdStrBlock from '@uiw/react-color-block/README.md';
import mdStrGithub from '@uiw/react-color-github/README.md';
import mdStrSwatch from '@uiw/react-color-swatch/README.md';
import mdStrSaturation from '@uiw/react-color-saturation/README.md';
import mdStrEditableInput from '@uiw/react-color-editable-input/README.md';
import mdStrEditableInputRBGA from '@uiw/react-color-editable-input-rgba/README.md';
import mdStrEditableInputHSLA from '@uiw/react-color-editable-input-hsla/README.md';
import mdStrAlpha from '@uiw/react-color-alpha/README.md';
import mdStrHue from '@uiw/react-color-hue/README.md';
import mdStrShadeSlider from '@uiw/react-color-shade-slider/README.md';
import mdStrConvert from '@uiw/color-convert/README.md';
import mdStrDragEventInteractive from '@uiw/react-drag-event-interactive/README.md';

let markdownStr = mdStr
  .replace(/([\s\S]*)<!--dividing-->/, '')
  .replace(/<!--react-color-sketch-->/, mdStrSketch.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-slider-->/, mdStrSlider.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-compact-->/, mdStrCompact.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-material-->/, mdStrMaterial.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-colorful-->/, mdStrColorful.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-wheel-->/, mdStrWheel.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-block-->/, mdStrBlock.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-github-->/, mdStrGithub.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-circle-->/, mdStrCircle.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-chorme-->/, mdStrChorme.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-swatch-->/, mdStrSwatch.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-saturation-->/, mdStrSaturation.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-editable-input-->/, mdStrEditableInput.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-editable-input-rgba-->/, mdStrEditableInputRBGA.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-editable-input-hsla-->/, mdStrEditableInputHSLA.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-alpha-->/, mdStrAlpha.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-hue-->/, mdStrHue.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-shade-slider-->/, mdStrShadeSlider.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--color-convert-->/, mdStrConvert.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-drag-event-interactive-->/, mdStrDragEventInteractive.replace(/<!--footer-dividing-->([\s\S]*)/, ''));

export default function App() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });

  return (
    <div style={{ background: `url(${BACKGROUND_IMG}) left center` }}>
      <div className={styles.app} style={{ backgroundColor: hsvaToHslaString(hsva) }}>
        <GitHubCorners fixed size={56} target="_blank" href="https://github.com/uiwjs/react-color" />
        <div className={styles.warpper}>
          <header className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h1>React Color</h1>
          </header>
          <div className={styles.content}>
            <div className={styles.example}>
              <div>
                <Saturation
                  hsva={hsva}
                  style={{ height: 180 }}
                  onChange={(newColor) => {
                    setHsva({ ...hsva, ...newColor, a: hsva.a });
                  }}
                />
                <Title>{`<Saturation />`}</Title>
              </div>
              <Alpha
                width={16}
                height={190}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hsva={hsva}
                onChange={(newAlpha) => {
                  setHsva({ ...hsva, ...newAlpha });
                }}
              />
              <Hue
                width={16}
                height={190}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hue={hsva.h}
                onChange={(newHue) => {
                  setHsva({ ...hsva, ...newHue });
                }}
              />
              <ShadeSlider
                width={16}
                height={190}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hsva={hsva}
                onChange={(newShade) => {
                  setHsva({ ...hsva, ...newShade });
                }}
              />
              <div>
                <div style={{ marginLeft: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ padding: '0 10px 0 0' }}>
                    <EditableInput
                      label="Hex"
                      value={hsvaToHex(hsva)}
                      onChange={(evn, value) => {
                        if (validHex(evn.target.value)) {
                          setHsva(hexToHsva(evn.target.value));
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
                      onChange={(evn) => {
                        if (validHex(evn.target.value)) {
                          setHsva(hexToHsva(evn.target.value));
                        }
                      }}
                      labelStyle={{ position: 'relative', display: 'block' }}
                      style={{
                        width: 84,
                        marginTop: 8,
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <EditableInput
                      label="Hex"
                      value={hsvaToHex(hsva)}
                      onChange={(evn) => {
                        if (validHex(evn.target.value)) {
                          setHsva(hexToHsva(evn.target.value));
                        }
                      }}
                      placement="left"
                      style={{ width: 84 }}
                    />
                    <EditableInput
                      label="Alpha"
                      value={hsva.a}
                      onChange={(evn, value) => {
                        let val = (value > 1 ? 1 : value) as number;
                        setHsva({ ...hsva, a: val });
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
                </div>
                <div style={{ marginLeft: 20 }}>
                  <Alpha
                    width={180}
                    hsva={hsva}
                    onChange={(newAlpha) => {
                      setHsva({ ...hsva, ...newAlpha });
                    }}
                  />
                  <Title>{`<Alpha />`}</Title>
                  <Hue
                    width={180}
                    hue={hsva.h}
                    onChange={(newHue) => {
                      setHsva({ ...hsva, ...newHue });
                    }}
                  />
                  <Title>{`<Hue />`}</Title>
                  <ShadeSlider
                    width={180}
                    hsva={hsva}
                    onChange={(newShade) => {
                      setHsva({ ...hsva, ...newShade });
                    }}
                  />
                  <Title>{`<ShadeSlider />`}</Title>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 0 0 0' }}>
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
                onChange={(hsva) => setHsva(hsva)}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 0 0 0' }}>
              <EditableInputHSLA
                hsva={hsva}
                style={{ width: 150, marginRight: 20 }}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 0 10px 0' }}>
              <EditableInputRGBA
                hsva={hsva}
                style={{ width: 130, marginRight: 20 }}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              />
              <EditableInputRGBA
                hsva={hsva}
                placement="top"
                style={{ width: 130 }}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <EditableInputRGBA
                hsva={hsva}
                placement="left"
                style={{ width: 158, marginRight: 20 }}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              />
              <EditableInputRGBA
                hsva={hsva}
                placement="right"
                style={{ width: 158 }}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
              />
            </div>
            <div className={styles.exampleWarp} style={{}}>
              <div>
                <Colorful
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Colorful color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ margin: '0 30px' }}>
                <Sketch
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Sketch color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div>
                <Block
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Block color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
            </div>
            <div className={styles.exampleWarp} style={{}}>
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
                  color={hsva}
                  style={{ width: 252 }}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Circle color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Compact
                  style={{
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
                  }}
                  color={hsvaToHex(hsva)}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Compact color="${hsvaToHex(hsva)}" />`}</Title>
                <Slider style={{ width: 220 }} color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsv })} />
                <Title>{`<Slider color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ marginLeft: 25 }}>
                <Wheel
                  color={hsva}
                  width={140}
                  height={140}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title style={{ textAlign: 'center' }}>{`<Wheel color="..." />`}</Title>
              </div>
            </div>
            <div className={styles.exampleWarp}>
              <div>
                <Github
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Github color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ marginLeft: 25 }}>
                <Material
                  color={hsva}
                  style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 2px 10px, rgb(0 0 0 / 16%) 0px 2px 5px' }}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title style={{ minWidth: 180 }}>{`<Material color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ marginLeft: 25 }}>
                <Chorme
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Chorme color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
            </div>
          </div>
          <Markdown source={markdownStr} style={{ padding: '0px 20px 30px' }} />
        </div>
      </div>
    </div>
  );
}
