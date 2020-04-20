import React from "react";

import "../../styles/Footer/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Inner">
        <div className="Footer-Content">
          <div className="Content-Icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p>Canada - 8250 158st Surrey, BC V4N 0R5</p>
        </div>
        <div className="Footer-Content">
          <a href="mailto:dongyunrhee@gmail.com">
            <div className="Content-Icon">
              <i className="far fa-envelope"></i>
            </div>
            <p>dongyunrhee@gmail.com</p>
          </a>
        </div>
        <div className="Footer-Content">
          <a href="tel:6047887787">
            <div className="Content-Icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <p>+1 (604) 788 7787</p>
          </a>
        </div>
        <div className="Footer-Content">
          <a href="/games">
            {" "}
            <div className="Content-Icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <p>Supported Games</p>
          </a>
        </div>
        <div className="Footer-Content"></div>
      </div>
    </div>
  );
};
