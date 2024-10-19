import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; /* 
import sprite from '../../image/sprite/sprite.svg'; */
import css from './UserAction.module.css';

function UserActions({ theme, toggleTheme }) {
  return (
    <div className={css.userActions}>
      <Link className={css.login} to="login">
        <svg
          width="28"
          height="28"
          style={{ color: theme.palette.primary.main }}
        >
          <use href="/sprite/sprite.svg#icon-log-in-01"></use>
        </svg>
        Log in
      </Link>
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
