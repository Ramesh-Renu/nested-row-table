import { useCallback, useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toolWiseTeamAction } from "../actions/toolWiseTeamAction";
import { toolWiseTeamSelector } from "../reducers/toolWiseTeamReducer";
import { toolListSelector } from "../reducers/toolListReducer";
/**
 *
 * @returns {[{
 *  datas: [],
 *  loading: boolean,
 *  error: object,
 *  count: null;
 * }]}
 */

const useToolWiseTeam = () => {
  const toolLists = useSelector(toolListSelector);
  const toolandTeam = useSelector(toolWiseTeamSelector);
  const dispatch = useDispatch();
  // useEffect(() => {
  //     let teamParam = { requestedkey: 'ANNUAL REPORT', rootValue: "ANNUAL REPORT", grpKey: "team" };
  //     dispatch(toolWiseTeamAction(teamParam));
  // },[]);
  useEffect(() => {
    let listParam = [];
    if (toolLists.datas) {
      const teamWiseChart = toolLists.datas.map((n) => n.root_value);
      teamWiseChart.forEach((tname, i) => {
        // if (i >= 1) return;
        let teamParam =  {
          "requested_key": tname,
          "root_name": "tool",
          "root_value": tname,
          "grp_key": "team",
          "parent": {
              "root_name": "member",
              "root_value": "",
              "parent": {
                  "root_name": "team",
                  "root_value": "",
                  "parent": {
                      "root_name": "branch",
                      "root_value": ""
                  }
              }
          }
          };
          listParam.push(teamParam);
      });
    }
    console.log('listParam',listParam);
    dispatch(toolWiseTeamAction(listParam));
  }, [toolLists.datas]);
  return [toolandTeam];
};

export default useToolWiseTeam;
