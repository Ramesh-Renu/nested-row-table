import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memberTaskAction } from "../actions/memberTaskAction";
import { memberTaskCreateSelector } from "../reducers/memberTaskReducer";

/**
 *
 * @returns {[{
 *  datas: [],
 *  loading: boolean,
 *  error: object,
 * }, {
 *  getMemberTaskDatas: () => void
 * }]}
 */
const useMemberTask = () => {
  const memberTaskDatas = useSelector(memberTaskCreateSelector);
  const dispatch = useDispatch();
  const getMemberTaskDatas = useCallback(
    (params) => dispatch(memberTaskAction(params)),
    [dispatch]
  );

  return [memberTaskDatas, getMemberTaskDatas];
};

export default useMemberTask;
