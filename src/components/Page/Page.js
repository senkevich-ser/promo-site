
import React from 'react';
import Header from '../Header/Header';
import Main from './Main/Main';
import Choose from './Choose/Chose';
import Auction from './Auction/Auction';
import './Page.css';


function Page() {

  return (
    <div className='page'>
    <Header/>
    <Main/>
    <Choose/>
    <Auction/>
    </div>
  )
}

export default Page;