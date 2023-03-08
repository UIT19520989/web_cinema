import Hero from "./Hero";
import ListFilms from "./ListFilms";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <ListFilms />
    </main>
  );
};

export default Main;
