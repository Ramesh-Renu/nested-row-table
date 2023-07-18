import { createSlice, createSelector } from "@reduxjs/toolkit";
import { teamMemberCreateAction } from "../actions/teamMemberCreateAction";

export const teamMemberCreateSlice = createSlice({
  name: "teamMemberData",
  initialState: {
    loading: false,
    error: null,
    datas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(teamMemberCreateAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(teamMemberCreateAction.fulfilled, (state, action) => {
        state.loading = false;
        let nameList = action.payload;
        let empNameList = nameList.map((element) => {
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
          element.empName = empName;
          return element;
        });
        state.datas = empNameList;
      })
      .addCase(teamMemberCreateAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default teamMemberCreateSlice.reducer;

export const teamMemberCreateSelector = createSelector(
  [
    (state) => state.teamMemberData.datas,
    (state) => state.teamMemberData.loading,
    (state) => state.teamMemberData.error,
  ],
  (data, loading, error) => ({
    datas: data,
    loading,
    error,
  })
);
