import React from 'react';
import Card from '../../Card/Card';
import CardAuction from '../../CardAuction/CardAuction';
import { headerRoundButtonStyles } from '../Main/styles';
import { Button, Space } from 'antd';
import './Auction.css'



function Auction(props) {
  return (
    <section className='auction'>
      <h2 className='auction__title'>{props.title}</h2>
      <h3 className='auction__subtitle'>{props.subtitle}</h3>
      <div className='auction__card-container'>
        {props.allCards.map((card) => {
          return (
            <Card onClick={props.onClick}
              isDeleteButton={props.isDeleteButton}
              children={<CardAuction isRoundCheckBox={props.isRoundCheckBox}
                dataCard={card} />}
              dataCard={card}
              styles='card_type_auction'
              key={card.id} />
          );
        })}
      </div>
      <Space wrap>
        <Button type="primary" style={headerRoundButtonStyles} shape="round" >Explore more</Button>
      </Space>
    </section>
  )
}

export default Auction;