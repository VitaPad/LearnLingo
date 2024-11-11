import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation({ theme }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user); // Оновлення стану користувача
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={buildLinkClass}
        style={{
          '--primary-main': theme.palette.primary.main,
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={buildLinkClass}
        style={{
          '--primary-main': theme.palette.primary.main,
        }}
      >
        Teachers
      </NavLink>

      {user && (
        <NavLink
          to="/favorites"
          className={buildLinkClass}
          style={{
            '--primary-main': theme.palette.primary.main,
          }}
        >
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
export default Navigation;
