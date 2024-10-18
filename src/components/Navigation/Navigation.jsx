import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation({ theme }) {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : '')}
        style={{ '--hover-color': theme.palette.primary.main }}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) => (isActive ? css.active : '')}
        style={{ '--hover-color': theme.palette.primary.main }}
      >
        Teachers
      </NavLink>
    </nav>
  );
}
export default Navigation;
