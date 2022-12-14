import React from "react";
import "./Cover.css";
import Star from '../../images/Star7.svg'

function Cover() {
  const params = {
    amount: 10,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    }
  };
  const randomBetween = (a, b) => {
    return a + Math.floor(Math.random() * (b - a));
  };

  function starStyles() {
    let styles = [];
    for (let i = 0; i < params.amount; i++) {
      let size =
        Math.round(Math.random() * 100) === 0
          ? params.size.giant
          : randomBetween(params.size.min, params.size.max);


      styles.push({
        backgroundImage: 'url(../../images/Star7.svg)',
        backgroundRepeat: 'noRepeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        position:'absolute',
        display: 'inlineBlock',
        width: `${Math.floor(size+10)}px`,
        height: `${Math.floor(size+10)}px`,
        left: `${randomBetween(0, 100)}%`,
        top: `${randomBetween(0, 100)}%`,
      });
    }
    return styles;
  }


  return (
    <>
      <div className="background">
        <div className="ellipse1"></div>
        <div className="ellipse1 ellipse2"></div>
        <div className="ellipse1 ellipse3"></div>
        <div className="vector"></div>
        {starStyles().map((star,i) => {
          return (
            <img className="star"
            key={i}
              style={star}
              src={Star}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cover;
