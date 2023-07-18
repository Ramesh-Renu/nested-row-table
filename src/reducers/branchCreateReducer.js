import { createSlice, createSelector } from "@reduxjs/toolkit";
import { branchCreateAction } from "../actions/branchCreateAction";

export const branchCreateSlice = createSlice({
  name: "branches",
  initialState: {
    loading: false,
    error: null,
    datas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(branchCreateAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(branchCreateAction.fulfilled, (state, action) => {
        state.loading = false;
        state.datas = action.payload;
      })
      .addCase(branchCreateAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default branchCreateSlice.reducer;

export const branchCreateSelector = createSelector(
  [
    (state) => state.branches.datas,
    (state) => state.branches.loading,
    (state) => state.branches.error,
  ],
  (data, loading, error) => ({
    datas: data,
    loading,
    error,
  })
);
