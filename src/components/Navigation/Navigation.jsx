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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className={css.navigationWrapper}>
      <button className={css.burgerButton} onClick={toggleMenu}>
        {/* Іконка бургер-меню */}
        <svg
          className={css.burgerIcon}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Меню */}
      <nav className={clsx(css.nav, isMenuOpen && css.navOpen)}>
        <NavLink
          to="/"
          className={buildLinkClass}
          style={{
            '--primary-main': theme.palette.primary.main,
          }}
          onClick={() => setIsMenuOpen(false)} // Закриваємо меню після кліку
        >
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          className={buildLinkClass}
          style={{
            '--primary-main': theme.palette.primary.main,
          }}
          onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            Favorites
          </NavLink>
        )}
      </nav>
    </div>
  );
}
export default Navigation;
