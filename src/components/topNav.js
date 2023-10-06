import React from "react";
import userLogo from "../assets/images/user.jpg";

const topNav = props => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
      <div className="navbar-brand h1 mb-0 text-large font-medium">
        Dashboard from Excel
      </div>
      <div className="navbar-nav ml-auto">
        <div className="user-detail-section">
          <span className="pr-2">Hi, {props.enterpriseName} </span>
          <span className="img-container">
            <img src={userLogo} className="rounded-circle" alt="user" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default topNav;
