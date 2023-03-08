import ContentHero from "./ContentHero";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <ContentHero />
    </section>
  );
};

export default Hero;
