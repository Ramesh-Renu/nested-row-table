import React from "react";
import { NavLink } from 'react-router-dom';
import appConstants from "@core/constants";
import IconsCheck from "../../../component/TableCreation/ui/IconsCheck/IconsCheck";

const sideMenu = ()=>{

  const collapseData = appConstants.ICON_TEMPLATE.keyboardArrow[0];
  // const showDataIcon = appConstants.ICON_TEMPLATE.keyboardArrow[1];
  const className = 'icon-Euroland_logo';
  
  return (
    <>
      <div className="side-menubar-list">
        {/* <div className="author-info">
        <span className="author-icon">
        <span className={className} aria-label={'author-icon'}><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
        </span>
        <span className="userName">Eurolandcom</span>
        <span className="userDesignation">Estonia</span>
        </div> */}
        <ul>
            <li><NavLink to="/home" className="icons-list"><span className="icon-pie-chart"></span> <span className="Navlink--name">Dashboard</span></NavLink></li>
            <li><NavLink to="/fileupload" className="icons-list"><span className="icon-upload2"></span> <span className="Navlink--name">File Upload</span></NavLink></li>
            <li><NavLink to="/timesheet" className="icons-list"><span className="icon-table2"></span> <span className="Navlink--name">Time Sheet</span></NavLink></li>
            <li><NavLink to="/productwise" className="icons-list"><span className="icon-product-c"></span> <span className="Navlink--name">Product wise Time Sheet</span></NavLink></li>
            <li><NavLink to="/department" className="icons-list"><span className="icon-department-c"></span> <span className="Navlink--name">Department</span></NavLink></li>
            <li><NavLink to="/reports" className="icons-list"><span className="icon-stats-dots"></span> <span className="Navlink--name">Reports</span></NavLink></li>

        </ul>
      </div>
    </>
  );
}

export default sideMenu;