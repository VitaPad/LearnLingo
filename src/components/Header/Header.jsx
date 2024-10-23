import { useState } from 'react';
import LogInModal from '../LoginModal/LoginModal';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserActions from '../UserActions/UserActions';
import css from './Header.module.css';

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <header className={css.header}>
      <Logo />
      <Navigation theme={theme} />
      <UserActions
        theme={theme}
        toggleTheme={toggleTheme}
        handleOpen={handleOpen}
      />
      <LogInModal open={open} handleClose={handleClose} theme={theme} />
    </header>
  );
}
export default Header;
