import Card from "./Card";
import styles from "./Scroller.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopFilm } from "../../../../store/topFilmSlice";
import { useEffect } from "react";

const Scroller = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.topFilm);

  useEffect(() => {
    dispatch(fetchTopFilm());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(data);
  return (
    <div className={styles.scroller}>
      <div className={styles.loaded}>
        {data &&
          data.results.map((item, index) => {
            return <Card key={index} film={item} />;
          })}
      </div>
    </div>
  );
};

export default Scroller;
