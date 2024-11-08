import { useEffect, useState } from 'react';
import { getTeachers } from '../../services/teachersService';
import css from './TeachersList.module.css';
import LevelsList from '../LevelsList/LevelsList';
import TeacherCardHeader from '../TeacherCardHeader/TeacherCardHeader';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import BookButton from '../BookButton/BookButton';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

function TeachersList({ theme }) {
  const [teachers, setTeachers] = useState([]);
  const [expandedTeachers, setExpandedTeachers] = useState({});
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    async function fetchTeachers() {
      const data = await getTeachers();
      setTeachers(data);
    }
    fetchTeachers();
  }, []);

  const toggleReadMore = index => {
    setExpandedTeachers(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  /*   const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisible => {
      const newVisible = prevVisible + 4;
      return newVisible;
    });
  }; */

  const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisible => prevVisible + 4);
  };
  return (
    <div className={css.containerList}>
      {teachers.slice(0, visibleTeachers).map((teacher, index) => (
        <div key={index} className={css.container}>
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
              {' '}
              <span className={css.label}>Speaks: </span>
              <span className={`${css.languages} ${css.underline}`}>
                {teacher.languages.join(', ')}
              </span>
            </p>
            <p className={css.text}>
              {' '}
              <span className={css.label}>Lesson Info: </span>
              {teacher.lesson_info}
            </p>
            <p className={css.text}>
              {' '}
              <span className={css.label}>Condition: </span>
              {teacher.conditions}
            </p>
            {expandedTeachers[index] ? (
              <>
                <TeacherDetails
                  experience={teacher.experience}
                  reviews={teacher.reviews}
                />
              </>
            ) : (
              <button
                className={css.button}
                onClick={() => toggleReadMore(index)}
              >
                Read more
              </button>
            )}
            <LevelsList levels={teacher.levels} />
            {expandedTeachers[index] && <BookButton />}
            <TeacherCardHeader
              lessonsDone={teacher.lessons_done}
              pricePerHour={teacher.price_per_hour}
              rating={teacher.rating}
            />
          </div>
        </div>
      ))}
      <div className={css.btn}>
        {visibleTeachers < teachers.length && (
          <LoadMoreBtn theme={theme} onClick={loadMoreTeachers} />
        )}
      </div>
    </div>
  );
}
export default TeachersList;
