import React, { useEffect } from "react";
/* import { useScreenDimensions, useWindowDimensions } from "../../hooks/useDimensions"; */
import "./Cover.css";
import Star from "./Star/Star";

function Cover(props) {
  /* const { width } = useWindowDimensions();
  const { height } = useScreenDimensions(); */
  const starsParams = {
    amount: 50,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    }
  };

   /* useEffect(() => {
     console.log(pageWidth);
     console.log(pageHeight)
   },[pageWidth,pageHeight]) */

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
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse5"></div>
        <div className="ellipse ellipse6"></div>
        <div className="ellipse ellipse7"></div>
        <div className="ellipse ellipse8"></div>
        <div className="ellipse ellipse9"></div>
        <div className="ellipse ellipse10"></div>
        {Boolean(props.vector) && (<div className="vector"></div>)}
        {starStyles(starsParams).map((star, i) => {
          return (
            <Star style={star} key={i} />
          );
        })}
      </div>
    </>
  );
}

export default Cover;
