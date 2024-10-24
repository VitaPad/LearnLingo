import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'learnlingo-f881e.firebaseapp.com',
  projectId: 'learnlingo-f881e',
  storageBucket: 'learnlingo-f881e.appspot.com',
  messagingSenderId: '357186470214',
  appId: '1:357186470214:web:20f6e7a4ed18bbd9632547',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
