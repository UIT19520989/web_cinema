import styles from "./Head.module.scss";

const Head = () => {
  return (
    <div className={styles.header}>
      <h2>Trending</h2>
      <div className={styles.selectorWrap}>
        <div className={styles.selector}>
          <div className={`${styles.anchor} ${styles.selected}`}>
            <h3>Today</h3>
            <div className={styles.background}></div>
          </div>
          <div className={styles.anchor}>
            <h3>This Week</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
