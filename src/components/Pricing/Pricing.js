import React, { useEffect } from "react";
import { Pricing1 } from "./Pricing1";

import "../../styles/Pricing/Pricing.css";

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Pricing-Container">
      <Pricing1 />
    </div>
  );
};
