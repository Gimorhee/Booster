import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

// GAME NAME IMAGES
import apex from "../../images/games/apex.png";
import battlefield from "../../images/games/battlefield.png";
import cod from "../../images/games/cod.png";
import csgo from "../../images/games/csgo.png";
import dota from "../../images/games/dota.png";
import fifa from "../../images/games/fifa.png";
import fortnite from "../../images/games/fortnite.png";
import lol from "../../images/games/lol.png";
import overwatch from "../../images/games/overwatch.png";
import pubg from "../../images/games/pubg.png";

export const Overview2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const textProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 600,
      config: { duration: 900 },
    });

    const imageProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1200,
      config: { duration: 900 },
    });

    return (
      <div className="Overview2">
        <animated.div style={textProps}>
          <h1>Play Your Favorites.</h1>
          <p>
            We support lots of games, and we're adding more all the time - check
            out our{" "}
            <Link to="/games" className="Overview2-Link">
              supported games
            </Link>{" "}
            for more detail!
          </p>
        </animated.div>
        <animated.div style={imageProps} className="Overview2-Games">
          <div className="Overview2-Game">
            <img src={apex} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={battlefield} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={cod} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={csgo} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={dota} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={fifa} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={fortnite} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={lol} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={overwatch} alt="" />
          </div>
          <div className="Overview2-Game">
            <img src={pubg} alt="" />
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
