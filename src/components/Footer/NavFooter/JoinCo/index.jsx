import styles from "./JoinCo.module.scss";
import joinImg from "../../../../assets/footer/join.svg";
import Rounded from "./Rounded";

const JoinCo = () => {
  return (
    <div className={styles.join}>
      <img
        className={styles.img}
        src={joinImg}
        alt='The Movie Database (TMDB)'
        width='130'
        height='94'
      ></img>
      <Rounded />
    </div>
  );
};

export default JoinCo;
