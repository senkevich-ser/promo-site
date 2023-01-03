import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../../Nav/Nav';
import './Header.css';


function Header(props) {

  return (
      <header className='header'>
    <Logo/>
    <Nav headerTextButtons={props.headerTextButtons}/>
    </header>
  )
}

export default Header;