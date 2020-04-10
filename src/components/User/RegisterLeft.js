import React from "react";
import { Link } from "react-router-dom";

import { RegisterForm } from "./RegisterForm";

import "../../styles/User/User.css";

export const RegisterLeft = () => {
  return (
    <div className="Left-Container">
      <div className="Left-Inner">
        <div className="Left-Content">
          <Link to="/" className="Register-Logo">
            <i className="fab fa-bootstrap"></i>
            <span>OOSTER</span>
          </Link>
          <h2>
            FREE TRIAL <br /> NO CREDIT CARD REQUIRED!
          </h2>
          <p>
            You can try Booster for free for your first week. You may upgrade to
            Booster Pro to continue the same unlimited, boosted-ping experience
            or stay our free Booster Rewards plan.
          </p>
          <RegisterForm />
          <Link to="/login" className="Link-To-Login">
            Already a member?
          </Link>
        </div>
      </div>
    </div>
  );
};
