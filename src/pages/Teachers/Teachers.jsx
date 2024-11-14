/* import Header from '../../components/Header/Header'; */
/* import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn'; */
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import TeachersList from '../../components/TeachersList/TeachersList';
import css from './Teachers.module.css';

function Teachers({ theme, toggleTheme }) {
  // Створюємо стан для фільтрів
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    price: '',
  });

  const handleLanguageChange = language =>
    setFilters(prev => ({ ...prev, language }));
  const handleLevelChange = level => setFilters(prev => ({ ...prev, level }));
  const handlePriceChange = price => setFilters(prev => ({ ...prev, price }));

  return (
    <div className={css.container}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className={css.searchFormWrapper}>
        <SearchForm
          onLanguageChange={handleLanguageChange}
          onLevelChange={handleLevelChange}
          onPriceChange={handlePriceChange}
        />
      </div>
      <div className={css.teachersListWrapper}>
        <TeachersList theme={theme} filters={filters} />
      </div>
    </div>
  );
}

export default Teachers;
