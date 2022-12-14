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
    return a + Math.floor(Math.random() * (b - a));
  };

  function starStyles(){
    for (let i = 0; i < params.amount; i++) {
      let size =
        Math.round(Math.random() * 10) === 0
          ? params.size.giant
          : randomBetween(params.size.min, params.size.max);

      let style= {
        width: `${Math.floor(size)}px`,
        height: `${Math.floor(size)}px`,
        left: `${randomBetween(0, 100)}%`,
        top: `${randomBetween(0, 100)}%`,
        boxShadow: `${"0 0 "}${size}px ${size / 2}px ${'#043668'}`,
        animationDuration: randomBetween(params.duration.min, params.duration.max) + "s",
      };
      console.log(style)
      return style;
    }
  }
  starStyles()


  return (
    <>
      <div className="background">
        {/* <div className="ellipse1"></div>
        <div className="ellipse1 ellipse2"></div>
        <div className="ellipse1 ellipse3"></div>
        <div className="vector"></div> */}
        {}
      </div>
    </>
  );
}

export default Cover;
