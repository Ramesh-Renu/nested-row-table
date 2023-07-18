import appConstants from "@core/constants";
import React, { Fragment } from "react";

const MonthDataBind = ({ childMonth, branchTeamName }) => {
  const monthNames = appConstants.MONTHS_TEMPLATE;
  const childData = childMonth;
  const name = branchTeamName ? branchTeamName : "";
  return (
    <Fragment>
      {monthNames &&
        monthNames.map((td, i) => {
          let mo = td.name.toLowerCase();
          let obj = childData.find((o) => {
            let find = o.name ? o.name.toLowerCase() : "";
            return find === mo;
          });
          if (typeof obj === "undefined") {
            return <td key={name + i + 2}>{"-"}</td>;
          } else {
            let keyval = obj.name ? obj.name.toLowerCase() : "";
            // let val = parseFloat(obj.hours_spent).toFixed(2);
            let val = parseInt(obj.hours_spent);
            return <td key={name + keyval + val + i}>{val}</td>;
          }
        })}
    </Fragment>
  );
};

export default MonthDataBind;
