import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Overview4 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const textProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 600,
      config: { duration: 900 },
    });

    const iconProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1200,
      config: { duration: 900 },
    });

    return (
      <div className="Overview4">
        <animated.div style={textProps}>
          <h1>Why Use Booster?</h1>
        </animated.div>
        <animated.div style={iconProps} className="Overview4-Icons">
          <div className="Overview4-Icon">
            <div className="Overview4-Privacy">
              <span>Privacy</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Privacy</h3>
                <p>
                  Booster achieves actual privacy by properly implementing
                  end-to-end encryption.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview4-Icon">
            <div className="Overview4-Powerful">
              <span>Powerful</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Powerful</h3>
                <p>
                  Booster can be used from all major devices and platforms from
                  anywhere with Internet.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview4-Icon">
            <div className="Overview4-Secure">
              <span>Secure</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Secure</h3>
                <p>
                  Booster is carefully engineered to achieve the highest level
                  of security for its users.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview4-Icon">
            <div className="Overview4-Transparent">
              <span>Transparent</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Transparent</h3>
                <p>
                  Booster’s apps are Public Source. Its cryptographic
                  architecture is specified in a comprehensive Security
                  Whitepaper.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview4-Icon">
            <div className="Overview4-Reliable">
              <span>Reliable</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Reliable</h3>
                <p>
                  Booster operates its numerous server infrastructure directly,
                  ensuring clients data always remains available.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview4-Icon">
            <div className="Overview4-Generous">
              <span>Generous</span>
            </div>
            <div className="Overview4-Detail">
              <div className="Detail-Content">
                <h3>Generous</h3>
                <p>
                  Booster provides free 14 days trial for clients to experience
                  our Booster Pro plan. Clients may choose to upgrade to Pro
                  plan or stay in free Rewards plan.
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="h4" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
