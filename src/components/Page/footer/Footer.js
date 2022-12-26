/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link} from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ColumnWrapper">
      <Logo />
        <p className="footer__text footer__copyrightText">Tempor mollit nisi sunt ad incididunt labore.
          Tempor mollit nisi sunt ad incididunt labore.Tempor mollit nisi sunt ad incididunt labore.</p>
          <ul className="socialLinks footer__subtitles">
            <li><a  href='www.facebook.com' target='_blank' className="socialLink  facebook"></a></li>
            <li><a  href='www.linkedin.com' target='_blank' className="socialLink  likedIn"></a></li>
            <li><a  href='www.twitter.com' target='_blank' className="socialLink  twitter"></a></li>
          </ul>
          <span className="footer__copyright">Copyrigh &#169; &thinsp; NFT core 2022 All right reserved</span>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles">SiteMap</h3>
      <ul className="footer__subtitles">
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Home</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>About</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>NFT</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>RoadMap</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Blog</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Contact</Link></li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles" >Company</h3>
      <ul className="footer__subtitles">
        <li className="footer__subtitles"><Link className='footer__navLink footer__txt' to='/'>Help&Support</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Terms&Condition</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Privacy Policy</Link></li>
      </ul>
      </div>
      <div className="footer__ColumnWrapper">
      <h3 className="footer__tiles">Resource</h3>
      <ul className="footer__subtitles">
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Partner</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Blog</Link></li>
        <li className="footer__subtitles"><Link className='footer__navLink footer__text' to='/'>Newsletter</Link></li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
