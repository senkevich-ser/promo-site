import React from 'react';
import { Button } from 'antd';
import { circleButtonStyles,mainRoundButtonStyles } from '../../styles';
import './Main.css';


function Main() {

  return (
    <section className='main'>
    <div className='main__info'>
      <div className='main__titles'>
        <h1 className='main__titles-bold'>Super NFT</h1>
        <h2 className='main__titles-normal'> Marketplace</h2>
      </div>
      <div className='main__discharge'></div>
      <h3 className='main__description'>The largest and unique Super rare marketplace
    <br/>For crypto-collectibles</h3>
    <div className='main__connectButtons'>

    </div>
    <div className='main__buttonsTitles'></div>
    <div className='main__connectButtons'>
    <Button type="primary" style={mainRoundButtonStyles} shape="round" >Connect Wallet</Button>
    <Button type="primary" style={circleButtonStyles}shape="circle" />
    </div>
    </div>
    <div className='main__cards'></div>
    <div className='card'></div>
    </section>
  )
}

export default Main;