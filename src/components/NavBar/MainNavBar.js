import React from "react";
import { Link } from "react-router-dom";

export const MainNavBar = () => {
  return (
    <div className="MainNavBar">
      <Link className="Brand-Logo" to="/">
        B
      </Link>
      <div className="Button-Container">
        <Link className="Register-Button" to="/register">
          <span>B</span> Create Account
        </Link>
        <Link className="Login-Button" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};
