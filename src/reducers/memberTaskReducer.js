import { createSelector, createSlice } from "@reduxjs/toolkit";
import { memberTaskAction } from "../actions/memberTaskAction";

export const memberTaskCreateSlice = createSlice({
  name: "memberTask",
  initialState: {
    loading: false,
    error: null,
    datas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(memberTaskAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(memberTaskAction.fulfilled, (state, action) => {
        state.loading = false;
        state.datas = action.payload;
      })
      .addCase(memberTaskAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default memberTaskCreateSlice.reducer;

export const memberTaskCreateSelector = createSelector(
  [
    (state) => state.memberTask.datas,
    (state) => state.memberTask.loading,
    (state) => state.memberTask.error,
  ],
  (data, loading, error) => ({
    datas: data,
    loading,
    error,
  })
);
