import { NavLink } from 'react-router-dom';
import { Routes } from '../router';
import styles from './Header.module.less';
import { ReactComponent as Home } from '../assets/home.svg';

interface HeaderProps {
  menus: Routes[];
}

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
