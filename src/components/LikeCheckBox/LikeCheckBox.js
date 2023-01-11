import React, { useState, useEffect } from "react";
import { filterCards } from '../../utils/Filters';
import './LikeCheckBox.css';

function LikeCheckBox(props) {

  const handleChange = () => {
    saveCard(props.dataCard);
  };

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("savedCards"))) {
      setIsChecked(checkSavedCards);
    }
  }, []);

  function checkSavedCards() {
    return JSON.parse(localStorage.getItem("savedCards")).some(
      (card) => card.id === props.dataCard.id
    );
  }

  function saveCard(card) {
    if (!JSON.parse(localStorage.getItem("savedCards"))) {
      localStorage.setItem("savedCards", JSON.stringify([card]));
      setIsChecked(true);
    }
    else if (checkSavedCards()) {
      const newArr = filterCards(JSON.parse(localStorage.getItem("savedCards")), 'id', card.id)
      localStorage.setItem("savedCards", JSON.stringify(newArr));
      setIsChecked(false);
    } else {
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
    <label className="round-btn">
      <input
        className="round-btn__input"
        type="checkbox"
        checked={isChecked || false}
        onChange={handleChange}
      />

      <span className="round-btn__checkmark" />
    </label>
  );
}

export default LikeCheckBox;
