import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.app}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://github.com/kktjs/kkt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn KKT
        </a>
      </header>
    </div>
  );
}

export default App;
