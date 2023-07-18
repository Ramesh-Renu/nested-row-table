import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toolListAction } from "../actions/toolListAction";
import { toolListSelector } from "../reducers/toolListReducer";

/**
 *
 * @returns {[{
 *  datas: [],
 *  loading: boolean,
 *  error: object,
 * }, {
 *  getToolList: () => void
 * }]}
 */

const useToolList = () => {
  const toolList = useSelector(toolListSelector);
  const dispatch = useDispatch();
  const getToolList = useCallback(
    (params) => dispatch(toolListAction(params)),
    [dispatch]
  );
  return [toolList, getToolList];
};

export default useToolList;
