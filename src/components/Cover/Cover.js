import React  from "react";
import "./Cover.css";
import Star from "./Star/Star";

function Cover(props) {
  const starsParams = {
    amount: 50,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    }
  };

  /* const ellipseParams = {
    amount: 30,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    }
  }; */
  const randomBetween = (a, b) => {
    return a + Math.floor(Math.random() * (b - a));
  };

  function starStyles(params) {
    let styles = [];
    for (let i = 0; i < params.amount; i++) {
      /* let size =
        Math.round(Math.random() * 100) === 0
          ? params.size.giant
          : randomBetween(params.size.min, params.size.max); */


      styles.push({
        /* width: `${Math.floor(size+10)}px`,
        height: `${Math.floor(size+10)}px`, */
        left: `${randomBetween(0, 100)}%`,
        top: `${randomBetween(0, 100)}%`,
      });
    }
    return styles;
  }


  return (
    <>
      <div className="background">
        {props.children}
        <div className="ellipse1"></div>
        <div className="ellipse1 ellipse2"></div>
        <div className="ellipse1 ellipse3"></div>
        {props.vector?(<div className="vector"></div>):(<div></div>)}
        {starStyles(starsParams).map((star,i) => {
          return (
            <Star style={star} key={i}/>
          );
        })}
      </div>
    </>
  );
}

export default Cover;
