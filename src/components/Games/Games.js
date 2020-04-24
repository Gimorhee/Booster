import React, { useEffect } from "react";
import { Games1 } from "./Games1";
import { Footer } from "../Footer/Footer";

import "../../styles/Games/Games.css";

export const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Games-Container">
      <div className="ButtonContainer" onClick={() => goTop()}>
        <button className="MoveTopButton">
          <span className="MoveTop">
            <i className="far fa-caret-square-up"></i>
          </span>
        </button>
      </div>
      <Games1 />
      <Footer />
    </div>
  );
};
