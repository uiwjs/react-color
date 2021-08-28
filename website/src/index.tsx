import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BACKGROUND_IMG } from '@uiw/react-color';
import Root from './pages/root';
import { reducer, Context, defaultContext } from './Store';
import './index.css';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  useEffect(() => {
    document.body.style.background = `url(${BACKGROUND_IMG}) left center`;
  }, []);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <Root />
    </Context.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
