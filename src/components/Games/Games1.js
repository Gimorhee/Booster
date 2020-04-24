import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

// COVER IMAGES
import apex from "../../images/cover/apex.jpg";
import ashen from "../../images/cover/ashen.jpg";
import battlefield1 from "../../images/cover/battlefield1.jpg";
import battlefield2 from "../../images/cover/battlefield2.jpg";
import bless from "../../images/cover/bless.jpg";
import borderlands3 from "../../images/cover/borderlands3.jpg";
import cd from "../../images/cover/cd.jpg";
import cod1 from "../../images/cover/cod-bo.jpg";
import cod2 from "../../images/cover/cod-mw.jpg";
import codevein from "../../images/cover/codevein.jpg";
import crowfall from "../../images/cover/crowfall.jpg";
import csgo from "../../images/cover/csgo.jpg";
import deathgarden from "../../images/cover/deathgarden.jpg";
import dota2 from "../../images/cover/dota2.jpg";
import fifa2019 from "../../images/cover/fifa2019.jpg";
import fifa2020 from "../../images/cover/fifa2020.jpg";
import fortnite from "../../images/cover/fortnite.jpg";
import h1z1 from "../../images/cover/h1z1.jpg";
import hots from "../../images/cover/hots.jpg";
import hunt from "../../images/cover/hunt.jpg";
import lol from "../../images/cover/lol.jpg";
import nba2019 from "../../images/cover/nba2019.jpg";
import nba2020 from "../../images/cover/nba2020.jpg";
import nfl2019 from "../../images/cover/nfl2019.jpg";
import overwatch from "../../images/cover/overwatch.jpg";
import pes2020 from "../../images/cover/pes2020.jpg";
import pladins from "../../images/cover/pladins.jpg";
import pubg from "../../images/cover/pubg.jpg";
import rb6 from "../../images/cover/rb6.jpg";
import rocket from "../../images/cover/rocket-league.jpg";
import smite from "../../images/cover/smite.jpg";
import starwars from "../../images/cover/star-wars.jpg";
import tf from "../../images/cover/tf.jpg";
import WoTblitz from "../../images/cover/WoT-blitz.jpg";
import WoTwarplanes from "../../images/cover/WoT-warplanes.jpg";
import WoT from "../../images/cover/WoT.jpg";
import wow from "../../images/cover/wow.jpg";
import wwz from "../../images/cover/wwz.jpg";

export const Games1 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 1000 },
    });

    return (
      <div className="Games1">
        <animated.div style={topProps} className="Games-Top">
          <h1>Our Supported Games</h1>
          <p>
            Play your favorites with faster ping & smoother connection for
            better gaming experience.
          </p>
          <Link className="Games-Button" to="/register">
            Start Your Free Trial
          </Link>
        </animated.div>
        <animated.div style={bottomProps} className="Games-Bottom">
          <div className="Header">
            <h1>AVAILABLE NOW</h1>
            <div>
              <span>NA | KR | EU | CN | LAN </span>
            </div>
          </div>
          <div className="Supported-Games">
            <div className="Supported-Game">
              <img src={apex} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ea.com/en-ca/games/apex-legends"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Apex Legends
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={ashen} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ashen-game.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Ashen
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={battlefield2} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ea.com/en-ca/games/battlefield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Battlefield 1
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={borderlands3} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://borderlands.com/en-US/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Borderlands 3
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={bless} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.mmorpg.com/bless-online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Bless Online
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={battlefield1} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ea.com/games/battlefield/battlefield-5/news?isLocalized=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Battlefield V
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={cd} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.cdgame.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Creatve Destruction
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={cod1} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.callofduty.com/blackops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Call of Duty: <br /> Black Ops
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={cod2} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.callofduty.com/modernwarfare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Call of Duty: <br /> Modern Warefare
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={codevein} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.bandainamcoent.com/games/code-vein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Code Vein
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={crowfall} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://crowfall.com/en-US/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Crowfall
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={csgo} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://blog.counter-strike.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Counter Strike
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={deathgarden} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.deathgardengame.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Deathgarden: Bloodharvest
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={dota2} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="http://blog.dota2.com/?l=english"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Dota 2
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={fifa2019} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.origin.com/can/en-us/store/fifa/fifa-19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Fifa 2019
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={fifa2020} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.origin.com/can/en-us/store/fifa/fifa-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Fifa 2020
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={h1z1} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.h1z1.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    H1Z1
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={fortnite} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.epicgames.com/fortnite/en-US/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Fortnite
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={hots} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://heroesofthestorm.com/en-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Heroes of the Storm
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={hunt} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.huntshowdown.com/news/hunt-showdown-is-officially-out-on-pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Hunt: Showdown
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={nba2019} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://2k.com/en-US/game/nba-2k19-standard-edition/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    NBA 2k19
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={nba2020} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://nba.2k.com/en-US/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    NBA 2k20
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={nfl2019} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ea.com/en-ca/games/madden-nfl/madden-nfl-19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Madden NFL 2019
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={lol} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://na.leagueoflegends.com/en-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    League of Legends
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={overwatch} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://playoverwatch.com/en-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Overwatch
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={pes2020} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.konami.com/wepes/2020/eu/en/ps4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    PES 2020
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={pladins} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.paladins.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Pladins
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={pubg} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.pubg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Battlegrounds
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={rb6} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ubisoft.com/en-ca/game/rainbow-six/siege"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Rainbow 6
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={rocket} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.rocketleague.com/game-info/rocketpass/rocket-pass-6/?gclid=Cj0KCQjws_r0BRCwARIsAMxfDRihqSUyg79SBfUCfmX5mTbUzfbqYKI0JpWH9yIQ3-8PhYtdxZ2d3wYaArEoEALw_wcB&gclsrc=aw.ds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Rocket League
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={smite} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.smitegame.com/play-for-free/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Smite
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={starwars} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2/buy?isLocalized=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Star Wars: Battlefront II
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={tf} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="http://www.teamfortress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    Team Fortress 2
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={WoTblitz} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://wotblitz.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    World of Tanks: Blitz
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={WoTwarplanes} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://worldofwarplanes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    World of Tanks: Warplanes
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={WoT} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://worldoftanks.com/join/2470_EN1?pub_id=wot_ong_com_%D1%81a_g_s-b_acq_kw_en__en_world_of_tanks_exact&xid_source=google&xid_medium=cpc&xid_network=g&xid_campaign_id=6547910399&xid_adgroup_id=84243067371&xid_ad_id=422663031491&xid_target_id=kwd-19594335510&xid_keyword=world+of+tanks&xid_placement=&xid_device_type=c&xid_position=&xid_region=9001504&xid_position_type=-&xid_target=&xid_feeditemid=&xid_matchtype=e&xid_clickid=Cj0KCQjws_r0BRCwARIsAMxfDRhHPiG-7Kyc0lJ5_0gg7zyCmOZZH3XPhSpE6s6RL6VCnxDYNIR5Q7waAj7CEALw_wcB&url=https%3A%2F%2Fworldoftanks.com%2F&gclid=Cj0KCQjws_r0BRCwARIsAMxfDRhHPiG-7Kyc0lJ5_0gg7zyCmOZZH3XPhSpE6s6RL6VCnxDYNIR5Q7waAj7CEALw_wcB&sid=SIDsY3FYqyNx1cqGIhr8dLBgDbbBXxOnygP553Spyl8I3OuITkbGWp9-MCctIkWA0_AUx9WRCmitp0bfEq7ALUd28GNfuLUhJoRJstos-xn01lokrPaFtB4d-ykS2lRECOWqsQTqizRT2vIsD9dx1vHcj4F&enctid=c27i148n8ra6&lpsn=WoT+Video1+RegDark+nstandart+SOI&utm_source=sem_brand&utm_medium=paid-search&utm_campaign=bn-google-ca-wot-brand&utm_content=wot_ong_com_%D1%81a_g_s-b_acq_kw_en__en_world_of_tanks_exact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    World of Tanks
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={wow} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://worldofwarships.com/join/6945_EN1?pub_id=wows_ong_com_ca_g_s-b_acq_kw_en__en_world_of_warships&xid_source=google&xid_medium=cpc&xid_network=g&xid_campaign_id=8695312721&xid_adgroup_id=91174609607&xid_ad_id=406262445088&xid_target_id=kwd-45231840955&xid_keyword=world+of+warships&xid_placement=&xid_device_type=c&xid_position=&xid_region=9001504&xid_position_type=-&xid_target=&xid_feeditemid=&xid_matchtype=e&xid_clickid=Cj0KCQjws_r0BRCwARIsAMxfDRh2nt9e4c3dMXeZsXkB98zRBusrEiWHflintoHDQ-hLcLte3Ra_sw0aAoWyEALw_wcB&url=https%3A%2F%2Fworldofwarships.com%2F&gclid=Cj0KCQjws_r0BRCwARIsAMxfDRh2nt9e4c3dMXeZsXkB98zRBusrEiWHflintoHDQ-hLcLte3Ra_sw0aAoWyEALw_wcB&sid=SIDocvyhXTvYpt0eglS8vniBj3m6oCT1nCCyyfxOH7JnHb_AaW7mlDEdS_xqkbCWI4fWA9PkcwhVTStD8I5RItCFlZWObaIAzbzGgwCqbY9tMG7auz8osi4IzGpfxrZdT87RvSEHspIZxKfijeaeADkIvE9SA&enctid=c27i1bvq96ca&lpsn=WOWS_Classes_1804_Video&utm_source=sem_brand&utm_medium=paid-search&utm_campaign=bn-google-ca-wows-brand&utm_content=wows_ong_com_ca_g_s-b_acq_kw_en__en_world_of_warships"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    World of Warships
                  </a>
                </span>
              </div>
            </div>
            <div className="Supported-Game">
              <img src={wwz} alt="" />
              <div className="Inner-Bg">
                <span>
                  <a
                    href="https://www.epicgames.com/store/en-US/product/world-war-z/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Game-Name"
                  >
                    World War Z
                  </a>
                </span>
              </div>
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
