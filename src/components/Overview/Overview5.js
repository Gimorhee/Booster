import React from "react";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Overview5 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const headerProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 600,
      config: { duration: 900 },
    });

    const stepProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1200,
      config: { duration: 900 },
    });

    const buttonProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1800,
      config: { duration: 900 },
    });

    return (
      <div className="Overview5">
        <animated.div style={headerProps}>
          <h4>How Booster Works</h4>
          <h1>Boost your ping now.</h1>
        </animated.div>
        <animated.div style={stepProps} className="Overview5-Steps">
          <div className="Overview5-Step">
            <div className="Step-Container">
              <span className="Step-Number">1</span>
            </div>
            <h5>Start with Booster Free</h5>
            <p>
              First, simply sign up and start gaming! No credit card required.
              Booster will automatically optimize your connection with all the
              supported games you play.
            </p>
          </div>
          <div className="Overview5-Step">
            <div className="Step-Container">
              <span className="Step-Number">2</span>
            </div>
            <h5>Pre-Session Check</h5>
            <p>
              Before you play games, test your connection - the 'speedtest' for
              better gaming experience. Booster will monitor your ping and
              connection and boost your gaming performance.
            </p>
          </div>
          <div className="Overview5-Step">
            <div className="Step-Container">
              <span className="Step-Number">3</span>
            </div>
            <h5>Lag-free Gaming</h5>
            <p>
              Simply start playing by just launching your game as usual. Booster
              runs automatically in the background and boost up and stabilize
              your ping.
            </p>
          </div>
          <div className="Overview5-Step">
            <div className="Step-Container">
              <span className="Step-Number">4</span>
            </div>
            <h5>Recap of post games</h5>
            <p>
              The analysis of post-game of your connection provides you
              information on how booster assists your connection and improves
              your gaming performance over time.
            </p>
          </div>
        </animated.div>
        <animated.div style={buttonProps}>
          <Link to="/register" className="Overview5-Button">
            Get Booster Free Now!
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
