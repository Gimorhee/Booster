import React, { useEffect } from "react";
import { Features1 } from "./Features1";
import { Features2 } from "./Features2";
import { Footer } from "../Footer/Footer";

import "../../styles/Features/Features.css";

export const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Features-Container">
      <Features1 />
      <Features2 />
      <Footer />
    </div>
  );
};
