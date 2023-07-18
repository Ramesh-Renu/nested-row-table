import { createSlice, createSelector } from "@reduxjs/toolkit";
import { toolWiseTeamAction } from "../actions/toolWiseTeamAction";

export const toolWiseTeamSlice = createSlice({
  name: "toolWiseTeam",
  initialState: {
    loading: false,
    error: null,
    datas: [],
    toolCount: [],
    toolWiseTeamDatas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toolWiseTeamAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(toolWiseTeamAction.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length === 0) return;
        state.datas = Array.from(new Set(state.datas.map(JSON.stringify))).map(
          JSON.parse
        );
        state.datas.push({
          root_value: action.meta.arg.rootValue,
          teams: action.payload,
        });
        state.toolWiseTeamDatas = [...new Set(state.datas)];
        state.toolWiseTeamDatas = Array.from(
          new Set(state.toolWiseTeamDatas.map(JSON.stringify))
        ).map(JSON.parse);
        state.toolCount = action.payload.length;
      })
      .addCase(toolWiseTeamAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default toolWiseTeamSlice.reducer;

export const toolWiseTeamSelector = createSelector(
  [
    (state) => state.toolWiseTeam.datas,
    (state) => state.toolWiseTeam.toolCount,
    (state) => state.toolWiseTeam.loading,
    (state) => state.toolWiseTeam.error,
  ],
  (data, tdata, teamData, loading, error) => ({
    datas: data,
    toolCount: tdata,
    toolWiseTeamDatas: teamData,
    loading,
    error,
  })
);
