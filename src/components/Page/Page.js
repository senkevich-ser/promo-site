
import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Choose from './Choose/Chose';
import Auction from './Auction/Auction';
import Footer from './footer/Footer';
import './Page.css';


function Page(props) {

  return (
    <div className='page'>
    <Header/>
    <Main cards={props.allCards.slice(0,2)}/>
    <Choose/>
    <Auction cards={props.allCards.slice(4,16)}/>
    <Footer/>
    </div>
  )
}

export default Page;