import React from "react";
import { useSpring, animated } from "react-spring";

import "../../styles/User/User.css";

export const LoginAlert = ({ closeAlert }) => {
  const props = useSpring({
    from: { opacity: 0, marginRight: -500 },
    to: { opacity: 1, marginRight: 0 },
    config: { duration: 400, delay: 400 },
  });

  return (
    <animated.div style={props} className="Login-Alert-Container">
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
    </animated.div>
  );
};
