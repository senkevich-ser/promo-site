import React from "react";
import "./Cover.css";

function Cover() {
  const params = {
    amount: 200,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    },
    duration: {
      min: 5,
      max: 25,
    },
  };
  const randomBetween = (a, b) => {
    return a + Math.random() * (b - a);
  };

  function starStyles(){
    for (let i = 0; i < params.amount; i++) {
      let size =
        Math.round(Math.random() * 10) === 0
          ? params.size.giant
          : randomBetween(params.size.min, params.size.max);
      let style;

      return style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${randomBetween(0, 100)}%`,
        top: `${randomBetween(0, 100)}%`,
        boxShadow: `${"0 0 "}${size}px ${size / 2}px ${'#043668'}`,
        animationDuration: randomBetween(params.duration.min, params.duration.max) + "s",
      };
    }
  }


  return (
    <>
      <div className="background">
        {/* <div className="ellipse1"></div>
        <div className="ellipse1 ellipse2"></div>
        <div className="ellipse1 ellipse3"></div>
        <div className="vector"></div> */}
        <div className={starStyles}></div>
        <div class="stars_2"></div>
        <div class="stars_3"></div>
      </div>
    </>
  );
}

export default Cover;
