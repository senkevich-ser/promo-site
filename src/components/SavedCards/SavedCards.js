import React, { useEffect, useState } from 'react';
import Header from '../Page/Header/Header';
import Auction from '../Page/Auction/Auction';
import Footer from '../Page/Footer/Footer';
import './SavedCards.css';


function SavedCards() {
  const [isSavedCards, setSavedCards] = useState([]);

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
      <Header />
      <Auction allCards={isSavedCards} title={'Favourites goods'} subtitle={'The largest and unique online store    The best prices on the Internet'} />
      <Footer />
    </div>
  )
}

export default SavedCards;