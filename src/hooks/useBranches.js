import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { branchCreateAction } from "../actions/branchCreateAction";
import { branchCreateSelector } from "../reducers/branchCreateReducer";

/**
 *
 * @returns {[{
 *  datas: [],
 *  loading: boolean,
 *  error: object,
 * }, {
 *  getBranchesData: () => void
 * }]}
 */

const useBranches = () => {
  const branchesList = useSelector(branchCreateSelector);
  const dispatch = useDispatch();
  const getBranchesData = useCallback(
    (params) => dispatch(branchCreateAction(params)),
    [dispatch]
  );
  return [branchesList, getBranchesData];
};

export default useBranches;
