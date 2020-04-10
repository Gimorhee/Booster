import React from "react";

import "../../styles/User/User.css";

export const RegisterForm = () => {
  return (
    <form className="Register-Form">
      <label>* FIRST NAME</label>
      <input type="text" />
      <label>* EMAIL</label>
      <input type="text" />
      <label>* PASSWORD</label>
      <input type="password" />
      <label>* CONFIRM PASSWORD</label>
      <input type="password" />
      <button>SIGN UP FOR FREE</button>
    </form>
  );
};
