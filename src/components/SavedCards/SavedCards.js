import React, { useEffect, useState } from 'react';
import Header from '../Page/Header/Header';
import Auction from '../Page/Auction/Auction';
import Footer from '../Page/Footer/Footer';
import './SavedCards.css';


function SavedCards() {
  const [isSavedCards, setSavedCards] = useState([]);

  const headerTextButtons={
    'first':'Home',
    'firstLink':'/',
    'second':'Сlear Favorites',
    'secondFunction':()=>{
      localStorage.removeItem("savedCards");
      setSavedCards([])
    },
    'third':'',
  }

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("savedCards"));
    if (savedCards) {
      setSavedCards(savedCards)
    } else {
      setSavedCards([])
    }
  }, []);

  return (
    <div className='SavedCards'>
      <Header headerTextButtons={headerTextButtons}/>
      <Auction isCardAuction={false} allCards={isSavedCards} title={'Favourites goods'} subtitle={'The largest and unique online store    The best prices on the Internet'} />
      <Footer />
    </div>
  )
}

export default SavedCards;