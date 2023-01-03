
import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Choose from './Choose/Chose';
import Auction from './Auction/Auction';
import Footer from './Footer/Footer';
import './Page.css';


function Page(props) {
  const headerTextButtons={
    'first':'Discover',
    'second':'Marketplace',
    'third':'How it Work',
  }

  return (
    <div className='page'>
    <Header headerTextButtons={headerTextButtons}/>
    <Main allCards={props.allCards}/>
    <Choose/>
    <Auction allCards={props.allCards.slice(4,16)} title={'Live Auction'} subtitle={'The largest and unique Super rare NFT marketplace    For crypto-collectibles'}/>
    <Footer/>
    </div>
  )
}

export default Page;