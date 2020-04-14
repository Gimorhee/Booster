import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { useSpring, animated } from "react-spring";

import "../../styles/User/User.css";

export const RegisterLeft = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 500 },
    delay: 200,
  });

  return (
    <div className="Left-Container">
      <animated.div style={props} className="Left-Inner">
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
          <Link to="/register" className="Link-To-Login">
            Already a member?
          </Link>
        </div>
      </animated.div>
    </div>
  );
};
