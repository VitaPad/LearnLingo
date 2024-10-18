import HeroImage from '../HeroImage/HeroImage';
import Promo from '../Promo/Promo';
import css from './Hero.module.css';

function Hero({ theme }) {
  return (
    <section className={css.hero}>
      <Promo theme={theme} />
      <HeroImage theme={theme} />
    </section>
  );
}
export default Hero;
