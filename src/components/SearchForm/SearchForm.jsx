import { useState } from 'react';
import css from './SearchForm.module.css';
function SearchForm() {
  /*   const [language, setLanguage] = useState('');
  const [knowledgeLevel, setKnowledgeLevel] = useState('');
  const [price, setPrice] = useState(''); */

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const toggleLanguageOpen = () => setIsLanguageOpen(!isLanguageOpen);
  const toggleKnowledgeOpen = () => setIsKnowledgeOpen(!isKnowledgeOpen);
  const togglePriceOpen = () => setIsPriceOpen(!isPriceOpen);

  return (
    <div className={css.searchForm}>
      <div
        className={`${css.formGroup} ${isLanguageOpen ? css.open : ''}`}
        onClick={toggleLanguageOpen}
        onBlur={() => setIsLanguageOpen(false)}
      >
        <label>Languages</label>
        <select id="language" className={css.language}>
          <option value="english">English</option>
          <option value="spanish">German</option>
          <option value="spanish">Ukrainian</option>
          <option value="spanish">Polish</option>
        </select>
        <svg className={css.icon} width="20" height="20">
          <use href="public/sprite/sprite.svg#icon-chevron-down"></use>
        </svg>
      </div>

      <div
        className={`${css.formGroup} ${isKnowledgeOpen ? css.open : ''}`}
        onClick={toggleKnowledgeOpen}
        onBlur={() => setIsKnowledgeOpen(false)}
      >
        <label>Level of knowledge</label>
        <select id="knowledge-level" className={css.knowledge}>
          <option value="a1">A1 Beginner</option>
          <option value="a2">A2 Elementary</option>
          <option value="b1">B1 Intermediate</option>
          <option value="b2">B2 Upper-Intermediate</option>
        </select>
        <svg className={css.icon} width="20" height="20">
          <use href="public/sprite/sprite.svg#icon-chevron-down"></use>
        </svg>
      </div>

      <div
        className={`${css.formGroup} ${isPriceOpen ? css.open : ''}`}
        onClick={togglePriceOpen}
        onBlur={() => setIsPriceOpen(false)}
      >
        <label>Price</label>
        <select id="price" className={css.price}>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
        </select>
        <svg className={css.icon} width="20" height="20">
          <use href="public/sprite/sprite.svg#icon-chevron-down"></use>
        </svg>
      </div>
    </div>
  );
}
export default SearchForm;
