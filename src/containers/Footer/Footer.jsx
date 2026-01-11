import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="copyright">© COPYRIGHT {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default Footer;
