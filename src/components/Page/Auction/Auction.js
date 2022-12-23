import React from 'react';
import Card from '../../Card/Card';
import CardAuction from '../../CardAuction/CardAuction'
import './Auction.css'



function Auction(props) {


  return (
    <section className='auction'>
      <h2 className='auction__title'>Live Auction</h2>
      <h3 className='auction__subtitle'>The largest and unique Super rare NFT marketplace <br/>
      For crypto-collectibles</h3>
      <div className='auction__card-container'>
        {props.cards.map((card,i) => {
          return (
            <Card children={<CardAuction dataCard={card}/>} dataCard={card} style='card_type_auction' key={i}/>
          );
        })}
      </div>
    </section>
  )
}

export default Auction;