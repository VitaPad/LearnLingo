import css from './TeacherCardHeader.module.css';

function TeacherCardHeader({ lessonsDone, pricePerHour, rating }) {
  return (
    <div className={css.box}>
      <p className={css.item}>Lessons online</p>
      <p className={css.item}>Lessons done: {lessonsDone}</p>
      <p className={css.item}>
        {' '}
        <svg className={css.iconRaiting} width="16" height="16">
          <use href="/sprite/sprite.svg#icon-Rating"></use>
        </svg>
        Rating: {rating}
      </p>
      <p className={css.itemPrice}>
        Price / 1 hour: <span className={css.price}>${pricePerHour}</span>
      </p>

      <svg className={css.icon} width="26" height="26">
        <use href="/sprite/sprite.svg#icon-heart"></use>
      </svg>
    </div>
  );
}

export default TeacherCardHeader;
