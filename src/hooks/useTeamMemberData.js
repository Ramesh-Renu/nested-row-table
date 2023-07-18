import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamMemberCreateAction } from "../actions/teamMemberCreateAction";
import { teamMemberCreateSelector } from "../reducers/teamMemberCreateReducer";

/**
 *
 * @returns {[{
 *  datas: [],
 *  loading: boolean,
 *  error: object,
 * }, {
 *  getTeamMemberDatas: () => void
 * }]}
 */

const useTeamMemberData = () => {
  const teamMemberDatas = useSelector(teamMemberCreateSelector);
  const dispatch = useDispatch();
  const getTeamMemberDatas = useCallback(
    (params) => dispatch(teamMemberCreateAction(params)),
    [dispatch]
  );
  return [teamMemberDatas, getTeamMemberDatas];
};

export default useTeamMemberData;
