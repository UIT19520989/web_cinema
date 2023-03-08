import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../utils/Api";

export const topFilmSlice = createSlice({
  name: "topFilm",
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
  topFilmSlice.actions;

export const fetchTopFilm = () => async (dispatch) => {
  dispatch(getTopFilmStart());
  try {
    const response = await axios.get(URL);
    dispatch(getTopFilmSuccess(response.data));
  } catch (error) {
    dispatch(getTopFilmFailure(error.message));
  }
};

export default topFilmSlice.reducer;
