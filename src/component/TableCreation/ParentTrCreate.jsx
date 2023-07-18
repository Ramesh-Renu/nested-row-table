import React, { Fragment } from "react";
import appConstants from "@core/constants";
import IconsCheck from "./ui/IconsCheck/IconsCheck";
import MonthDataBind from "./MonthDataBind";

const ParentTrCreate = ({ datas, parentClick, showData, useIcon }) => {
  const monthData = datas.months;
  const parentName = datas.root_value ? datas.root_value : "Euroland";
  const collapseData = appConstants.ICON_TEMPLATE[useIcon][0];
  const showDataIcon = appConstants.ICON_TEMPLATE[useIcon][1];

  return (
    <Fragment>
      <tr
        className={"parentName" + " w-full"}
        id={`${parentName.replaceAll(" ", "-")}`}
        key={"001"}
      >
        <td
          role="button"
          onKeyPress={parentClick}
          onClick={parentClick}
          id={`${"id" + parentName.replace(" ", "-")}`}
          aria-label={parentName}
          tabIndex={0}
        >
          <IconsCheck className={showData ? showDataIcon : collapseData} />
          {parentName}
        </td>
        <MonthDataBind childMonth={monthData} />
      </tr>
    </Fragment>
  );
};

export default ParentTrCreate;
