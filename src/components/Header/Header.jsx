import { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserActions from '../UserActions/UserActions';
import css from './Header.module.css';
import RegisterModal from '../RegiserModal/RegisterModal';
import LogInModal from '../LogInModal/LogInModal';

function Header({ theme, toggleTheme, headerClass }) {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <header className={`${css.header} ${headerClass}`}>
      <Logo />
      <Navigation theme={theme} />
      <UserActions
        theme={theme}
        toggleTheme={toggleTheme}
        handleOpen={handleOpen}
        handleOpenRegister={handleOpenRegister}
      />
      <LogInModal open={open} handleClose={handleClose} theme={theme} />
      <RegisterModal open={openRegister} handleClose={handleCloseRegister} />
    </header>
  );
}
export default Header;
