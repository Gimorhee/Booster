import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Pricing1 = () => {
  const [planPrice, setPlanPrice] = useState({
    price: 10.99,
    month: 1,
    device: 1,
    discount: 0.5,
  });

  const { price, month, device, discount } = planPrice;

  return (
    <div className="Pricing1">
      <div className="Pricing1-Top">
        <h1>Our Pricing Plans</h1>
        <h3>
          Get started on Booster Free. Play Free or upgrade with Booster Pro.
        </h3>
        <h5>Save up to 50% with longer plans and more devices</h5>
        <Link to="/register" className="Pricing-Button">
          SIGN UP NOW
        </Link>
      </div>
      <div className="Pricing1-Middle">
        <label htmlFor="month">Month: </label>
        <select name="" id="month">
          <option value="1">1 M</option>
          <option value="3">3 M</option>
          <option value="6">6 M</option>
          <option value="12">12 M</option>
        </select>
        <label htmlFor="month">Month: </label>
        <select name="" id="month">
          <option value="1">1 M</option>
          <option value="3">3 M</option>
          <option value="6">6 M</option>
          <option value="12">12 M</option>
        </select>
      </div>
      <div className="Pricing1-Bottom">
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
              <h3>
                ${price * device - (price * device * discount).toFixed(2)}{" "}
                monthly
              </h3>
              <p>for {month} month(s)</p>
            </div>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
