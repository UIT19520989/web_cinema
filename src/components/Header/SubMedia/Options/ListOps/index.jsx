import styles from "./ListOps.module.scss";
import { Link } from "react-router-dom";
import Option from "./Option";
import BtnSearch from "./BtnSearch";

const ListOps = () => {
  return (
    <ul className={styles.listOps}>
      <li className={styles.item}>
        <Link to='/news'>
          <span className={styles.icon}>+</span>
        </Link>
      </li>
      <li className={`${styles.translateItem} ${styles.option}`}>
        <div className={styles.translate}>vi</div>
      </li>
      <li className={styles.option}>
        <Option link={"/news"} name={"Đăng nhập"} />
      </li>
      <li className={styles.option}>
        <Option link={"/news"} name={"Tham gia TMDB"} />
      </li>
      <li className={styles.option}>
        <BtnSearch />
      </li>
    </ul>
  );
};

export default ListOps;
