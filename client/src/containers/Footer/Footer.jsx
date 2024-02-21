import React from "react";
import "./Footer.scss";
import SectionWrap from "../../wrappers/SectionWrap";

const Footer = () => {
  return (
    <div id="footer">
      <div className="copyright">© COPYRIGHT 2024 ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default SectionWrap(Footer, "footer");
