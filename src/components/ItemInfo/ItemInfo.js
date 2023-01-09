import React from 'react';
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import './ItemInfo.css';


function ItemInfo() {
  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  return (
    <div className='itemInfo'>
      <Header headerTextButtons={headerTextButtons}/>
      <Footer />
    </div>
  )
}

export default ItemInfo;