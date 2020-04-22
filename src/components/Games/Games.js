import React, { useEffect } from "react";
import { Games1 } from "./Games1";
import { Footer } from "../Footer/Footer";

import "../../styles/Games/Games.css";

export const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Games-Container">
      <Games1 />
      <Footer />
    </div>
  );
};
