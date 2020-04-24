import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";
import screen from "../../images/screen.png";

export const Download1 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 800,
      config: { duration: 1000 },
    });

    const middleProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1500,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 2000,
      config: { duration: 1000 },
    });

    return (
      <div className="Download1">
        <animated.div style={topProps} className="Download1-Top">
          <div className="Booster-Logo">
            <i className="fab fa-bootstrap"></i>
            <span>Download Booster</span>
          </div>
          <h1>
            Reduce loading times, improve network connections, strength gaming
            performane
          </h1>
          <p>
            Downloading Booster provides you acces to the worldwide network of
            servers and our intelligent application, allowing you to outsmart
            the competitor and improve your gaming performance.
          </p>
          <animated.div style={middleProps} className="Download1-Middle">
            <h4>
              Download Booster for PC<sup>®</sup>
            </h4>
            <div className="Download1-Installs">
              <div className="Download1-Install">
                <i className="fab fa-windows"></i>
                <span>
                  Download and Install for <strong>Windows</strong>
                </span>
              </div>
              <div className="Download1-Install">
                <i className="fab fa-apple"></i>
                <span>
                  Download and Install for <strong>Macbook</strong>
                </span>
              </div>
            </div>
            <p>
              Start Boosting with our <strong>14 days Free trial.</strong>
            </p>
          </animated.div>

          <animated.div style={bottomProps} className="Download1-Bottom">
            <img src={screen} alt="" />
          </animated.div>
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
