import { NavLink } from 'react-router-dom';
import Sketch from '@uiw/react-color-sketch';
import { useContext } from 'react';
import styled from 'styled-components';
import { MenuRouteObject } from '../router';
import { ReactComponent as Home } from '../assets/home.svg';
import { Context } from '../Store';

const Detail = styled.div`
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
  > span {
    background-color: var(--color-theme-bg);
    padding: 0 5px;
  }
`;
const Logo = styled.div`
  text-align: center;
  font-size: 124px;
  padding: 100px 0 32px 0;
`;
const HeaderWrapper = styled.header`
  max-width: 860px;
  margin: 0 auto;
  padding: 21px 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 6px 10px;
    padding: 5px 10px;
    background-color: #e6e6e6;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #333;
    transition: background-color 0.3s;
    &.comps {
      background: #10b316;
      color: white !important;
    }
    &.active {
      color: white;
      background: #333 !important;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

interface HeaderProps {
  menus: MenuRouteObject[];
}

const Toolbar = () => {
  const { hsva, dispatch } = useContext(Context);
  return (
    <Sketch
      color={hsva}
      style={{ margin: '20px auto 0 auto' }}
      onChange={(color) => {
        dispatch!({ hsva: { ...hsva, ...color.hsva } });
      }}
    />
  );
};

export default function Header(props: HeaderProps) {
  const { menus } = props;
  return (
    <div>
      <Logo>🎨</Logo>
      <Detail>
        <span>
          <b>react-color</b> is a tiny color picker widget component for react apps. These components can be installed and used
          separately.
        </span>
        <Toolbar />
      </Detail>
      <HeaderWrapper>
        {menus.map((item, idx) => {
          if (!item.path) {
            return null;
          }
          return (
            <NavLink key={idx} to={item.path} className={item.isComp ? 'comps' : ''}>
              {item.path === '/' && <Home />}
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </HeaderWrapper>
    </div>
  );
}
