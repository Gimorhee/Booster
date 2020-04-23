import React, { useEffect } from "react";
import { Download1 } from "./Download1";
import { Download2 } from "./Download2";
import { Footer } from "../Footer/Footer";

import "../../styles/Download/Download.css";

export const Download = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Download-Container">
      <Download1 />
      <Download2 />
      <Footer />
    </div>
  );
};
