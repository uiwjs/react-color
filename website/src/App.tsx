import React, { useState } from 'react';
import { Saturation, Sketch, Alpha, Hue, ShadeSlider, hsvaToHslaString } from '@uiw/react-color';
import GitHubCorners from '@uiw/react-github-corners';
import Markdown from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import styles from './App.module.css';
import Title from './components/Title';
import mdStr from '@uiw/react-color/README.md';

export default function App() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  console.log('mdStr:', mdStr);
  return (
    <div className={styles.app} style={{ backgroundColor: hsvaToHslaString(hsva) }}>
      <GitHubCorners fixed size={56} target="_blank" href="https://github.com/uiwjs/react-color" />
      <div className={styles.warpper}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>React Color</h1>
          <p>Color picker component for React.</p>
        </header>
        <div className={styles.content}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              <Saturation
                hsva={hsva}
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
              height={323}
              direction="vertical"
              style={{ marginLeft: 20 }}
              hsva={hsva}
              onChange={(newAlpha) => {
                setHsva({ ...hsva, ...newAlpha });
              }}
            />
            <Hue
              width={16}
              height={323}
              direction="vertical"
              style={{ marginLeft: 20 }}
              hue={hsva.h}
              onChange={(newHue) => {
                setHsva({ ...hsva, ...newHue });
              }}
            />
            <ShadeSlider
              width={16}
              height={323}
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
              <Title>{`<Sketch />`}</Title>
            </div>
          </div>
        </div>
        <Markdown source={mdStr} style={{ padding: '0px 20px 30px' }} />
      </div>
    </div>
  );
}
