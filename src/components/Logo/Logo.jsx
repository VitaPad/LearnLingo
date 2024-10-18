import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import sprite from '../../image/sprite/sprite.svg';
function Logo() {
  return (
    <NavLink to="/" className={css.navLogo}>
      <svg width="28" height="28">
        <use href={`${sprite}#icon-ukraine-1`}></use>
      </svg>
      <span className={css.logo}>LearnLingo</span>
    </NavLink>
  );
}
export default Logo;
