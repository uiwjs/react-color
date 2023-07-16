import GitHubCorners from '@uiw/react-github-corners';
import { BACKGROUND_IMG } from '@uiw/react-color';
import { useEffect, useReducer } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { hsvaToHslaString } from '@uiw/react-color';
import '@wcj/dark-mode';
import styled from 'styled-components';
import { reducer, Context, defaultContext } from '../Store';
import { routes } from '../router';
import Header from '../components/Header';

const Wrapper = styled.div`
  transition: background-color 0.3s ease 0s;
  min-height: 100vh;
  dark-mode {
    font-size: 18px;
    position: fixed;
    top: 10px;
    left: 10px;
  }
`;

const Version = styled.div`
  position: fixed;
  left: 88px;
  top: 12px;
  background: var(--color-theme-bg);
  border-radius: 3px;
  padding: 0px 6px;
`;

export default function Root() {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  useEffect(() => {
    document.body.style.background = `url(${BACKGROUND_IMG}) left center`;
  }, []);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <Wrapper style={{ backgroundColor: hsvaToHslaString(state.hsva) }}>
        <dark-mode permanent light="Dark" dark="Light"></dark-mode>
        <Version>v{VERSION}</Version>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-color" />
        <Header menus={routes.children || []} />
        <Outlet />
        <ScrollRestoration />
      </Wrapper>
    </Context.Provider>
  );
}
