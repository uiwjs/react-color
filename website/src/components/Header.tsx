import { NavLink } from 'react-router-dom';
import Sketch from '@uiw/react-color-sketch';
import { useContext } from 'react';
import { MenuRouteObject } from '../router';
import styles from './Header.module.less';
import { ReactComponent as Home } from '../assets/home.svg';
import { Context } from '../Store';

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
      <div className={styles.logo}>🎨</div>
      <div className={styles.detail}>
        <span>
          <b>react-color</b> is a tiny color picker widget component for react apps. These components can be installed and used
          separately.
        </span>
        <Toolbar />
      </div>
      <div className={styles.header}>
        {menus.map((item, idx) => {
          if (!item.path) {
            return null;
          }
          return (
            <NavLink key={idx} to={item.path} className={item.isComp ? styles.comps : ''}>
              {item.path === '/' && <Home />}
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
