import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamCreateAction } from "../actions/teamCreateAction";
import { branchCreateAction } from "src/actions/branchCreateAction";
import {
  teamCreateBranchSelector,
  teamCreateToolSelector,
} from "../reducers/teamCreateReducer";

export const branchClickedData = () => {
  const teamDatas = useSelector(teamCreateBranchSelector);
  const dispatch = useDispatch();
  const getTeamDatas = useCallback(
    (params) => dispatch(teamCreateAction(params)),
    [dispatch]
  );

  return [teamDatas, getTeamDatas];
};

export const toolClickedBranchData = () => {
  const toolBranchDatas = useSelector(teamCreateToolSelector);
  const dispatch = useDispatch();
  const getToolBranchDatas = useCallback(
    (params) => dispatch(branchCreateAction(params)),
    [dispatch]
  );
  return [toolBranchDatas, getToolBranchDatas];
};
