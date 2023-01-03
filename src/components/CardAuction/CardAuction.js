import React, { useState, useEffect } from "react";
import { Button } from "antd";
import RoundCheckBox from "../RoundCheckBox/RoundCheckBox";
import "./CardAuction.css";

function CardAuction(props) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("savedCards"))) {
      setIsChecked(checkSavedCards);
    }
  }, []);

  function checkSavedCards(){
return JSON.parse(localStorage.getItem("savedCards")).some(
  (card) => card.id === props.dataCard.id
);
  }

  function change(card) {
    if (!JSON.parse(localStorage.getItem("savedCards"))) {
      localStorage.setItem("savedCards", JSON.stringify([card]));
      setIsChecked(true);
    }
    else if(checkSavedCards()) {
      const newArr = JSON.parse(localStorage.getItem("savedCards")).filter(x => {
        return x.id !== card.id;
      })
      localStorage.setItem("savedCards", JSON.stringify(newArr));
      setIsChecked(false);
    } else{
      addCard(card);
    }
  }

  function addCard(card) {
    let savedArr = JSON.parse(localStorage.getItem("savedCards"));
    savedArr.push(card);
    localStorage.setItem("savedCards", JSON.stringify(savedArr));
    setIsChecked(true);
  }

  return (
    <>
      <div className="cardAuction__images">
        <div
          className="cardAuction__image cardAuction__singleImage"
          style={{ backgroundImage: `url(${props.dataCard.images[0]})` }}
        ></div>
        <div className="cardAuction__images cardAuction__columnImages">
          <div
            className="cardAuction__image cardAuction__columnImage"
            style={{ backgroundImage: `url(${props.dataCard.images[1]})` }}
          ></div>
          <div
            className="cardAuction__image cardAuction__columnImage"
            style={{ backgroundImage: `url(${props.dataCard.images[2]})` }}
          ></div>
        </div>
      </div>
      <h3 className="card__brandName">{props.dataCard.title}</h3>
      <div className="card__buttons">
        {props.isCardAuction &&<RoundCheckBox
          isChecked={isChecked}
          dataCard={props.dataCard}
          onChange={change}
        />}
        <Button style={{ width: "50%" }} type="primary">
          Добавить в корзину
        </Button>
      </div>
    </>
  );
}

export default CardAuction;
