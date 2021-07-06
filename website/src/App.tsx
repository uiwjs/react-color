import { useState } from 'react';
import {
  Saturation,
  Sketch,
  Alpha,
  Compact,
  Hue,
  Slider,
  ShadeSlider,
  hsvaToHex,
  hsvaToHslaString,
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
import mdStrSaturation from '@uiw/react-color-saturation/README.md';
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
  .replace(/<!--react-color-saturation-->/, mdStrSaturation.replace(/<!--footer-dividing-->([\s\S]*)/, ''))
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
                <Alpha
                  width={200}
                  hsva={hsva}
                  onChange={(newAlpha) => {
                    setHsva({ ...hsva, ...newAlpha });
                  }}
                />
                <Title>{`<Alpha />`}</Title>
                <Hue
                  width={200}
                  hue={hsva.h}
                  onChange={(newHue) => {
                    setHsva({ ...hsva, ...newHue });
                  }}
                />
                <Title>{`<Hue />`}</Title>
                <ShadeSlider
                  width={200}
                  hsva={hsva}
                  onChange={(newShade) => {
                    setHsva({ ...hsva, ...newShade });
                  }}
                />
                <Title>{`<ShadeSlider />`}</Title>
              </div>
              <Alpha
                width={16}
                height={310}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hsva={hsva}
                onChange={(newAlpha) => {
                  setHsva({ ...hsva, ...newAlpha });
                }}
              />
              <Hue
                width={16}
                height={310}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hue={hsva.h}
                onChange={(newHue) => {
                  setHsva({ ...hsva, ...newHue });
                }}
              />
              <ShadeSlider
                width={16}
                height={310}
                direction="vertical"
                style={{ marginLeft: 20 }}
                hsva={hsva}
                onChange={(newShade) => {
                  setHsva({ ...hsva, ...newShade });
                }}
              />
              <div style={{ marginLeft: 20 }}>
                <Sketch
                  color={hsva}
                  onChange={(color) => {
                    setHsva({ ...hsva, ...color.hsv });
                  }}
                />
                <Title>{`<Sketch color="${hsvaToHex(hsva)}" />`}</Title>
                <Slider style={{ width: 220 }} color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsv })} />
                <Title>{`<Slider color="${hsvaToHex(hsva)}" />`}</Title>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Compact
                style={{
                  boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
                }}
                color={hsva}
                onChange={(color) => setHsva({ ...hsva, ...color.hsv })}
              />
            </div>
          </div>
          <Markdown source={markdownStr} style={{ padding: '0px 20px 30px' }} />
        </div>
      </div>
    </div>
  );
}
