import React from "react";
import "./sidebar.css";
import "boxicons";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="selected">
        <i class='bx bx-globe'></i>
          <span>Top News</span>
        </div>
        <div>
        <i class='bx bx-user-pin'></i>
          <span>For You</span>
        </div>
        <div>
        <i class='bx bx-star'></i>
          <span>Following</span>
        </div>
        <div>
        <i class='bx bx-search-alt'></i>
          <span>Saved Searches</span>
        </div>
       
      </div>
    </div>
  );
};

export default SideBar;
