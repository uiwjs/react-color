import type { CSSProperties } from 'react';
import { useReducer } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { hsvaToHslaString } from '@uiw/react-color';
import '@wcj/dark-mode';
import { reducer, Context, defaultContext } from '../Store';
import { routes } from '../router';
import Header from '../components/Header';

export default function Root() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const accent = hsvaToHslaString({ ...state.hsva, a: 1 });
  const style = { '--accent': accent } as CSSProperties;
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <div className="shell" style={style}>
        <Header menus={routes.children || []} />
        {location.pathname === '/' && (
          <section className="hero">
            <p className="hero-kicker">Color picker widgets</p>
            <h1>Tiny pickers for React apps</h1>
            <p>
              Install one component, or compose the sliders, inputs, and swatches yourself. Every page below uses the same color.
            </p>
          </section>
        )}
        <main className="content">
          <Outlet />
        </main>
        <ScrollRestoration />
      </div>
    </Context.Provider>
  );
}
