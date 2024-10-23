import css from './Promo.module.css';

function Promo({ theme }) {
  return (
    <div className={css.container}>
      <h1 className={css.h1}>
        Unlock your potential with the best
        <span
          className={css.span}
          style={{
            backgroundColor: theme.palette.primary.light,
          }}
        >
          {' '}
          language{' '}
        </span>
        tutors
      </h1>
      <p className={css.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button
        className={css.button}
        style={{
          '--primary-main': theme.palette.primary.main,
          '--primary-light': theme.palette.primary.light,
        }}
      >
        Get started
      </button>
    </div>
  );
}
export default Promo;
