import css from './TeacherDetails.module.css';
import defaultAvatar from '../../../public/Default_pfp.svg.png';

function TeacherDetails({ experience, reviews }) {
  return (
    <>
      <p className={css.text}>{experience}</p>
      <div className={css.reviews}>
        {reviews.map((review, idx) => (
          <div key={idx} className={css.review}>
            <div className={css.reviewBox}>
              <img
                src={review.avatar_url || defaultAvatar}
                alt={`${review.reviewer_name}'s avatar`}
                className={css.avatar}
              />
              <div className={css.box}>
                <div className={css.rating}>
                  <h4 className={css.name}>{review.reviewer_name}</h4>
                  <p>
                    {' '}
                    <svg className={css.iconRaiting} width="16" height="16">
                      <use href="/sprite/sprite.svg#icon-Rating"></use>
                    </svg>
                    {review.reviewer_rating.toFixed(1)}
                  </p>
                </div>
                <p className={css.comment}>{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeacherDetails;
