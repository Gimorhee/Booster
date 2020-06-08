import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Download2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 800,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1500,
      config: { duration: 1000 },
    });

    return (
      <div className="Download2">
        <animated.div style={topProps}>
          <h1>Optimize Your Gaming Experience</h1>
        </animated.div>
        <animated.div style={bottomProps}>
          <p>
            With Booster, improve your gaming performance and environment
            quickly and easily! Booster will automatically optimize your network
            and stabilize your connection to significantly reduce lag, lower
            ping and, most importantly, boost up your speed. When you download
            Booster, you gain access to the worldwide server networks and our
            intelligent application, allowing you to outsmart the competition
            and boost up your entire gaming experience. Booster will
            automatically selects the fastest path available, even if that is
            your standard, non-Booster connection.
          </p>
          <Link to="/register">Start Boosting</Link>
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="p" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
