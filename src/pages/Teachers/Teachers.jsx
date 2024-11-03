/* import Header from '../../components/Header/Header'; */
import TeachersList from '../../components/TeachersList/TeachersList';
/* import css from './Teachers.module.css'; */

function Teachers({ theme }) {
  return (
    <>
      {/*       <Header theme={theme} toggleTheme={toggleTheme} /> */}
      <TeachersList theme={theme} />
    </>
  );
}

export default Teachers;
