import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TableCreate from "../TableCreation/TableCreate";
import { useDispatch } from "react-redux";
import { combinedDataAction } from "../../actions/combinedDataAction";

const BranchWiseTime = () => {
  const dispatch = useDispatch();
  const getdatas = useSelector((state) => state.combined.datas);
  useEffect(() => {
    dispatch(combinedDataAction());
  }, []);

  return (
    <div className="timesheet">
      {getdatas && (
        <>
          <h1 className="timesheet__heading">
            Monthly Timesheet ({getdatas[0].year ? getdatas[0].year : ""})
          </h1>
          <TableCreate datas={getdatas[0]} rootName={"all_team"} />
        </>
      )}
    </div>
  );
};

export default BranchWiseTime;
