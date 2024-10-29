import { Button } from '@mui/material';
/* import sprite from '../../image/sprite/sprite.svg'; */
import css from './UserAction.module.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logoutUser } from '../../services/authService';
import LogOut from '../LogOut/LogOut';

function UserActions({ theme, toggleTheme, handleOpen, handleOpenRegister }) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); // Оновлює стан користувача
    });
    return unsubscribe; // Відписка від onAuthStateChanged при розмонтуванні компоненти
  }, [auth]);

  const handleLogout = async () => {
    try {
      await logoutUser(auth);
      setUser(null); // Очистка стану користувача після виходу
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className={css.userActions}>
      {user ? (
        <LogOut theme={theme} onClick={handleLogout} />
      ) : (
        /*    <Button onClick={handleLogout} className={css.logoutButton}>
          <svg
            className={css.svg}
            width="28"
            height="28"
            style={{
              '--primary-main': theme.palette.primary.main,
              '--primary-light': theme.palette.primary.light,
              transform: 'scaleX(-1)',
            }}
          >
            <use href="/sprite/sprite.svg#icon-log-in-01"></use>
          </svg>
          Log out
        </Button> */
        <>
          <button className={css.login} onClick={handleOpen}>
            <svg
              className={css.svg}
              width="28"
              height="28"
              style={{
                '--primary-main': theme.palette.primary.main,
                '--primary-light': theme.palette.primary.light,
              }}
            >
              <use href="/sprite/sprite.svg#icon-log-in-01"></use>
            </svg>
            Log in
          </button>
          <button className={css.registration} onClick={handleOpenRegister}>
            Registration
          </button>
        </>
      )}
      <Button
        className={css.themeButton}
        variant="contained"
        onClick={toggleTheme}
      ></Button>
    </div>
  );
}
export default UserActions;
