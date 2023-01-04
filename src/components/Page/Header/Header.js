import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Logo/Logo';
import Nav from '../../Nav/Nav';
import './Header.css';


function Header(props) {

  return (
      <header className='header'>
    <Link to='/'><Logo/></Link>
    <Nav headerTextButtons={props.headerTextButtons}/>
    </header>
  )
}

export default Header;