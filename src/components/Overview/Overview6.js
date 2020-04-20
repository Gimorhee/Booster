import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import chat1 from "../../images/svg/chat1.svg";
import chat2 from "../../images/svg/chat2.svg";

export const Overview6 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const headerProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 800,
      config: { duration: 900 },
    });

    const testimonialProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 900 },
    });

    return (
      <div className="Overview6">
        <animated.div style={headerProps}>
          <h4>Do not take our word for it</h4>
          <h1>Hear it from fellow Boosters.</h1>
        </animated.div>
        <animated.div
          style={testimonialProps}
          className="Overview6-Testimonianls"
        >
          <div className="Overview6-Testimonial">
            <div className="Chat-Container">
              <img src={chat1} alt="" />
            </div>
            <div className="Testimonial-Content">
              <p>
                "I was suffering from playing games with bad pings but Booster
                lowered my ping from 170ms to 55ms. Booster is the best!"
              </p>
              <span>-Danny, Canada</span>
            </div>
          </div>
          <div className="Overview6-Testimonial">
            <div className="Chat-Container">
              <img src={chat2} alt="" />
            </div>
            <div className="Testimonial-Content">
              <p>
                "Booster works fantastically with zero interference. Thank you
                so much for making something to improve my gaming life!"
              </p>
              <span>-Danbi, Korea</span>
            </div>
          </div>
          <div className="Overview6-Testimonial">
            <div className="Chat-Container">
              <img src={chat1} alt="" />
            </div>
            <div className="Testimonial-Content">
              <p>
                "I was suffering from playing games with bad pings but Booster
                lowered my ping from 170ms to 55ms. Booster is the best!"
              </p>
              <span>-Daniel, France</span>
            </div>
          </div>
          <div className="Overview6-Testimonial">
            <div className="Chat-Container">
              <img src={chat2} alt="" />
            </div>
            <div className="Testimonial-Content">
              <p>
                "I was always playing games with over 300ms pings but with
                Booster, my ping never goes above 60ms ping."
              </p>
              <span>-Noah, USA </span>
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
