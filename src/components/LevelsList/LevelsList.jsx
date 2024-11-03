import css from './LevelsList.module.css';

function LevelsList({ levels }) {
  return (
    <div className={css.levelList}>
      {levels.map((level, index) => (
        <span key={index} className={css.levelItem}>
          {level}
        </span>
      ))}
    </div>
  );
}

export default LevelsList;
