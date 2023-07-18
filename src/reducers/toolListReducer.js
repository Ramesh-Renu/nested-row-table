import { createSlice, createSelector } from "@reduxjs/toolkit";
import { toolListAction } from "../actions/toolListAction";

export const toolListSlice = createSlice({
  name: "toolList",
  initialState: {
    loading: false,
    error: null,
    datas: null,
    toolCount: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toolListAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(toolListAction.fulfilled, (state, action) => {
        state.loading = false;
        state.datas = action.payload;
        state.toolCount = action.payload.length;
      })
      .addCase(toolListAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default toolListSlice.reducer;

export const toolListSelector = createSelector(
  [
    (state) => state.toolList.datas,
    (state) => state.toolList.toolCount,
    (state) => state.toolList.loading,
    (state) => state.toolList.error,
  ],
  (data, tdata, loading, error) => ({
    datas: data,
    toolCount: tdata,
    loading,
    error,
  })
);
