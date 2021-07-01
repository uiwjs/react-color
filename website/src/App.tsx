import React, { useState } from 'react';
import ColorSaturation, { hsvaToHslaString } from '@uiw/react-color-saturation';
import ColorAlpha from '@uiw/react-color-alpha';
import logo from './logo.svg';
import styles from './App.module.css';

export default function App() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <div className={styles.app}>
      <header className={styles.header} style={{ backgroundColor: hsvaToHslaString(hsva) }}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>React Color</h1>
        <p>Color picker component for React.</p>
      </header>
      <div className={styles.content}>
        <ColorSaturation
          hsva={hsva}
          onChange={(newColor) => {
            setHsva({ ...hsva, ...newColor, a: hsva.a });
          }}
        />
        <ColorAlpha
          hsva={hsva}
          onChange={(newColor) => {
            setHsva({ ...hsva, ...newColor });
          }}
        />
      </div>
    </div>
  );
}
