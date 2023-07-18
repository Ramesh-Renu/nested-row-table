import React, { useState, useEffect, Fragment } from "react";
import IconsCheck from "./ui/IconsCheck/IconsCheck";
import appConstants from "@core/constants";
import { motion, useIsPresent } from "framer-motion";
import MonthDataBind from "./MonthDataBind";
import useTeamMemberData from "@hooks/useTeamMemberData";
import { branchClickedData } from "@hooks/useTeamData";
import { InnerChildDataCreate } from "./InnerChildDataCreate";

export default function ChildTrDataCreate({
  childData,
  parentClassName,
  childClassName,
  useIcon,
  currentBranch,
  parentRootName,
}) {
  let isPresent = useIsPresent();
  useEffect(() => {
    setChildDataList(childData);
    setCurrentName(currentBranch);
  });

  const [currentName, setCurrentName] = useState();
  const [childDataList, setChildDataList] = useState();
  const [showTeam, setShowTeam] = useState(false);
  const [checkTeamName, setCheckTeamName] = useState("");
  const [iconShow, setIconShow] = useState("");
  const showDataClassPlus = "show-data-plus";
  const collapseDataClassPluss = "collapse-data-plus";
  const collapseData = appConstants.ICON_TEMPLATE[useIcon][0];
  const showDataIcon = appConstants.ICON_TEMPLATE[useIcon][1];

  const [teamMemberDatas, getTeamMemberDatas] = useTeamMemberData();
  const [teamDatas, getTeamDatas] = branchClickedData();

  const childTeamNameClicked = (e) => {
    let teamName = e.target.ariaLabel;
    let showData = showTeam ? !showTeam : false;
    const nameCheck = checkTeamName;
    if (nameCheck === teamName) {
      showData = showData ? !showData : true;
      setShowTeam(showData);
      setIconShow(teamName);
    }
    childDataList.forEach((team) => {
      if (team.root_value === teamName) {
        showData = showData ? !showTeam : true;
        let name = team.root_value ? team.root_value : " ";
        const teamParam = { grpKey: "member", teamRootValue: name };
        const toolTeamParam = {
          rootValue: currentBranch,
          grpKey: "team",
          branchRootValue: teamName,
        };
        switch (parentRootName) {
          case "all_team":
            getTeamMemberDatas(teamParam);
            break;
          case "all_tool":
            getTeamDatas(toolTeamParam);
            break;
          default:
            return null;
        }
        setShowTeam(showData);
        setCheckTeamName(name);
        setIconShow(teamName);
      } else return;
    });
  };

  return (
    <Fragment>
      {childDataList &&
        childDataList.map((data, a) => {
          const childMonth = data.months;
          let branchTeamName = data.root_value ? data.root_value : "";

          return (
            <Fragment key={a}>
              <motion.tr
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                }}
                transition={{ opacity: { duration: 2 } }}
                style={{
                  position: isPresent ? "relative" : "absolute",
                  display: isPresent ? "table-row" : "flex",
                  alignItems: isPresent ? "" : "center",
                }}
                className={`${
                  iconShow === branchTeamName && showTeam
                    ? parentClassName + " " + showDataClassPlus
                    : parentClassName + " " + collapseDataClassPluss + " w-full"
                }`}
                key={branchTeamName + a}
                id={`${branchTeamName.replaceAll(" ", "-")}`}
              >
                <td
                  role="button"
                  onKeyPress={childTeamNameClicked}
                  onClick={childTeamNameClicked}
                  aria-label={branchTeamName}
                  tabIndex={0}
                >
                  <IconsCheck
                    onClick={() => childTeamNameClicked}
                    className={
                      iconShow === branchTeamName && showTeam
                        ? showDataIcon
                        : collapseData
                    }
                    ariaLabel={branchTeamName}
                  />
                  {branchTeamName}
                </td>
                <MonthDataBind
                  childMonth={childMonth}
                  branchTeamName={branchTeamName}
                />
              </motion.tr>
              {checkTeamName === branchTeamName &&
                showTeam &&
                teamMemberDatas.datas && (
                  <ChildDataCreate
                    childData={
                      parentRootName == "all_tool"
                        ? teamDatas.branchClickTeam
                        : teamMemberDatas.datas
                    }
                    cname={branchTeamName}
                    currentName={currentName}
                    className={childClassName}
                    parentRootName={parentRootName}
                    iconShow={iconShow}
                    useIcon={useIcon}
                  />
                )}
            </Fragment>
          );
        })}
    </Fragment>
  );
}
export function ChildDataCreate({
  childData,
  className,
  parentRootName,
  useIcon,
  cname,
  currentName,
}) {
  const childDataList = childData;
  const collapseData = appConstants.ICON_TEMPLATE[useIcon][0];
  const showDataIcon = appConstants.ICON_TEMPLATE[useIcon][1];
  const [iconShow, setIconShow] = useState("");
  const [checkTeamName, setCheckTeamName] = useState("");
  const [showTeam, setShowTeam] = useState(false);
  let isPresent = useIsPresent();

  const [teamMemberDatas, getTeamMemberDatas] = useTeamMemberData();

  const rowNameClicked = (e) => {
    if (parentRootName == "all_team") return;
    let teamName = e.target.ariaLabel;
    let showData = showTeam ? !showTeam : false;
    const nameCheck = checkTeamName;
    if (nameCheck === teamName) {
      showData = showData ? !showData : true;
      setShowTeam(showData);
      setIconShow(teamName);
    }

    childDataList.forEach((team) => {
      if (team.root_value === teamName) {
        showData = showData ? !showTeam : true;
        let teamData = team.nameList ? team.nameList : [];
        let name = team.root_value ? team.root_value : " ";

        // const teamParam = {"grpKey":"member","teamRootValue":name};
        const toolTeamParam = {
          rootValue: currentName,
          grpKey: "member",
          teamRootValue: name,
          branchRootValue: cname,
        };

        switch (parentRootName) {
          case "all_team":
            // getTeamMemberDatas(toolTeamParam);
            break;
          case "all_tool":
            getTeamMemberDatas(toolTeamParam);
            break;
          default:
            return null;
        }
        setShowTeam(showData);
        setCheckTeamName(name);
        setIconShow(teamName);
      } else return;
    });
  };
  return (
    <Fragment>
      {childDataList &&
        childDataList.map((child, c) => {
          let childMonth = child.months;
          let branchName = child.root_value ? child.root_value : "";
          let empName = child.empName ? child.empName : "";
          return (
            <Fragment key={c}>
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
                className={
                  teamMemberDatas.loading == 'true'
                    ? className + " w-full td-data-loading"
                    : className + " w-full"
                }
                id={`${branchName.replaceAll(" ", "-")}`}
                key={branchName + "0" + c}
              >
                <td
                  role="button"
                  onKeyPress={rowNameClicked}
                  onClick={rowNameClicked}
                  tabIndex={0}
                  aria-label={branchName}
                >
                  {parentRootName == "all_tool" && (
                    <IconsCheck
                      onClick={() => rowNameClicked}
                      className={
                        iconShow === branchName && showTeam
                          ? showDataIcon
                          : collapseData
                      }
                      ariaLabel={branchName}
                    />
                  )}
                  {parentRootName == "all_tool" ? branchName : empName}
                </td>
                <MonthDataBind
                  childMonth={childMonth}
                  branchTeamName={branchName}
                />
              </motion.tr>
              {checkTeamName === branchName &&
                showTeam &&
                teamMemberDatas.datas && !teamMemberDatas.loading &&  (
                  <InnerChildDataCreate
                    innerchildData={teamMemberDatas.datas}
                    className={"InnerChildDataCreate"}
                    parentRootName={parentRootName}
                    iconShow={iconShow}
                    useIcon={useIcon}
                    currentTeamName={checkTeamName}
                    branchName={cname}
                    toolName={currentName}
                  />
                )}
            </Fragment>
          );
        })}
    </Fragment>
  );
}
