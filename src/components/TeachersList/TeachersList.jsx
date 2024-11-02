import { useEffect, useState } from 'react';
import { getTeachers } from '../../services/teachersService';
import css from './TeachersList.module.css';

function TeachersList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      const data = await getTeachers();
      setTeachers(data);
    }
    fetchTeachers();
  }, []);
  return (
    <div>
      {teachers.map((teacher, index) => (
        <div key={index} className={css.container}>
          <div className={css.avatar}>
            <img
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
              className={css.img}
            />
          </div>
          <span className={css.label}>Languages</span>
          <h3>
            {teacher.name} {teacher.surname}
          </h3>
          <p className={css.text}>
            {' '}
            <span className={css.label}>Speaks: </span>
            {teacher.languages.join(', ')}
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
          <button className={css.button}>Read more</button>
        </div>
      ))}
    </div>
  );
}
export default TeachersList;
