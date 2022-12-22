
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from './Main/Main';
import Choose from './Choose/Chose';
import Auction from './Auction/Auction';
import './Page.css';


function Page() {

  const [allCards, setAllCards] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
  setAllCards(res.products)
});
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then((res)=>{
  setAllUsers(res.users)
});
  }, []);

  return (
    <div className='page'>
    <Header/>
    <Main cards={allCards.slice(0,2)}/>
    <Choose/>
    <Auction cards={allCards.slice(0,12)}/>
    </div>
  )
}

export default Page;