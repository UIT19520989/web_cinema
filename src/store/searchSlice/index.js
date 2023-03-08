import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { query } from "../../components/Search/SearchForm";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    getTopFilmStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getTopFilmSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    getTopFilmFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getTopFilmStart, getTopFilmSuccess, getTopFilmFailure } =
  searchSlice.actions;

export const fetchSearch = () => async (dispatch) => {
  dispatch(getTopFilmStart());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ebd07cf4de835610489068b23d8227a8&query=${query}`
    );
    dispatch(getTopFilmSuccess(response.data));
  } catch (error) {
    dispatch(getTopFilmFailure(error.message));
  }
};

export default searchSlice.reducer;
