
import React from 'react';
import NFTicon from '../../images/NFTicon.svg';
import './Header.css';


function Header() {

  return (
    <header className='header'>
    <img src={NFTicon}  className='header__icon' alt='NFT icon'/>
    </header>
  )
}

export default Header;