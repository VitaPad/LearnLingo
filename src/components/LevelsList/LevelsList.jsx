import css from './LevelsList.module.css';

function LevelsList({ levels, selectedLevel, theme }) {
  return (
    <div className={css.levelList}>
      {levels.map((level, index) => (
        <span
          key={index}
          className={css.levelItem}
          style={{
            backgroundColor:
              level === selectedLevel ? theme.palette.primary.main : 'inherit',
            border: level === selectedLevel && 'none',
          }}
        >
          {level}
        </span>
      ))}
    </div>
  );
}

export default LevelsList;
