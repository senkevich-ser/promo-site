import React from 'react';
import { Button } from 'antd';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox'
import './CardAuction.css'


function CardAuction(props) {
function change(){

}
  return (
    <>
      <div  className='cardAuction__images' >
        <div className='cardAuction__image cardAuction__singleImage' style={{backgroundImage:`url(${props.dataCard.images[0]})`

}}></div>
        <div className='cardAuction__images cardAuction__columnImages'>
        <div className='cardAuction__image cardAuction__columnImage' style={{backgroundImage:`url(${props.dataCard.images[1]})`

}}></div>
        <div className='cardAuction__image cardAuction__columnImage' style={{backgroundImage:`url(${props.dataCard.images[2]})`

}}></div>
        </div>
      </div>
      <h3 className='card__brandName'>{props.dataCard.title}</h3>
      <div className='card__buttons'>
        <RoundCheckBox isChecked={false} cardId={props.id} onChange={change}/>
        <Button style={{ width: '50%' }} type="primary">Добавить в корзину</Button>
      </div>
    </>
  )
}

export default CardAuction;
