import styles from "./ContentHero.module.scss";
import InputSearch from "./InputSearch";

const ContentHero = () => {
  return (
    <div className={styles.contentHeroWrapper}>
      <div className={styles.contentHero}>
        <div className={styles.title}>
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className={styles.search}>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};

export default ContentHero;
