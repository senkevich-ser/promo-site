import React, { useEffect } from 'react';
import { Button } from "antd";
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import './ItemInfo.css';
import DemoCarousel from '../Carousel/Carousel';


function ItemInfo(props) {

  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  return (
    <div className='itemInfo'>
      <Header headerTextButtons={headerTextButtons}/>
      <div className='itemInfo__wapper'>
      <DemoCarousel />
      <div className='itemInfo__rightInfo'>
        <div className='itemInfo__wapper_favoriteCheck'>
        <span className='itemInfo__brand'>Apple</span>
        </div>
        <h1 className='itemInfo__title'>Telephone Apple X</h1>
        <div className='itemInfo__price'>&#36;&#32;{567}</div>
        <span className='itemInfo__discount'>{70}&#32;&#37;</span>
        <span className='itemInfo__rating'>{9.5}</span>
        <span className='itemInfo__stock'>{28}</span>
        <p className='itemInfo__description'>Labore aliquip excepteur est qui officia ut nostrud pariatur
        voluptate aute deserunt. Ea commodo Lorem dolor nulla qui.
        Est laborum eiusmod elit non velit reprehenderit dolor officia ex duis.</p>
      </div>
      {/* <div className="card__buttons">
        {props.isRoundCheckBox && <RoundCheckBox
          isChecked={isChecked}
          dataCard={props.dataCard}
          onChange={saveCard}
        />}
        <Button style={{ width: "50%" }} type="primary">
          Добавить в корзину
        </Button>
      </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default ItemInfo;