import styles from "./Card.module.scss";
import "./Card.css";
import { EllipsisOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { Link } from "react-router-dom";

const Card = (film) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.wrapper}>
          <Link to='/news' title={film.film.name || film.film.title}>
            <img
              loading='lazy'
              src={`https://image.tmdb.org/t/p/w150_and_h225_face${film.film.poster_path}`}
              alt=''
            />
          </Link>
        </div>
        <div className={styles.options}>
          <EllipsisOutlined style={{ fontSize: "1.25em" }} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.consensus}>
          <div className={styles.outerRing}>
            <div className={styles.userScoreChart}>
              <div className={styles.persent}>
                <Progress
                  type='circle'
                  percent={Math.round(film.film.vote_average * 10)}
                  strokeColor={{ "0%": "#da3d63", "100%": "#21d07a" }}
                  width={36}
                  className='textLight'
                />
              </div>
            </div>
          </div>
        </div>
        <h2>
          <Link to='/news' title={film.film.name || film.film.title}>
            {film.film.name || film.film.title}
          </Link>
        </h2>
        <p>{film.film.release_date || film.film.first_air_date}</p>
      </div>
    </div>
  );
};

export default Card;
