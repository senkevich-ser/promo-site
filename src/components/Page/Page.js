
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Choose from './Choose/Chose';
import Auction from './Auction/Auction';
import Footer from './footer/Footer';
import Spinner from '../Spinner/Spinner';
import './Page.css';


function Page() {

  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
  setAllCards(res.products);
  setIsLoading(false);
});
  }, []);


  return isLoading ? (
    <Spinner />
  ) : (
    <div className='page'>
    <Header/>
    <Main cards={allCards.slice(0,2)}/>
    <Choose/>
    <Auction cards={allCards.slice(4,16)}/>
    <Footer/>
    </div>
  )
}

export default Page;