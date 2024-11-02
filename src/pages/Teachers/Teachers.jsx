import Header from '../../components/Header/Header';
import TeachersList from '../../components/TeachersList/TeachersList';

function Teachers({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TeachersList />
    </>
  );
}

export default Teachers;
