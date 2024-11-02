import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation({ theme }) {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={buildLinkClass}
        style={{
          '--primary-main': theme.palette.primary.main,
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={buildLinkClass}
        style={{
          '--primary-main': theme.palette.primary.main,
        }}
      >
        Teachers
      </NavLink>
    </nav>
  );
}
export default Navigation;
