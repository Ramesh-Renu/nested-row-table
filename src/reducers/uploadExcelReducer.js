import { createSlice } from "@reduxjs/toolkit";
import { uploadExcelAction } from "../actions/uploadExcelAction";

export const uploadExcelSlice = createSlice({
  name: "uploadExcel",
  initialState: {
    loading: false,
    error: null,
    dispMsg: true,
    setSuccessMsg: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadExcelAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(uploadExcelAction.fulfilled, (state, action) => {
        state.loading = false;
        state.dispMsg = false;
        console.log("action", action.payload);
        state.setSuccessMsg = action.payload;
      })
      .addCase(uploadExcelAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default uploadExcelSlice.reducer;
