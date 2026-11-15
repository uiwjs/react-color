import { memo, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuRouteObject } from '../router';

interface HeaderProps {
  menus: MenuRouteObject[];
}

interface NavItem {
  path: string;
  label: string;
  isComp?: boolean;
}

function toNavItem(item: MenuRouteObject): NavItem | null {
  if (!item.path || !item.label) {
    return null;
  }
  return { path: item.path, label: item.label, isComp: item.isComp };
}

function Header(props: HeaderProps) {
  const { menus } = props;
  const location = useLocation();
  const [pressed, setPressed] = useState<string | null>(null);
  const items = menus.map(toNavItem).filter((item): item is NavItem => item !== null);
  const pickers = items.filter((item) => item.isComp);
  const parts = items.filter((item) => item.path !== '/' && !item.isComp);
  const pending = pressed && pressed !== location.pathname ? pressed : null;

  useEffect(() => {
    setPressed(null);
  }, [location.pathname]);

  const markPressed = (path: string) => {
    if (path !== location.pathname) {
      setPressed(path);
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-row">
        <NavLink
          to="/"
          end
          discover="none"
          className="brand"
          onPointerDown={() => markPressed('/')}
          onClick={() => markPressed('/')}
        >
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <strong>react-color</strong>
            <em>v{VERSION}</em>
          </span>
        </NavLink>
        <div className="topbar-tools">
          <dark-mode permanent light="Dark" dark="Light"></dark-mode>
          <a className="github-link" href="https://github.com/uiwjs/react-color" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <nav className="site-nav" aria-label="Components" aria-busy={pending ? true : undefined}>
        <NavGroup title="Pickers" items={pickers} pending={pending} onPress={markPressed} />
        <NavGroup title="Parts" items={parts} pending={pending} onPress={markPressed} />
      </nav>
      {pending && (
        <div className="nav-progress" role="progressbar" aria-label="Loading page">
          <span />
        </div>
      )}
    </header>
  );
}

function NavGroup(props: { title: string; items: NavItem[]; pending: string | null; onPress: (path: string) => void }) {
  const { title, items, pending, onPress } = props;
  return (
    <div className="nav-group">
      <span className="nav-group-title">{title}</span>
      <div className="nav-links">
        {items.map((item) => {
          const current = pending === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              discover="none"
              className={({ isActive }) =>
                ['site-link', item.isComp ? 'is-picker' : '', isActive || current ? 'is-current' : ''].filter(Boolean).join(' ')
              }
              onPointerDown={() => onPress(item.path)}
              onClick={() => onPress(item.path)}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Header);
