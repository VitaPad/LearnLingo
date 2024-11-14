import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

function Logo() {
  return (
    <NavLink to="/" className={css.navLogo}>
      <svg width="28" height="28">
        <use href="/sprite/sprite.svg#icon-ukraine-1"></use>
      </svg>
      <span className={css.logo}>LearnLingo</span>
    </NavLink>
  );
}
export default Logo;
