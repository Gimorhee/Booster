import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import "../../styles/NavBar/NavBar.css";

export const SubNavBar = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
  });

  return (
    <animated.div style={props} className="SubNavBar">
      <div className="Inner-Container">
        <Link className="SubNav-Link" to="/">
          <i class="fab fa-bootstrap SubNav-Logo"></i>
          <span>Overview</span>
        </Link>
        <Link className="SubNav-Link" to="/features">
          <i className="fas fa-atom SubNav-Logo"></i>
          <span>Features</span>
        </Link>
        <Link className="SubNav-Link" to="/howtouse">
          <i className="fas fa-question-circle SubNav-Logo"></i>
          <span>Directions</span>
        </Link>
        <Link className="SubNav-Link" to="/games">
          <i className="fas fa-dice-d6 SubNav-Logo"></i>
          <span>Games</span>
        </Link>
        <Link className="SubNav-Link" to="/pricing">
          <i className="fas fa-hand-holding-usd SubNav-Logo"></i>
          <span>Pricing</span>
        </Link>
        <Link className="SubNav-Link" to="/extensions">
          <i className="fas fa-puzzle-piece SubNav-Logo"></i>
          <span>Extensions</span>
        </Link>
      </div>
    </animated.div>
  );
};
