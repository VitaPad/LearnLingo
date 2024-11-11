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
      favorites: [], // Порожній масив для улюблених вчителів
    });
    console.log('User added to database successfully');
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

    // Оновлюємо профіль користувача, щоб додати ім'я
    await updateProfile(user, { displayName: name });
    // Додаємо користувача до бази даних
    await addUserToDatabase(user);

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
