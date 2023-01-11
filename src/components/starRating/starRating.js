import React, {useState, createContext} from "react";
import PropTypes from "prop-types";

import StarRatingLabel from "./components/StarRatingLabel";
import StarsList from "./components/StarsList";

export const StarRatingContext = createContext();

export default function StarRating({
  defaultState,
  emptyColor,
  fillColor,
  height,
  labelText,
  maxValue,
  onChangeHover,
  onChangeValue,
  readOnly,
  width,
}) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);

  const setRatingFn = (value) => {
    if (readOnly) return;

    setRating(value);
    onChangeValue(value);
  }

  const setHoverFn = (value) => {
    if (readOnly) return;

    setHover(value);
    onChangeHover(value);
  }

  return (
    <>
      <StarRatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          height,
          hover,
          labelText,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
        }}
      >
        <>
          <StarRatingLabel />
          <StarsList />
        </>
      </StarRatingContext.Provider>
    </>
  );
}



StarRating.defaultProps = {
  defaultState: 0,
  emptyColor: "grey",
  fillColor: "#edaa10",
  height: 53,
  labelText: (value) => `Rating is: ${value}`,
  maxValue: 5,
  onChangeHover: () => {},
  onChangeValue: () => {},
  readOnly: false,
  width: 53,
};