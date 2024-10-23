import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebaseConfig';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider(); // Створюємо інстанс провайдера Google
  const [user, setUser] = useState(auth.currentUser);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(credentials => {
        setUser(credentials.user);
      })
      .catch(e => console.error('Error during sign-in:', e));
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleProvider)
        .then(credentials => {
          setUser(credentials.user);
        })
        .catch(e => console.error('Error during sign-in:', e)); // Виправлений catch
    });
    return unsub;
  }, [auth, googleProvider]);
  return (
    <div>
      {user ? (
        <h1>Welcome, {user.displayName}</h1>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};
