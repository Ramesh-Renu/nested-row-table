import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TableCreate from "../TableCreation/TableCreate";
import { combinedDataAction } from "../../actions/combinedDataAction";
import { useDispatch } from "react-redux";

const Productwise = () => {
  const dispatch = useDispatch();
  const getdatas = useSelector((state) => state.combined.datas);
  useEffect(() => {
    dispatch(combinedDataAction());
  }, []);

  return (
    <div className="projectlist">
      {getdatas && (
        <>
          <h1 className="projectlist__heading">
            Product List/Timesheet ({getdatas[0].year ? getdatas[0].year : ""})
          </h1>
          <TableCreate datas={getdatas[0]} rootName={"all_tool"} />
        </>
      )}
    </div>
  );
};

export default Productwise;
