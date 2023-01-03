import React from 'react';
import { Button,} from 'antd';
import './Card.css'


function Card(props) {

  return (
    <div className={`card ${props.style}`}>
      <div className='card__effect'></div>
      <div className='card__worksQty'>
        <p className='card__qty'>{props.dataCard.stock}</p>
        <span>Digital Artwork</span>
        {}
      </div>
      <div className='card__priceWindow'>
        <div className='card__ethereumIcon'></div>
        <p className='card__price'>{props.dataCard.discountPercentage}</p>
        <span className='card__ethereumTitle'>ETH</span>
      </div>
      {props.children}
    </div>
  )
}

export default Card;