import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import sprite from '../../image/sprite/sprite.svg';

function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <Link className={css.link_signin} to="login">
        <svg width="28" height="28">
          <use href={`${sprite}#icon-log-in-01`}></use>
        </svg>
        Log in
      </Link>
    </header>
  );
}
export default Header;
