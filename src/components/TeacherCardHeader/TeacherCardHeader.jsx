import { useState, useEffect } from 'react';
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import css from './TeacherCardHeader.module.css';
import { fetchTeacherDataFromRealtimeDatabase } from '../../services/teachersService';

function TeacherCardHeader({
  teacherId,
  lessonsDone,
  pricePerHour,
  rating,
  theme,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (auth.currentUser) {
        try {
          const userDocRef = doc(db, 'users', auth.currentUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setIsFavorite(
              userData.favorites?.some(fav => fav.id === teacherId)
            );
          }
        } catch (error) {
          console.error('Error retrieving user document:', error);
        }
      }
    };

    if (auth.currentUser) {
      checkFavoriteStatus();
    }
  }, [auth.currentUser?.uid, teacherId]);

  const handleFavoriteClick = async () => {
    if (!auth.currentUser) {
      alert('This feature is only available to authorized users');
      return;
    }

    const userDocRef = doc(db, 'users', auth.currentUser.uid);

    try {
      const teacherData = await fetchTeacherDataFromRealtimeDatabase(teacherId);

      if (!teacherData) {
        console.error('Teacher data not found.');
        return;
      }

      if (isFavorite) {
        await updateDoc(userDocRef, {
          favorites: arrayRemove(teacherData),
        });
      } else {
        await updateDoc(userDocRef, {
          favorites: arrayUnion(teacherData),
        });
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error updating favorites list:', error);
    }
  };

  return (
    <div className={css.box}>
      <p className={css.item}>
        <svg className={css.iconBook} width="16" height="16">
          <use href="/sprite/sprite.svg#icon-book-open-01"></use>
        </svg>
        Lessons online
      </p>
      <p className={css.item}>Lessons done: {lessonsDone}</p>
      <p className={css.item}>
        {' '}
        <svg className={css.iconRaiting} width="16" height="16">
          <use href="/sprite/sprite.svg#icon-Rating"></use>
        </svg>
        Rating: {rating}
      </p>
      <p className={css.itemPrice}>
        Price / 1 hour: <span className={css.price}>${pricePerHour}</span>
      </p>

      <svg
        className={`${css.icon} ${isFavorite ? css.iconFavorite : ''}`}
        width="26"
        height="26"
        onClick={handleFavoriteClick}
        style={{
          fill: isFavorite ? theme.palette.primary.main : 'transparent',
          stroke: isFavorite ? theme.palette.primary.main : 'black',
        }}
      >
        <use href="/sprite/sprite.svg#icon-heart"></use>
      </svg>
    </div>
  );
}

export default TeacherCardHeader;
