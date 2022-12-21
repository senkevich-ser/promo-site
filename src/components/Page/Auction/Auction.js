import React from 'react';
import Card from '../../Card/Card';
import './Auction.css'



function Auction() {
  return (
    <section className='auction'>
      <h2 className='auction__title'>Live Auction</h2>
      <h3 className='auction__subtitle'>The largest and unique Super rare NFT marketplace <br/>
      For crypto-collectibles</h3>
      <div className='auction__card-container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default Auction;