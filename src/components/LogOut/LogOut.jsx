import { Button } from '@mui/material';
import css from './LogOut.module.css';

function LogOut({ theme, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      fullWidth
      className={css.button}
      sx={{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        textAlign: 'left',
        textTransform: 'none',
        color: 'rgba(18, 20, 23, 1)',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        padding: '0',
        backgroundColor: 'transparent',
        paddingRight: '20px',
      }}
    >
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
    </Button>
  );
}
export default LogOut;
