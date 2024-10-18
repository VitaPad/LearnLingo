import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserActions from '../UserActions/UserActions';
import css from './Header.module.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation theme={theme} />
      <UserActions theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
export default Header;
