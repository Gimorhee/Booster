import React, { Fragment } from "react";
import spinner from "./Bean-Eater.gif";

import "../../App.css";

const Spinner = () => {
  return (
    <Fragment>
      <div className="Loading-Container">
        <img
          className="Loading-Spinner"
          src={spinner}
          style={{
            width: "300px",
          }}
          alt="Loading..."
        />
      </div>
    </Fragment>
  );
};

export default Spinner;
