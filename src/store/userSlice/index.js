import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUsersSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    getUsersFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export default usersSlice.reducer;
