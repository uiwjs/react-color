import { createRoot } from 'react-dom/client';
import { useEffect, useReducer } from 'react';
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

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
