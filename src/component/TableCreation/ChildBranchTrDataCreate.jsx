import { Fragment, useState } from "react";
import ChildTrDataCreate from "./ChildTrDataCreate";
import IconsCheck from "./ui/IconsCheck/IconsCheck";
import appConstants from "@core/constants";
import { motion, useIsPresent } from "framer-motion";
import MonthDataBind from "./MonthDataBind";
import { branchClickedData, toolClickedBranchData } from "@hooks/useTeamData";

const ChildBranchTrDataCreate = ({ data, useIcon, parentRootName }) => {
  const branches = data;
  let isPresent = useIsPresent();
  const [showTeam, setShowTeam] = useState(false);
  const [iconShow, setIconShow] = useState("");
  const [checkTeamName, setCheckTeamName] = useState("");
  const parentClassName = "branchTeamNameList";
  const childClassName = "TeamchildList";

  const collapseData = appConstants.ICON_TEMPLATE[useIcon][0];
  const showDataIcon = appConstants.ICON_TEMPLATE[useIcon][1];

  const [teamDatas, getTeamDatas] = branchClickedData();
  const [toolBranchDatas, getToolBranchDatas] = toolClickedBranchData();

  const branchNameClicked = (e) => {
    let teamName = e.target.ariaLabel;
    let showData = showTeam ? !showTeam : false;
    const nameCheck = checkTeamName;
    if (nameCheck === teamName) {
      showData = showData ? !showData : true;
      setShowTeam(showData);
      setIconShow(teamName);
    }
    const teamParam = { grpKey: "team", branchRootValue: teamName };
    const toolTeamParam = { rootValue: teamName, grpKey: "branch" };
    switch (parentRootName) {
      case "all_team":
        getTeamDatas(teamParam);
        break;
      case "all_tool":
        getToolBranchDatas(toolTeamParam);
        break;
      default:
        return null;
    }
    branches.forEach((team) => {
      if (team.root_value === teamName) {
        showData = showData ? !showTeam : true;
        setCheckTeamName(team.root_value);
        setShowTeam(showData);
        setIconShow(teamName);
      } else {
        return;
      }
    });
  };

  return (
    <Fragment>
      {branches &&
        branches.map((child, b) => {
          let childMonth = child.months;
          let branchName = child.root_value;
          return (
            <Fragment key={b}>
              <motion.tr
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                }}
                transition={{ opacity: { duration: 1 } }}
                style={{
                  position: isPresent ? "relative" : "absolute",
                  display: isPresent ? "table-row" : "flex",
                  alignItems: isPresent ? "" : "center",
                }}
                className={"branchNameList" + " w-full"}
                id={`${branchName.replaceAll(" ", "-")}`}
                key={branchName}
              >
                <td
                  role="button"
                  onKeyPress={branchNameClicked}
                  onClick={branchNameClicked}
                  aria-label={branchName}
                  tabIndex={0}
                >
                  <IconsCheck
                    onClick={() => branchNameClicked}
                    className={
                      iconShow === branchName && showTeam
                        ? showDataIcon
                        : collapseData
                    }
                    ariaLabel={branchName}
                  />
                  {branchName}
                </td>
                <MonthDataBind
                  childMonth={childMonth}
                  branchTeamName={branchName}
                />
              </motion.tr>

              {checkTeamName === branchName &&
                showTeam &&
                teamDatas.branchClickTeam &&
                parentRootName == "all_team" && (
                  <ChildTrDataCreate
                    childData={teamDatas.branchClickTeam}
                    parentClassName={parentClassName}
                    childClassName={childClassName}
                    useIcon={useIcon}
                    currentBranch={checkTeamName}
                    parentRootName={parentRootName}
                  />
                )}
              {checkTeamName === branchName &&
                showTeam &&
                toolBranchDatas.toolClickBranch &&
                parentRootName == "all_tool" && (
                  <ChildTrDataCreate
                    childData={toolBranchDatas.toolClickBranch}
                    parentClassName={parentClassName}
                    childClassName={childClassName}
                    useIcon={useIcon}
                    currentBranch={checkTeamName}
                    parentRootName={parentRootName}
                  />
                )}
            </Fragment>
          );
        })}
    </Fragment>
  );
};
export default ChildBranchTrDataCreate;
