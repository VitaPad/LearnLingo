import css from './HeroImage.module.css';

function HeroImage({ theme }) {
  return (
    <div
      className={css.container}
      style={{
        backgroundImage: `url(${theme.images.backgroundImage})`,
      }}
    ></div>
  );
}
export default HeroImage;
