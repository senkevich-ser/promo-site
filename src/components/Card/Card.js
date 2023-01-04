import React from 'react';
import { Button,} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './Card.css'


function Card(props) {
  const handleClick = () => {
    props.onClick(props.dataCard.id);
  };
  return (
    <div className={`card ${props.style}`}>
      <div className='card__effect'></div>
      <div className='card__worksQty'>
        <div className='card__worksQtyWrapper'>
        <p className='card__qty'>{props.dataCard.stock}</p>
        <span>Digital Artwork</span>
        </div>
        { props.isDeleteButton && <Button
        onClick={handleClick}
        style={{alignSelf:'end'}}
        shape="circle" icon={<CloseOutlined />} />}
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