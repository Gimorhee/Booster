import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: "70px",
          margin: "auto",
          paddingTop: "17rem",
          display: "block",
          backgoundColor: "#f0f2f5",
        }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
