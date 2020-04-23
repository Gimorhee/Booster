import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const Features1 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 900 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 900 },
    });

    return (
      <div className="Features1">
        <animated.div style={topProps} className="Features1-Top">
          <h1>A Superior Gaming Experience</h1>
          <p>
            Booster reduces lag and improves network stability for gamers.
            Providing you the tools you need to play smart.
          </p>
        </animated.div>
        <animated.div style={bottomProps} className="Features1-Bottom">
          <div className="Features1-Features">
            <div className="Features1-Feature">
              <i className="fas fa-server"></i>
              <h2>Booster Network</h2>
              <p>
                <span>Dedicated fast lanes and real-time optimization.</span>{" "}
                Booster provides continuous connection updates that allows
                gamers to use the best possible paths. Plus, using private fiber
                optic links and multiple data paths provides better internet
                with no single point of failure.
              </p>
            </div>
            <div className="Features1-Feature">
              <i className="fas fa-bolt"></i>
              <h2>Booster Software</h2>
              <p>
                <span>Booster measures packer loss and ping spikes.</span> Are
                you playing with bad internet connection? Don't worry, Booster
                have you covered! Test your connection before you start playing
                and a post-game analysis of your connection indicates how
                Booster is helping your gaming environments.
              </p>
            </div>
            <div className="Features1-Feature">
              <i className="fas fa-robot"></i>
              <h2>Machine Learning</h2>
              <p>
                <span>Reduced latency, lower ping and lost packets.</span> Our
                intelligent network provides gamers with a superior gaming
                experience. Booster gives you real-time analytics allowing you
                to see what's happening with your data as it travels from your
                computer to a game servers.
              </p>
            </div>
            <div className="Features1-Feature">
              <i className="fas fa-wifi"></i>
              <h2>Boost your ping</h2>
              <p>
                <span>Say hello to a better and faster game connection. </span>{" "}
                Lag won't affect you from using computers but it's a killer for
                live apps like gaming. Booster helps gamers by managing
                internet's fast paths, analyzing the best paths, providing
                mutiple paths, and automating it all so it just works!
              </p>
            </div>
            <div className="Features1-Feature">
              <i className="fas fa-rocket"></i>
              <h2>Booster Technology</h2>
              <p>
                <span>
                  Start accelerating your gaming traffic with Booster.
                </span>{" "}
                Booster is fundamentally different than any other type of
                network solution. Booster provides and optimizes best gaming
                connection and never changes or masks clients IP address or
                network settings in any way.
              </p>
            </div>
            <div className="Features1-Feature">
              <i className="fas fa-users"></i>
              <h2>Play with friends</h2>
              <p>
                <span>You can use Booster to run communicating apps.</span> Use
                it for your daily team voicing and discussing teamworks and
                tactics with your teammates. Start playing with your friends to
                maximize your gaming experience and improve your teamworks with
                your friends!
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
