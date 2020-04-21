import React from "react";
import { Directions1 } from "./Directions1";
import { Directions2 } from "./Directions2";
import { Footer } from "../Footer/Footer";

import "../../styles/Directions/Directions.css";

export const Directions = () => {
  return (
    <div className="Directions-Container">
      <Directions1 />
      <Directions2 />
      <Footer />
    </div>
  );
};
