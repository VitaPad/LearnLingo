import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; /* 
import sprite from '../../image/sprite/sprite.svg'; */
import css from './UserAction.module.css';

function UserActions({ theme, toggleTheme, handleOpen }) {
  return (
    <div className={css.userActions}>
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
      <Link className={css.registration} to="login">
        Registration
      </Link>
      <Button
        className={css.themeButton}
        variant="contained"
        onClick={toggleTheme}
      ></Button>
    </div>
  );
}
export default UserActions;
