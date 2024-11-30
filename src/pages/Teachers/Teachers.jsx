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
    <div className={css.teachers}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        headerClass={css.greyBackground}
      />
      <SearchForm
        onLanguageChange={handleLanguageChange}
        onLevelChange={handleLevelChange}
        onPriceChange={handlePriceChange}
      />
      <TeachersList theme={theme} filters={filters} />
    </div>
  );
}

export default Teachers;
