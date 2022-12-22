import React from 'react';
import { Button } from 'antd';
import Card from '../../Card/Card';
import {
  mainRoundButtonStyles,
  createMainButtonStyles,
  chiceBlueButtonStyles,
  chiceTransparentButtonStyles
} from './styles';
import './Main.css';


function Main(props) {
  return (
    <section className='main'>
      <div className='main__info'>
        <div className='main__titles'>
          <h1 className='main__titles-bold'>Super NFT</h1>
          <h2 className='main__titles-normal'> Marketplace</h2>
        </div>
        <div className='main__discharge'></div>
        <h3 className='main__description'>The largest and unique Super rare marketplace
          <br />For crypto-collectibles</h3>
        <div className='main__connectButtons'>
          <Button type="primary" style={mainRoundButtonStyles} shape="round" >Connect Wallet</Button>
          <Button type="text" style={createMainButtonStyles} shape="round" />
        </div>
        <div className='main__choiceButtonsTitles'>Last 7 days popular search</div>
        <div className='main__choiceButtons'>
          <Button type="primary" style={chiceBlueButtonStyles} shape="round" >All</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Music</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >3D Abstract</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Game</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Sprots</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Cartoon</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Virtual World</Button>
          <Button type="primary" style={chiceTransparentButtonStyles} shape="round" >Classic</Button>
        </div>
      </div>
      <div className='main__cards'>
        {props.cards.map((card, i) => {
          if (i === 0) {
            return (
              <Card dataCard={card} style='' key={i} />
            )
          } else {
            return (
              <Card dataCard={card} style='card_type_rotate' key={i} />
            )
          }
        })}
      </div>
    </section>
  )
}

export default Main;