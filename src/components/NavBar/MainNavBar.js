import React from "react";
import { Link } from "react-router-dom";

export const MainNavBar = ({ showLoginForm }) => {
  return (
    <div className="MainNavBar">
      <Link to="/">
        <i className="fab fa-bootstrap Brand-Logo"></i>
      </Link>
      <div className="Button-Container">
        <Link className="Register-Button" to="/register">
          <span>B</span> Create Account
        </Link>
        <Link className="Login-Button" onClick={() => showLoginForm()}>
          Login
        </Link>
      </div>
    </div>
  );
};
