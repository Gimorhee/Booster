import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import rewardsPlan from "../../images/svg/rewards.svg";
import proPlan from "../../images/svg/pro.svg";
import check from "../../images/svg/check.svg";

export const Overview3 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const leftProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 1000 },
    });

    const rewardsProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1300,
      config: { duration: 1000 },
    });

    const proProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1900,
      config: { duration: 1000 },
    });

    return (
      <div className="Overview3">
        <animated.div style={leftProps} className="Overview3-Left">
          <p>Our Plans:</p>
          <h1>Say Goodbye to High Ping!</h1>
          <h3>Free 14 days trial - No Credit card required</h3>
          <ul>
            Requirements:
            <li>- Windows 7 32-bit or newer</li>
            <li>- MAC - i5 64-bit or newer</li>
          </ul>

          <span>
            After your Booster free trial ends, you may choose to upgrade to
            Booster Pro plan to continue the lag-free and unlimited gaming
            experience or stay with our free Rewards Plan.
          </span>
          <Link to="/register" className="Trial-Button">
            Free 14 days trial
          </Link>
        </animated.div>
        <animated.div
          style={rewardsProps}
          className="Overview3-Plan-Card Rewards-Plan"
        >
          <div className="Plan-Svg">
            <img src={rewardsPlan} alt="" />
          </div>
          <div className="Rewards-Devider Devider"></div>
          <span>Booster Rewards</span>
          <h1>Earn Free Credits</h1>
          <div className="Devider Thin-Devider"></div>
          <div className="Plan-Options">
            <div className="Plan-Option">
              <img src={check} alt="" className="Rewards-Check" />
              <p>Pre-session Check</p>
            </div>
            <div className="Plan-Option">
              <img src={check} alt="" className="Rewards-Check" />
              <p>Pre-session Check</p>
            </div>
            <span>
              Rewards credits are automatically earned for each game session and
              will be applied to your account automatically. You may earn up to
              three credits/day!
            </span>
          </div>
        </animated.div>
        <animated.div style={proProps} className="Overview3-Plan-Card Pro-Plan">
          <div className="Plan-Svg">
            <img src={proPlan} alt="" />
          </div>
          <div className="Pro-Devider Devider"></div>
          <span>Booster Pro</span>
          <h1>$10 / month</h1>
          <div className="Devider Thin-Devider"></div>
          <div className="Plan-Options">
            <div className="Plan-Option">
              <img src={check} alt="" className="Pro-Check" />
              <p>Pre-session Check</p>
            </div>
            <div className="Plan-Option">
              <img src={check} alt="" className="Pro-Check" />
              <p>Post-session Run-through</p>
            </div>
            <div className="Plan-Option">
              <img src={check} alt="" className="Pro-Check" />
              <p>Unlimited Network Access</p>
            </div>
            <span>
              With Booster Pro, you get unlimitted & optimized network!
            </span>
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
