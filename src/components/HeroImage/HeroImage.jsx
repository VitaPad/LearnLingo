import css from './HeroImage.module.css';

function HeroImage({ theme }) {
  return (
    <div
      className={css.container}
      style={{
        backgroundImage: `url(${theme.images.backgroundImage})`, // Використовується шлях з теми
      }}
    ></div>
  );
}
export default HeroImage;
