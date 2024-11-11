import FavoritesList from '../../components/FavoritesList/FavoritesList';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
/* import TeachersList from '../../components/TeachersList/TeachersList'; */
import css from './Favorites.module.css';

function Favorites({ theme, toggleTheme }) {
  return (
    <div className={css.container}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className={css.searchFormWrapper}>
        <SearchForm />
      </div>
      <div className={css.teachersListWrapper}>
        <FavoritesList theme={theme} />
      </div>
    </div>
  );
}

export default Favorites;
