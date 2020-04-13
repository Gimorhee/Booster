import React from "react";

import "../../styles/User/User.css";

export const LoginAlert = ({ closeAlert }) => {
  return (
    <div className="Login-Alert-Container">
      <i className="fas fa-times CloseButton" onClick={() => closeAlert()}></i>
      <div className="Top-Alert">
        <i className="fas fa-exclamation-circle"></i>
        <p>
          Please do not enter your password on a device that you do not fully
          trust. Do not log into your account from a shared or public computer.
        </p>
      </div>
      <div className="Center-Alert">
        <p>
          For enhanced security, please create a password with at least one{" "}
          <span>uppercase letter</span> and <span>special symbols.</span>
        </p>
      </div>
      <div className="Bottom-Alert">
        <input type="checkbox" />
        <span>Do not show again</span>
      </div>
    </div>
  );
};
