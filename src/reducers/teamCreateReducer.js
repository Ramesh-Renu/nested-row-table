import { createSlice, createSelector } from "@reduxjs/toolkit";
import { teamCreateAction } from "../actions/teamCreateAction";
import { branchCreateAction } from "../actions/branchCreateAction";

const initialState = {
  branchClickTeam: {
    loading: false,
    error: null,
    datas: [],
  },
  toolClickBranch: {
    loading: false,
    error: null,
    datas: [],
  },
};

export const teamCreateSlice = createSlice({
  name: "teamDataCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(teamCreateAction.pending, (state, action) => {
        state.branchClickTeam.loading = true;
      })
      .addCase(teamCreateAction.fulfilled, (state, action) => {
        state.branchClickTeam.loading = false;
        state.branchClickTeam.datas = action.payload;
      })
      .addCase(teamCreateAction.rejected, (state, action) => {
        state.branchClickTeam.loading = false;
        state.branchClickTeam.error = action.payload;
      });
    builder
      .addCase(branchCreateAction.pending, (state, action) => {
        state.toolClickBranch.loading = true;
      })
      .addCase(branchCreateAction.fulfilled, (state, action) => {
        state.toolClickBranch.loading = false;
        state.toolClickBranch.datas = action.payload;
      })
      .addCase(branchCreateAction.rejected, (state, action) => {
        state.toolClickBranch.loading = false;
        state.toolClickBranch.error = action.payload;
      });
  },
});
export default teamCreateSlice.reducer;

export const teamCreateBranchSelector = createSelector(
  [
    (state) => state.teamDataCreate.branchClickTeam.datas,
    (state) => state.teamDataCreate.branchClickTeam.loading,
    (state) => state.teamDataCreate.branchClickTeam.error,
  ],
  (data, loading, error) => ({
    branchClickTeam: data,
    loading,
    error,
  })
);

export const teamCreateToolSelector = createSelector(
  [
    (state) => state.teamDataCreate.toolClickBranch.datas,
    (state) => state.teamDataCreate.toolClickBranch.loading,
    (state) => state.teamDataCreate.toolClickBranch.error,
  ],
  (data, loading, error) => ({
    toolClickBranch: data,
    loading,
    error,
  })
);
