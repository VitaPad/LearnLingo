/* import Header from '../../components/Header/Header'; */
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './Teachers.module.css';

function Teachers({ theme }) {
  return (
    <div className={css.container}>
      {/*       <Header theme={theme} toggleTheme={toggleTheme} /> */}
      <TeachersList theme={theme} />
      <div className={css.btn}>
        <LoadMoreBtn theme={theme} />
      </div>
    </div>
  );
}

export default Teachers;
