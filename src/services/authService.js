import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Оновлюємо профіль користувача, щоб додати ім'я
    await updateProfile(user, { displayName: name });

    return user; // повертаємо користувача, якщо реєстрація успішна
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // проброс помилки для обробки у компоненті
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('UserCredential:', userCredential);
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
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
