import { Link } from "react-router-dom";
import styles from "./Option.module.scss";

const Option = ({ link, name }) => {
  return (
    <Link className={styles.link} to={link}>
      {name}
    </Link>
  );
};

export default Option;
