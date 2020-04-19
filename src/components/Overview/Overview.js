import React from "react";
import { Overview1 } from "./Overview1";
import { Overview2 } from "./Overview2";
import { Overview3 } from "./Overview3";
import { Overview4 } from "./Overview4";
import { Overview5 } from "./Overview5";
import { Overview6 } from "./Overview6";

import "../../styles/Overview/Overview.css";

export const Overview = () => {
  return (
    <div className="Overview-Container">
      <Overview1 />
      <Overview2 />
      <Overview3 />
      <Overview4 />
      <Overview5 />
      <Overview6 />
    </div>
  );
};
