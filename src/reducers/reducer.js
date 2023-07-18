import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    values: [],
  },
  reducers: {
    login: (state, action) => {
      state.values = [action.payload];
    },
    logout: (state, action) => {
      state.values = [{ name: "", age: 0, email: "" }];
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
