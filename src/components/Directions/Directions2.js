import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Directions2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 800,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1500,
      config: { duration: 1000 },
    });

    return (
      <div className="Directions2">
        <animated.div style={topProps} className="Directions2-Top">
          <h1>Gamers</h1>
          <h1>+ Our Booster</h1>
          <h1>
            <strong>= Best Gaming Environment</strong>
          </h1>
          <h3>How To Build A Better & Boosted Internet</h3>
          <span>
            Gaming is obviously entertaining, but is it still fun with lagging
            in the middle of gamplay? No! Losing games because of the lag is a
            nightmare to all gamers. To defeat lag and reclaim the Internet for
            our gamers, this is how Booster do it:{" "}
          </span>
        </animated.div>
        <animated.div style={bottomProps} className="Directions2-Bottom">
          <div className="Directions2-Steps">
            <div className="Directions2-Step">
              <div className="Step-Left">
                <i className="fas fa-dice-one"></i>
              </div>
              <div className="Step-Right">
                <h3>
                  Start from scratch. Booster uses outdated VPN technology.
                </h3>
                <span>
                  Our first step is just way too simple! Just completely ignore
                  how existing lag-reducing product worked. None of them worked
                  that well anyways. This is how Boosted Booster is!
                </span>
              </div>
            </div>
            <div className="Directions2-Step">
              <div className="Step-Left">
                <i className="fas fa-dice-two"></i>
              </div>
              <div className="Step-Right">
                <h3>Build a custom network connection.</h3>
                <span>
                  Second stop is a bit tricky. Booster is fundamentally
                  different than any other type of network solution, we gotta
                  build a custom network infrastructure manually with private
                  fiber optic networks and servers.
                </span>
              </div>
            </div>
            <div className="Directions2-Step">
              {" "}
              <div className="Step-Left">
                <i className="fas fa-dice-three"></i>
              </div>
              <div className="Step-Right">
                <h3>
                  Build completely brandnew network system to run on top of the
                  custom built infrastructure.
                </h3>
                <span>
                  Proprietary route optimization algorithems with custom
                  protocols, Full-blown multi-pathing and real-time monitoring
                  with dynamic ruote allocation. Our team even laid the
                  foundation for an anti-DDoS feature, coming in the future.
                </span>
              </div>
            </div>
            <div className="Directions2-Step">
              {" "}
              <div className="Step-Left">
                <i className="fas fa-dice-four"></i>
              </div>
              <div className="Step-Right">
                <h3>
                  With simple one-step installation, make Booster available to
                  every gamers.
                </h3>
                <span>
                  After you register, you can simply install Booster client and
                  your game machine will automatically join the Booster network
                  whenever you play. Booster learns more and more about other
                  possible routes and paths over time and provide the most
                  optimized gaming environment for our clients!
                </span>
              </div>
            </div>
            <p>
              Simply, we created Booster to improve gaming life. That is pretty
              much all we really cared about. So enough about us. Try out our
              Booster, get back to the game and enjoy!
            </p>
          </div>
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility tag="p" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
