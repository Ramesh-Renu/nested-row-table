import { createSlice } from "@reduxjs/toolkit";
import { combinedDataAction } from "../actions/combinedDataAction";

export const combinedDataSlice = createSlice({
  name: "combined",
  initialState: {
    loading: false,
    error: null,
    datas: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(combinedDataAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(combinedDataAction.fulfilled, (state, action) => {
        state.loading = false;
        state.datas = action.payload;
      })
      .addCase(combinedDataAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default combinedDataSlice.reducer;
