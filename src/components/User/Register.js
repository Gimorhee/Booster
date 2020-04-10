import React from "react";
import { RegisterLeft } from "./RegisterLeft";
import { RegisterRight } from "./RegisterRight";

import "../../styles/User/User.css";

export const Register = () => {
  return (
    <div className="Register-Container">
      <RegisterLeft />
      <RegisterRight />
    </div>
  );
};
