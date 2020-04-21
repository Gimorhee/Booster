import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import path1 from "../../images/svg/path1.svg";
import path2 from "../../images/svg/path2.svg";
import path3 from "../../images/svg/path3.svg";

export const Directions1 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 1000 },
    });

    return (
      <div className="Directions1">
        <animated.div style={topProps} className="Directions1-Top">
          <h1>Goodbye Lag</h1>
          <h1>Hello Boosted Ping</h1>
          <h1>
            <strong>Start Boosting Your Connections</strong>
          </h1>
          <p>
            Booster is an <strong>optimized gaming booster.</strong> Read below
            to see how Booster works and improves your gaming experience
          </p>
        </animated.div>
        <animated.div style={bottomProps} className="Directions1-Bottom">
          <div className="Directions1-Paths">
            <div className="Directions1-Path">
              <div className="Path-Image">
                <img src={path1} alt="" />
              </div>
              <h3>Determine The Best Path</h3>
              <p>
                Booster optimizes the best connection times to the gaming server
                through your internet connection, taking into account your
                network traffic, path and conditions. With Booster, you will
                never experience any lag while you play!
              </p>
            </div>
            <div className="Directions1-Path">
              <div className="Path-Image">
                <img src={path3} alt="" />
              </div>
              <h3>Optimize & Route Traffic</h3>
              <p>
                Booster optimizes gamers traffic and connection through our
                global network, providing the fastest connection, quicktest
                paths and most stable pings available for gamers to experience
                superior gaming experience.
              </p>
            </div>
            <div className="Directions1-Path">
              <div className="Path-Image">
                <img src={path2} alt="" />
              </div>
              <h3>Boost Your Performance</h3>
              <p>
                Booster significantly reduces gaming ping and lag and simply,
                the speed and performance gets boosted as a result. With Booster
                you will always experience stabilized connection, optimized
                pings and ultimately the best gaming conditions and experience.
              </p>
            </div>
          </div>
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
