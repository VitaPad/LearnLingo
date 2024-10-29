import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { Link } from 'react-router-dom';
import css from './AuthProvider.module.css';

export const AuthProvider = ({ onSuccess }) => {
  const auth = getAuth(app);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const googleProvider = new GoogleAuthProvider(); // Створюємо інстанс провайдера Google
  const [user, setUser] = useState(auth.currentUser);

  const handleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then(credentials => {
        setUser(credentials.user);
        onSuccess();
      })
      .catch(e => console.error('Error during sign-in:', e));
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
    });
    return unsub;
  }, [auth, googleProvider]);
  return (
    <div className={css.box}>
      <Link className={css.link} onClick={handleSignUp}>
        Sign Up with Google
      </Link>
    </div>
  );
};
