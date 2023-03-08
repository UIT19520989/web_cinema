import CardResult from "./CardResult";
import style from "./SearchResults.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../../store/searchSlice";
import { useEffect } from "react";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className={style.searchResults}>
      <div className={style.results}>
        {data &&
          data.results.map((item, index) => {
            return <CardResult key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
