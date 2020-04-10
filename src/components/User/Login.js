import React, { Fragment, useState } from "react";

import { LoginAlert } from "./LoginAlert";

import "../../styles/User/User.css";

export const Login = () => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Fragment>
      <div className="Login-Container">
        <div className="Login-Inner">
          <form>
            <input type="text" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
          </form>
          <div className="Forgot-Password">
            <i className="fas fa-unlock-alt"></i>
            <span>Forgot your password?</span>
          </div>
          <div className="Login-Buttons">
            <div>
              <input type="checkbox" />
              Remeber me
            </div>
            <button>Log In</button>
          </div>
        </div>
      </div>
      {showAlert && <LoginAlert closeAlert={closeAlert} />}
    </Fragment>
  );
};
