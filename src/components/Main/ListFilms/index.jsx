import Head from "./Head";
import styles from "./ListFilms.module.scss";
import Scroller from "./Scroller";

const ListFilms = () => {
  return (
    <section className={styles.trending}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <Head />
          <Scroller />
        </div>
      </div>
    </section>
  );
};

export default ListFilms;
