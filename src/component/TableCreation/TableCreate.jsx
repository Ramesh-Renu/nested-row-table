import React, { useState, useEffect } from "react";
import ParentTrCreate from "./ParentTrCreate";
import ChildBranchTrDataCreate from "./ChildBranchTrDataCreate";
import { IconTemplate } from "@core/constants";
import appConstants from "@core/constants";
import useBranches from "@hooks/useBranches";
import useToolList from "@hooks/useToolList";

const TableCreate = ({ datas, rootName }) => {
  const monthNames = appConstants.MONTHS_TEMPLATE;
  const [enableDatas, setEnableDatas] = useState(false);
  const useIcon = IconTemplate.icon;
  const [datasBranch, setDatasBranch] = useState([]);

  const [branchesList, getBranchesData] = useBranches();
  const [toolList, getToolList] = useToolList();
  const branchparam = { grpKey: "branch" };
  const toolparam = { grpKey: "tool" };

  useEffect(() => {
    getBranchesData(branchparam);
    getToolList(toolparam);
  }, []);

  const parentClick = () => {
    switch (rootName) {
      case "all_team":
        setDatasBranch(branchesList.datas);
        break;
      case "all_tool":
        setDatasBranch(toolList.datas);
        break;
      default:
        return null;
    }
    let showData = enableDatas ? !enableDatas : true;
    setEnableDatas(showData);
  };

  return (
    <div className="container-body">
      <table className="resource-management" key={"table1"}>
        <thead>
          <tr className="headings" key={"table-th"}>
            <th>Name</th>
            {monthNames &&
              monthNames.map((thname, i) => {
                return <th key={i}>{thname.name}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {datas.months && (
            <ParentTrCreate
              datas={datas}
              parentClick={parentClick}
              showData={enableDatas}
              useIcon={useIcon}
            />
          )}
          {enableDatas && datasBranch && (
            <ChildBranchTrDataCreate
              data={datasBranch}
              useIcon={useIcon}
              parentRootName={rootName}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCreate;
