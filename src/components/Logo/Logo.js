import React from "react";
import NFTlogo from "../../images/NFTlogo.svg";
import "./Logo.css";

function Logo() {
  return (
    <>
      <img src={NFTlogo} className="logo" alt="NFT logo" />
    </>
  );
}

export default Logo;
