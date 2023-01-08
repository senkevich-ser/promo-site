import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  headerRoundButtonStyles,
  circleButtonStyles,
  headerSearchButtonStyles,
} from "../styles";
import "./Nav.css";

function Nav(props) {
  const [buttonsData, setButtonsData] = useState({});
  useEffect(() => {
    setButtonsData(props.headerTextButtons);
  }, [])
  return (
    <nav className="nav">
      <div className="nav__mainBlock">
        <Link to={`${buttonsData.firstLink}`}>
          <Button type="text">{buttonsData.first}</Button>
        </Link>
        <Button onClick={buttonsData.secondFunction} type="text">
          {props.headerTextButtons.second}
        </Button>
        {Boolean(buttonsData.third) && (
          <Button type="text">{buttonsData.third}</Button>
        )}
      </div>
      <div className="nav__searchBlock">
        <Button
          type="primary"
          style={headerSearchButtonStyles}
          shape="circle"
        ></Button>
        <Link to="/saved">
          <Button type="primary" style={headerRoundButtonStyles} shape="round">
            Favorites Goods
          </Button>
        </Link>
        <Button
          type="primary"
          style={circleButtonStyles}
          shape="circle"
        ></Button>
      </div>
    </nav>
  );
}

export default Nav;
