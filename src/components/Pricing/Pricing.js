import React, { useEffect } from "react";
import { Pricing1 } from "./Pricing1";
import { Pricing2 } from "./Pricing2";
import { Footer } from "../Footer/Footer";

import "../../styles/Pricing/Pricing.css";

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Pricing-Container">
      <Pricing1 />
      <Pricing2 />
      <Footer />
    </div>
  );
};
