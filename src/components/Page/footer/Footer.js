/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Logo from "../../Logo/Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ColumnWrapper">
      <Logo />
        <p className="footer__copyrightText">Tempor mollit nisi sunt ad incididunt labore.
          Tempor mollit nisi sunt ad incididunt labore.Tempor mollit nisi sunt ad incididunt labore.</p>
          <ul className="socialLinks footer__subtitles">
            <li><a  href='www.facebook.com' target='_blank' className="socialLink  facebook"></a></li>
            <li><a  href='www.linkedin.com' target='_blank' className="socialLink  likedIn"></a></li>
            <li><a  href='www.twitter.com' target='_blank' className="socialLink  twitter"></a></li>
          </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles">SiteMap</h3>
      <ul className="footer__subtitles">
        <li>Home</li>
        <li>About</li>
        <li>NFT</li>
        <li>RoadMap</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles" >Company</h3>
      <ul className="footer__subtitles">
        <li>Help&Support</li>
        <li>Terms&Condition</li>
        <li>Privacy Policy</li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles">Resource</h3>
      <ul className="footer__subtitles">
        <li>Partner</li>
        <li>Blog</li>
        <li>Newsletter</li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
