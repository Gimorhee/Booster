import React from "react";
import image from "./laptop1.png";

import "../../styles/Overview/Overview.css";

export const Overview = () => {
  return (
    <div className="Overview-Container">
      Overview Component
      <img src={image} alt="" />
    </div>
  );
};
