import { createSlice } from "@reduxjs/toolkit";
import { totalResourceAction } from "../actions/totalResourceAction";

export const totalResourceSlice = createSlice({
  name: "resources",
  initialState: {
    loading: false,
    error: null,
    count: null,
    nameList: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(totalResourceAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(totalResourceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.length;
        let nameList = action.payload;
        let branchName = nameList.map((element) => {
          let empName = element.root_value ? element.root_value : " ";
          if (empName.includes("@")) {
            const myArray = empName.split("@");
            empName = myArray[0]
              .replaceAll(".", " ")
              .replace(/\w\S*/g, function (txt) {
                return (
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
              });
          }
          return empName;
        });

        state.nameList = branchName;
      })
      .addCase(totalResourceAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default totalResourceSlice.reducer;
