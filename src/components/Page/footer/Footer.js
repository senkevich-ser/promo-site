import React from "react";
import Logo from "../../Logo/Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
      <Logo />
        <p className="footer__copyrightText">Tempor mollit nisi sunt ad incididunt labore.
          Tempor mollit nisi sunt ad incididunt labore.Tempor mollit nisi sunt ad incididunt labore.</p>
      </div>
      <h3 className="footer__tiles">SiteMap</h3>
      <ul className="footer__siteMap">
        <li>Home</li>
        <li>About</li>
        <li>NFT</li>
        <li>RoadMap</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <h3>Company</h3>
      <ul className="footer__companyInfo">
        <li>Help&Support</li>
        <li>Terms&Condition</li>
        <li>Privacy Policy</li>
      </ul>
      <h3>Resource</h3>
      <ul className="footer__resource">
        <li>Partner</li>
        <li>Blog</li>
        <li>Newsletter</li>
      </ul>
    </footer>
  );
}

export default Footer;
