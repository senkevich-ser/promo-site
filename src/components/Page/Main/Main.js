/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import Card from '../../Card/Card';
import CardMain from '../../CardMain/CardMain';
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
          <Link to='/saved'><Button type="primary" style={mainRoundButtonStyles} shape="round" >Favorites Goods</Button></Link>
          <Button type="text" style={createMainButtonStyles} shape="round" />
        </div>
        <div className='main__choiceButtonsTitles'>Last 7 days popular search</div>
        <div className='main__choiceButtons'>
          <Button type="primary" onClick={props.filterCards} style={chiceBlueButtonStyles} shape="round" >All</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Laptops</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Fragrances</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Skincare</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Smartphones</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Groceries</Button>
          <Button type="primary" onClick={props.filterCards} style={chiceTransparentButtonStyles} shape="round" >Home Decoration</Button>
        </div>
      </div>
      <div className='main__cards'>
        {props.allCards.slice(0, 2).map((card, i) => {
          if (i === 0) {
            return (
              <Card children={<CardMain dataCard={card} />} dataCard={card} styles='' key={i} />
            )
          } else {
            return (
              <Card children={<CardMain dataCard={card} />} dataCard={card} styles='card_type_rotate' key={i} />
            )
          }
        })}
      </div>
    </section>
  )
}

export default Main;