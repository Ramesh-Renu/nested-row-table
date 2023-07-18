import React, { useState, Fragment } from "react";
import { motion, useIsPresent } from "framer-motion";
import MonthDataBind from "./MonthDataBind";
import useMemberTask from "@hooks/useMemberTask";

export function InnerChildDataCreate({
    innerchildData,
    className,
    currentTeamName,
    branchName,
    toolName,
    parentRootName,
  }) {
    const childDataList = innerchildData;
    let isPresent = useIsPresent();
    const [showTeam, setShowTeam] = useState(false);
    const [checkTeamName, setCheckTeamName] = useState("");
    const [memberTaskDatas, getMemberTaskDatas] = useMemberTask();
  
    const rowSubNameClicked = (e) => {
      let empName = e.target.ariaSelected;
      let showData = showTeam ? !showTeam : false;
      const nameCheck = checkTeamName;
      if (nameCheck === empName) {
        showData = showData ? !showData : true;
        setShowTeam(showData);
      }
      childDataList.forEach((team) => {
        if (team.root_value === empName) {
          showData = showData ? !showTeam : true;
          let name = team.root_value ? team.root_value : " ";
          const toolTeamParam = {
            rootValue: toolName,
            grpKey: "task",
            memberRootValue: name,
            teamRootValue: currentTeamName,
            branchRootValue: branchName,
          };
  
          switch (parentRootName) {
            case "all_team":
              // getTeamMemberDatas(toolTeamParam);
              break;
            case "all_tool":
              getMemberTaskDatas(toolTeamParam);
              break;
            default:
              return null;
          }
          setShowTeam(showData);
          setCheckTeamName(name);
        } else return;
      });
    };
  
    return (
      <Fragment>
        {childDataList &&
          childDataList.map((child, k) => {
            let childMonth = child.months;
            let branchName = child.root_value ? child.root_value : " ";
            let empName = child.empName ? child.empName : " ";
            return (
              <Fragment key={k + 1}>
                <motion.tr
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{ opacity: { duration: 1.5 } }}
                  style={{
                    position: isPresent ? "relative" : "absolute",
                    display: isPresent ? "table-row" : "flex",
                    alignItems: isPresent ? " " : "center",
                  }}
                  className={className + " w-full"}
                  id={`${branchName.replaceAll(" ", "-")}`}
                  key={branchName + "0" + k}
                >
                  <td
                    role="button"
                    tabIndex={0}
                    aria-label={branchName}
                    aria-selected={
                      parentRootName == "all_tool" ? child.root_value : branchName
                    }
                    onKeyPress={rowSubNameClicked}
                    onClick={rowSubNameClicked}
                  >
                    {parentRootName == "all_tool" ? empName : branchName}
                    {console.log("empName", empName, checkTeamName)}
                    {checkTeamName == branchName &&
                      showTeam &&
                      memberTaskDatas.datas &&  !memberTaskDatas.loading && (
                        <div className="task-popup">
                          <ul className="task-list">
                            {memberTaskDatas.datas.map((tas,i) => {
                              return (
                                <li className="task-des" key={'li'+i}>{tas.root_value}</li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                  </td>
                  <MonthDataBind
                    childMonth={childMonth}
                    branchTeamName={branchName}
                  />
                </motion.tr>
              </Fragment>
            );
          })}
      </Fragment>
    );
  }
  