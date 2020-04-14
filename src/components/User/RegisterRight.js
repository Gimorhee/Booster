import React from "react";
import { useSpring, animated } from "react-spring";

import "../../styles/User/User.css";

export const RegisterRight = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 500 },
    delay: 200,
  });

  return (
    <div className="Right-Container">
      <animated.div style={props} className="Right-Inner">
        <div className="Right-Content">
          <h3>SYSTEM REQUIREMENTS</h3>
          <p>
            <i className="fab fa-windows"></i>PC - Windows 7 32-bit or newer{" "}
            <br />
            <i className="fab fa-apple"></i>MAC - i5 64-bit or newer
          </p>
          <h3>SUPPORTED GAMES</h3>
          <ul>
            <li>League of Legends</li>
            <li>FIFA</li>
            <li>PUBG</li>
            <li>Fortnite</li>
            <li>Starcraft</li>
            <li>Path of Exile</li>
            <li>Dota</li>
            <li>And more +</li>
          </ul>

          <h3>GETTING STARTED</h3>
          <p>
            All you need to do is just sign up, download and start playing!
            Booster will automatically start working and optimizing your
            connection and ping with every games Booster support. With the
            introduction of Booster, we're zeroing in to optimize internet
            connections for another audience- gamers.
          </p>
          <p>
            {" "}
            <strong>PRIVACY:</strong> Booster doesn't monitor personally
            identiflable info or any browsing data or any other Internet
            activities. Booster only maintains and monitors gamers network
            connections so that we can continuously improve our service and
            boost pings for gamers to carry their games!
          </p>
        </div>
      </animated.div>
    </div>
  );
};
