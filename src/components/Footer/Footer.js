import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../styles/Footer/Footer.css";

export const Footer = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 600,
      config: { duration: 900 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1200,
      config: { duration: 900 },
    });

    return (
      <div className="Footer">
        <animated.div style={topProps} className="Footer-Top">
          <div className="Footer-Signup">
            <p>Sign up for future updates:</p>
            <form>
              <input type="email" />
              <button
                onClick={(e) => e.preventDefault()}
                className="Signup-Button"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </animated.div>
        <animated.div style={bottomProps} className="Footer-Bottom">
          <div className="Footer-Content">
            <div className="Content-Icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p>8250 158st Surrey, BC V4N 0R5</p>
          </div>
          <div className="Footer-Content">
            <a className="Content-Link" href="mailto:dongyunrhee@gmail.com">
              <div className="Content-Icon">
                <i className="far fa-envelope"></i>
              </div>
              <p>startboosting@booster.com</p>
            </a>
          </div>
          <div className="Footer-Content">
            <a className="Content-Link" href="tel:6047887787">
              <div className="Content-Icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <p>+1 (604) 788 7787</p>
            </a>
          </div>
          <div className="Footer-Content">
            <a className="Content-Link" href="/games">
              {" "}
              <div className="Content-Icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <p>Supported Games</p>
            </a>
          </div>
          <div className="Footer-Content">
            <div className="Content-SNS">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-snapchat-square"></i>
              <i className="fab fa-bootstrap"></i>
            </div>
            <p>
              © 2020 Booster. All Right Reserved. Designed & Developed by Danny
              Rhee 🤟
            </p>
          </div>
          <div className="Footer-Content Last-Content">
            Booster is not a real website that actually provides ping boosting
            service to clients. I built this website as one of the projects to
            put in my portfolio. All game trademarks, service marks, company
            names, plans and logos appearing on this website are the property of
            other respective owners. Booster is not a real service providing
            website and not endorsed by or affiliated with the games mentioned.
          </div>
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="form" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
