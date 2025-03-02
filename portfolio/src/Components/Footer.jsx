import React from "react";

function Footer() {
  return (
    <div className="footer-sect">
      <div className="foot-left">
        <h1>Developer</h1>
      </div>
      <div className="foot-right">
        <p>
          &copy; {new Date().getFullYear()} James Ngandu. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
