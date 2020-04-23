import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Pricing2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 900 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 900 },
    });

    const bottonProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1800,
      config: { duration: 1000 },
    });

    return (
      <div className="Pricing2">
        <animated.div style={topProps}>
          <h1>Ready To Boost Up Your Game?</h1>
        </animated.div>
        <animated.div style={bottomProps} className="Supported-Games">
          <h2>Supported Games</h2>
          <ul>
            <li>Dota 2</li>
            <li>PUBG</li>
            <li>Overwatch</li>
            <li>Fortnite</li>
            <li>League of Legends</li>
            <li>And 30+ more</li>
            <li>
              <Link to="/games">See our full list!</Link>
            </li>
          </ul>
        </animated.div>
        <animated.div style={bottomProps} className="System-Req">
          <h2>System Requirements</h2>
          <ul>
            <li>
              <i class="fab fa-windows"></i> PC - Windows 7 32-bit or newer
            </li>
            <li>
              <i class="fab fa-apple"></i> MAC - i5 64-bit or newer
            </li>
          </ul>
        </animated.div>
        <animated.div style={bottonProps}>
          <Link to="/register" className="Pricing-Button">
            SIGN UP NOW
          </Link>
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="h1" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
