import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import topFilmReducer from "./topFilmSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    topFilm: topFilmReducer,
    search: searchSlice,
  },
});
