import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Pricing1 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 600,
      config: { duration: 900 },
    });

    const middleProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1300,
      config: { duration: 900 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1900,
      config: { duration: 1000 },
    });

    const [planPrice, setPlanPrice] = useState({
      price: 10,
      month: 1,
      device: 1,
      discount: 0,
    });

    let { price, month, device, discount } = planPrice;

    discount = (month - 1) * 0.05 + (device - 1) * 0.05;

    const totalPlanPrice = (price * device - price * device * discount).toFixed(
      2
    );

    const onChange = (e) => {
      setPlanPrice({ ...planPrice, [e.target.name]: Number(e.target.value) });
    };

    return (
      <div className="Pricing1">
        <animated.div style={topProps} className="Pricing1-Top">
          <h1>Our Pricing Plans</h1>
          <h3>
            Get started on Booster Free. Play Free or upgrade with Booster Pro.
          </h3>
          <h5>Save up to 50% with longer plans and more devices</h5>
        </animated.div>
        <animated.div style={middleProps} className="Pricing1-Middle">
          <h5>For Pro Plan Gamers:</h5>
          <div className="Subscription-Plans">
            <div className="Subscription-Plan">
              {" "}
              <label htmlFor="month"># of Month: </label>
              <select name="month" id="month" onChange={onChange}>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">3</option>
                <option value="3">6</option>
                <option value="4">12</option>
              </select>
            </div>
            <div className="Subscription-Plan">
              <label htmlFor="device"># of Device: </label>
              <select name="device" id="month" onChange={onChange}>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">10</option>
                <option value="7">15</option>
                <option value="8">20</option>
              </select>
            </div>
          </div>
        </animated.div>
        <animated.div style={bottomProps} className="Pricing1-Bottom">
          <div className="Pricing1-Left">
            <h1>REWARDS</h1>
            <div className="Plan-Options">
              <div className="Plan-Option">
                <i className="fas fa-dice-one"></i>
                <span>A Fast Path</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-two"></i>
                <span>Unlimited Usage</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-three"></i>
                <span>Pre-Game Speed Check</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-four"></i>
                <span>Post-Game Recap</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-five"></i>
                <span>Booster is Free</span>
              </div>
            </div>
            <div className="Plan-Status">FREE</div>
          </div>
          <div className="Pricing1-Right">
            <h1>PRO</h1>
            <div className="Plan-Options">
              <div className="Plan-Option">
                <i className="fas fa-dice-one"></i>
                <span>Up to 5 Simultaneous Fast Paths</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-two"></i>
                <span>Unlimited Usage</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-three"></i>
                <span>Pre-Game Speed Check</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-four"></i>
                <span>Post-Game Recap with Ping Chart</span>
              </div>
              <div className="Plan-Option">
                <i className="fas fa-dice-five"></i>
                <span>Approx. $10/month</span>
              </div>
            </div>
            <div className="Plan-Status">
              <div className="Plan-Price">
                <h3>${totalPlanPrice} monthly</h3>
                <p>
                  for {month} month(s){" "}
                  {discount > 0 && `- ${discount.toFixed(2) * 100}% savings`}
                </p>
              </div>
              <button>BUY NOW</button>
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
