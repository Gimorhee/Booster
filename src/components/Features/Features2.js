import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Features2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 900 },
    });

    const middleProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 900 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 2000,
      config: { duration: 1000 },
    });

    return (
      <div className="Features2">
        <animated.div style={topProps} className="Features2-Top">
          <h1>What Do You Think?</h1>
          <hr />
        </animated.div>
        <animated.div style={middleProps}>
          <h3>Reclaim Your Connection. Together we will defeat lag!</h3>
          <p>
            Whether you consider we are clever enough or still have room to
            improve, we want to hear our gamers thought about Booster. Become a
            Booster and tell us what you think.
          </p>
        </animated.div>
        <animated.div style={bottomProps}>
          <Link className="Features2-Button" to="/register">
            START BOOSTING
          </Link>
        </animated.div>
      </div>
    );
  };
  return (
    <TrackVisibility partialVisibility once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
