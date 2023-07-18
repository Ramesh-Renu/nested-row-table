import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ICON_TEMPLATE } from "../TableCreation/constant/common";
import IconsCheck from "../TableCreation/ui/IconsCheck/IconsCheck";

const NavBar = () => {
  // Available Comman Icons:- plus, keyboardArrow, tick, circleArrow, arrow
  const IconTemplate = { icon: "keyboardArrow" };
  const useIcon = IconTemplate.icon;
  const collapseData = ICON_TEMPLATE[useIcon][0];
  const showDataIcon = ICON_TEMPLATE[useIcon][1];
  const className = "icon-user-img";
  const location = useLocation(); //for '/sub/zero'

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <div className="flex-col-1">
          <div className="nav-bar">
            <ul>
              <li>
                <span className="icon-cog"></span>
              </li>
              <li>
                <span className="icon-user-img"></span>
              </li>
            </ul>
          </div>
          <div className="side-menubar-list">
            <div className="author-info">
              <span className="author-icon">
                <span className={className} aria-label={"author-icon"}></span>
              </span>
              <span className="userName">Ramesh R</span>
              <span className="userDesignation">Designation</span>
            </div>
            <ul>
              <li>
                <NavLink to="/home" className="icons-list">
                  <span className="icon-home"></span> Home Page{" "}
                  <IconsCheck className={"showDataIcon " + collapseData} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/fileupload" className="icons-list">
                  <span className="icon-upload2"></span> File Upload{" "}
                  <IconsCheck className={"showDataIcon " + collapseData} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="icons-list">
                  <span className="icon-stats-dots"></span> Dashboard{" "}
                  <IconsCheck className={"showDataIcon " + collapseData} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/timesheet" className="icons-list">
                  <span className="icon-table2"></span> Time Sheet{" "}
                  <IconsCheck className={"showDataIcon " + collapseData} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
