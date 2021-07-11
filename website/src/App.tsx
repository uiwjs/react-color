import { useState } from 'react';
import {
  Saturation,
  Sketch,
  Alpha,
  Compact,
  Hue,
  Slider,
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
import mdStrSaturation from '@uiw/react-color-saturation/README.md';
import mdStrEditableInput from '@uiw/react-color-editable-input/README.md';
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
  .replace(/<!--react-color-saturation-->/, mdStrSaturation.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
  .replace(/<!--react-color-editable-input-->/, mdStrEditableInput.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
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
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
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
                      style={{ width: 68, flexDirection: 'column-reverse', alignItems: 'flex-start' }}
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
                        flexDirection: 'column',
                        marginTop: 8,
                      }}
                    />
                  </div>
                  <div>
                    <EditableInput
                      label="Hex"
                      value={hsvaToHex(hsva)}
                      onChange={(evn) => {
                        if (validHex(evn.target.value)) {
                          setHsva(hexToHsva(evn.target.value));
                        }
                      }}
                      style={{ width: 84, marginTop: 14 }}
                    />
                    <EditableInput
                      label="Hex"
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
                        flexDirection: 'row-reverse',
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
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 36 }}>
              <div>
                <Sketch
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Sketch color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
              <div style={{ paddingRight: 40 }}></div>
              <div>
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
                <Material
                  color={hsvaToHex(hsva)}
                  style={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 2px 10px, rgb(0 0 0 / 16%) 0px 2px 5px' }}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsva });
                  }}
                />
                <Title>{`<Material color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
            </div>
          </div>
          <Markdown source={markdownStr} style={{ padding: '0px 20px 30px' }} />
        </div>
      </div>
    </div>
  );
}
