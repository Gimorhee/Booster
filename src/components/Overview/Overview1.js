import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import image from "../../images/overview.png";

import "../../styles/Overview/Overview.css";

export const Overview1 = () => {
  const topProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: { duration: 1000 },
  });

  const bottomProps1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1200,
    config: { duration: 1000 },
  });

  return (
    <div className="Overview1">
      <animated.div style={topProps} className="Overview1-Top">
        <span className="Overview1-Header">Faster Ping</span>
        <span className="Overview1-Header">Smoother Gaming</span>
        <span className="Overview1-Header">
          <strong>Your Best Connection</strong> to Victory
        </span>
        <p>
          Become a Booster and get <strong>FREE 14 DAYS*</strong> trial.
        </p>
        <Link to="/register" className="Register-Button">
          Create Account
        </Link>
      </animated.div>
      <animated.div style={bottomProps1} className="Overview1-Bottom">
        <div className="Overview1-Bottom-Inner">
          <img src={image} alt="Laptop-Image" />
        </div>
      </animated.div>
    </div>
  );
};
