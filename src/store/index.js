import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from '../reducers/reducer';
import { combinedDataSlice } from '../reducers/combinedDataReducer';
import { branchCreateSlice } from '../reducers/branchCreateReducer'
import { toolListSlice } from '../reducers/toolListReducer';
import { totalResourceSlice } from '../reducers/totalResourceReducer';
import { uploadExcelSlice } from '../reducers/uploadExcelReducer';
import { teamCreateSlice } from '../reducers/teamCreateReducer';
import { teamMemberCreateSlice } from '../reducers/teamMemberCreateReducer';
import { memberTaskCreateSlice } from '../reducers/memberTaskReducer';
import { toolWiseTeamSlice } from '../reducers/toolWiseTeamReducer'
// import  loadingReducer  from '@shared/loader/loadingReducer';

const rootReducer = {
    // loading: loadingReducer,
    user: userSlice.reducer,
    combined: combinedDataSlice.reducer,
    toolList: toolListSlice.reducer,
    toolWiseTeam: toolWiseTeamSlice.reducer,
    resources: totalResourceSlice.reducer,
    uploadExcel: uploadExcelSlice.reducer,
    branches: branchCreateSlice.reducer,
    teamDataCreate: teamCreateSlice.reducer,
    teamMemberData: teamMemberCreateSlice.reducer,
    memberTask: memberTaskCreateSlice.reducer,

};
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
