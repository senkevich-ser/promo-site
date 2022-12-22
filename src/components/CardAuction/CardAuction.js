/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import abs from '../../images/abs.jpg'
import Jac from '../../images/Jac.jpg'
import './CardAuction.css'


function CardAuction() {
  return (
    <div className='card'>
      <div className= 'card__effect'></div>
      <div className='card__worksQty'>
        <p className='card__qty'>210</p>
        <span>Digital Artwork</span>
      </div>
      <div className='card__priceWindow'>
        <div className='card__ethereumIcon'></div>
        <p className='card__price'>3,5</p>
        <span className='card__ethereumTitle'>ETH</span>
      </div>
        <img src={abs} className='card__image'/>
        <h3 className='card__NFTname'>Golden Hour</h3>
        <div className='card__owner'>
          <img src={Jac} className='card__ownerAvatar'/>
          <h3 className='card__ownerName'>John Doe</h3>
        </div>
    </div>
  )
}

export default CardAuction;