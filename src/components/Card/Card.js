import React from 'react';
import { Button } from 'antd';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox'
import './Card.css'


function Card(props) {
function change(){

}
  return (
    <div className={`card ${props.style}`}>
      <div className='card__effect'></div>
      <div className='card__worksQty'>
        <p className='card__qty'>{props.dataCard.stock}</p>
        <span>Digital Artwork</span>
      </div>
      <div className='card__priceWindow'>
        <div className='card__ethereumIcon'></div>
        <p className='card__price'>{props.dataCard.discountPercentage}</p>
        <span className='card__ethereumTitle'>ETH</span>
      </div>
      <div style={{backgroundImage:`url(${props.dataCard.images[0]})`

      }} className='card__image' ></div>
      <h3 className='card__NFTname'>{props.dataCard.title}</h3>
      <div className='card__owner'>
        <RoundCheckBox isChecked={true} cardId={props.id} onChange={change}/>
        <Button style={{ width: '40%' }} type="primary">Primary Button</Button>
      </div>
    </div>
  )
}

export default Card;