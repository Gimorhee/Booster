import React from "react";
import { Link } from "react-router-dom";

import "../../styles/NavBar/NavBar.css";

export const SubNavBar = () => {
  return (
    <div className="SubNavBar">
      <div className="Inner-Container">
        <Link className="SubNav-Link" to="/">
          Overview
        </Link>
        <Link className="SubNav-Link" to="/features">
          Features
        </Link>
        <Link className="SubNav-Link" to="/howtouse">
          How To Use
        </Link>
        <Link className="SubNav-Link" to="/games">
          Supported Games
        </Link>
        <Link className="SubNav-Link" to="/pricing">
          Pricing
        </Link>
        <Link className="SubNav-Link" to="/extensions">
          Extensions
        </Link>
      </div>
    </div>
  );
};
