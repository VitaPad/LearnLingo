import { useState } from 'react';
import css from './CustomSelect.module.css';

function CustomSelect({ options, label, width }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={css.selectContainer} style={{ width }}>
      <label>{label}</label>
      <div className={css.selectedOption} onClick={toggleDropdown}>
        {selectedOption}
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite/sprite.svg#icon-chevron-down"></use>
        </svg>
      </div>
      {isOpen && (
        <div className={css.dropdown}>
          {options.map((option, index) => (
            <div
              key={index}
              className={css.option}
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
