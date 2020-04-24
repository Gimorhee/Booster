import React, { useEffect } from "react";
import { Overview1 } from "./Overview1";
import { Overview2 } from "./Overview2";
import { Overview3 } from "./Overview3";
import { Overview4 } from "./Overview4";
import { Overview5 } from "./Overview5";
import { Overview6 } from "./Overview6";
import { Footer } from "../Footer/Footer";

import "../../styles/Overview/Overview.css";

export const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Overview-Container">
      <div className="ButtonContainer" onClick={() => goTop()}>
        <button className="MoveTopButton">
          <span className="MoveTop">
            <i className="far fa-caret-square-up"></i>
          </span>
        </button>
      </div>
      <Overview1 />
      <Overview2 />
      <Overview3 />
      <Overview4 />
      <Overview5 />
      <Overview6 />
      <Footer />
    </div>
  );
};
