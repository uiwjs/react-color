import React, { useState } from 'react';
import { Saturation, Sketch, Alpha, Hue, ShadeSlider, hsvaToHslaString } from '@uiw/react-color';
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
            <Sketch
              style={{ marginLeft: 20 }}
              color={hsva}
              onChange={(color) => {
                setHsva({ ...hsva, ...color.hsv });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
