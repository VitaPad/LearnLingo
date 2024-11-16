import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const addUserToDatabase = async user => {
  const userRef = doc(db, 'users', user.uid);

  try {
    await setDoc(userRef, {
      name: user.displayName || 'Anonymous',
      email: user.email,
      favorites: [],
    });
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw error;
  }
};
export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await addUserToDatabase(user);

    return user;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    /*     console.log('UserCredential:', userCredential); */
    return userCredential.user;
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      throw new Error('User  not found. Please register.');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Incorrect password. Try again.');
    } else {
      throw new Error('Incorrect email. Try again.');
    }
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
