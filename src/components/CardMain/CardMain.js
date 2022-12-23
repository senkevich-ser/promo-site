import React from 'react';
import './CardMain.css'


function CardMain(props) {
  return (
    <>
    <div style={{backgroundImage:`url(${props.dataCard.images[0]})`

  }} className='card__image' ></div>
  <h3 className='card__NFTname'>{props.dataCard.title}</h3>
      <div className='card__owner'>
       <div className='card__ownerAvatar'></div>
       <div className='card__ownerName'>{props.dataCard.brand}</div>
      </div>
      </>
  )
}

export default CardMain;