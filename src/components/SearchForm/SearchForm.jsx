import CustomSelect from '../CustomSelect/CustomSelect';
import css from './SearchForm.module.css';

function SearchForm() {
  const languages = ['French', 'English', 'German', 'Ukrainian', 'Polish'];
  const levels = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
  ];
  const prices = ['$10', '$20', '$30', '$40', '$50'];

  return (
    <div className={css.container}>
      <CustomSelect options={languages} label="Languages" width="224px" />
      <CustomSelect options={levels} label="Level of knowledge" width="224px" />
      <CustomSelect options={prices} label="Price" width="124px" />
    </div>
  );
}

export default SearchForm;
