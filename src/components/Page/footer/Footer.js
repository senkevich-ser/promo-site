/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { NavLink} from "react-router-dom";
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
        <li className="footer__subtitles"><NavLink to='/'>Home</NavLink></li>
        <li className="footer__subtitles">About</li>
        <li className="footer__subtitles">NFT</li>
        <li className="footer__subtitles">RoadMap</li>
        <li className="footer__subtitles">Blog</li>
        <li className="footer__subtitles">Contact</li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles" >Company</h3>
      <ul className="footer__subtitles">
        <li className="footer__subtitles">Help&Support</li>
        <li className="footer__subtitles">Terms&Condition</li>
        <li className="footer__subtitles">Privacy Policy</li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles">Resource</h3>
      <ul className="footer__subtitles">
        <li className="footer__subtitles">Partner</li>
        <li className="footer__subtitles">Blog</li>
        <li className="footer__subtitles">Newsletter</li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
