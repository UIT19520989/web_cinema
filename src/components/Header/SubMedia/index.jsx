import Nav from "./Nav";
import Options from "./Options";
import styles from "./SubMedia.module.scss";
const SubMedia = () => {
  return (
    <div className={styles.subMedia}>
      <Nav />
      <Options />
    </div>
  );
};

export default SubMedia;
