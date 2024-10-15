import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) => (isActive ? css.active : '')}
      >
        Teachers
      </NavLink>
    </nav>
  );
}
export default Navigation;
