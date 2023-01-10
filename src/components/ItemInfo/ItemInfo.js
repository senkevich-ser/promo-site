import React, { useEffect } from 'react';
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox'
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
      <DemoCarousel/>
      <div className='itemInfo__wapper itemInfo__rightInfo'>
        <div className='itemInfo__wapper'>
        <span className='itemInfo__brand'>Apple</span>
        <RoundCheckBox/>
        </div>
        <h1 itemInfo__title>Telephone Apple X</h1>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default ItemInfo;