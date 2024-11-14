import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BookButton from '../BookButton/BookButton';
import LevelsList from '../LevelsList/LevelsList';
import TeacherCardHeader from '../TeacherCardHeader/TeacherCardHeader';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import css from './FavoritesList.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

function FavoritesList({ theme, filters }) {
  const [favorites, setFavorites] = useState([]);
  const [expandedTeachers, setExpandedTeachers] = useState({});
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  const auth = getAuth();
  const db = getFirestore();
  useEffect(() => {
    let unsubscribe;

    const authUnsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);

        unsubscribe = onSnapshot(userDocRef, docSnapshot => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setFavorites(userData.favorites || []);
          } else {
            console.log('Документ користувача не знайдено!');
          }
        });
      } else {
        setFavorites([]);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
      authUnsubscribe();
    };
  }, [auth, db]);

  const filteredFavorites = favorites
    .filter(favorite =>
      filters.language ? favorite.languages.includes(filters.language) : true
    )
    .filter(favorite =>
      filters.level ? favorite.levels.includes(filters.level) : true
    )
    .filter(favorite =>
      filters.price
        ? favorite.price_per_hour === parseInt(filters.price.slice(1))
        : true
    );

  const toggleReadMore = id => {
    setExpandedTeachers(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisible => prevVisible + 4);
  };

  return (
    <div className={css.containerList}>
      {filteredFavorites.map(teacher => (
        <div key={teacher.id} className={css.container}>
          <div
            className={css.avatar}
            style={{ border: `3px solid ${theme.palette.primary.main}` }}
          >
            <img
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
              className={css.img}
            />
          </div>
          <div className={css.infoBox}>
            <span className={css.label}>Languages</span>
            <h3 className={css.h3}>
              {teacher.name} {teacher.surname}
            </h3>
            <p className={css.text}>
              <span className={css.label}>Speaks: </span>
              <span className={`${css.languages} ${css.underline}`}>
                {teacher.languages.join(', ')}
              </span>
            </p>
            <p className={css.text}>
              <span className={css.label}>Lesson Info: </span>
              {teacher.lesson_info}
            </p>
            <p className={css.text}>
              <span className={css.label}>Condition: </span>
              {teacher.conditions}
            </p>
            {expandedTeachers[teacher.id] ? (
              <>
                <TeacherDetails
                  experience={teacher.experience}
                  reviews={teacher.reviews}
                />
              </>
            ) : (
              <button
                className={css.button}
                onClick={() => toggleReadMore(teacher.id)}
              >
                Read more
              </button>
            )}
            <LevelsList
              levels={teacher.levels}
              selectedLevel={filters.level}
              theme={theme}
            />
            {expandedTeachers[teacher.id] && <BookButton />}
            <TeacherCardHeader
              theme={theme}
              teacherId={teacher.id}
              lessonsDone={teacher.lessons_done}
              pricePerHour={teacher.price_per_hour}
              rating={teacher.rating}
            />
          </div>
        </div>
      ))}
      <div className={css.btn}>
        {visibleTeachers < favorites.length && (
          <LoadMoreBtn theme={theme} onClick={loadMoreTeachers} />
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
