import React, { useState } from 'react';
import { ColorSaturation, ColorAlpha, ColorHue, ColorShadeSlider, hsvaToHslaString } from '@uiw/react-color';
import logo from './logo.svg';
import styles from './App.module.css';
import Title from './components/Title';

export default function App() {
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  return (
    <div className={styles.app} style={{ backgroundColor: hsvaToHslaString(hsva) }}>
      <div className={styles.warpper}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>React Color</h1>
          <p>Color picker component for React.</p>
        </header>
        <div className={styles.content}>
          <div style={{ display: 'flex' }}>
            <div>
              <ColorSaturation
                hsva={hsva}
                onChange={(newColor) => {
                  setHsva({ ...hsva, ...newColor, a: hsva.a });
                }}
              />
              <Title>{`<Saturation />`}</Title>
              <ColorAlpha
                width={200}
                hsva={hsva}
                onChange={(newAlpha) => {
                  setHsva({ ...hsva, ...newAlpha });
                }}
              />
              <Title>{`<Alpha />`}</Title>
              <ColorHue
                width={200}
                hue={hsva.h}
                onChange={(newHue) => {
                  setHsva({ ...hsva, ...newHue });
                }}
              />
              <Title>{`<Hue />`}</Title>
              <ColorShadeSlider
                width={200}
                hsva={hsva}
                onChange={(newShade) => {
                  setHsva({ ...hsva, ...newShade });
                }}
              />
              <Title>{`<ShadeSlider />`}</Title>
            </div>
            <ColorAlpha
              width={16}
              height={323}
              direction="vertical"
              style={{ marginLeft: 20 }}
              hsva={hsva}
              onChange={(newAlpha) => {
                setHsva({ ...hsva, ...newAlpha });
              }}
            />
            <ColorHue
              width={16}
              height={323}
              direction="vertical"
              style={{ marginLeft: 20 }}
              hue={hsva.h}
              onChange={(newHue) => {
                setHsva({ ...hsva, ...newHue });
              }}
            />
            <ColorShadeSlider
              width={16}
              height={323}
              direction="vertical"
              style={{ marginLeft: 20 }}
              hsva={hsva}
              onChange={(newShade) => {
                setHsva({ ...hsva, ...newShade });
              }}
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
