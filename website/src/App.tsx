import React, { useState } from 'react';
import ColorSaturation, { hsvaToHslaString } from '@uiw/react-color-saturation';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const [hsva, setHsva] = useState({ h: 0, s: 75, v: 82, a: 1 });
  return (
    <div className={styles.app}>
      <header
        className={styles.header}
        style={{ backgroundColor: hsvaToHslaString(hsva) }}
      >
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <div className={styles.content}>
        <ColorSaturation
          hsva={hsva}
          onChange={(newColor: any) => {
            newColor = { ...hsva, ...newColor };
            setHsva({ ...newColor });
          }}
        />
      </div>
    </div>
  );
}

export default App;
