import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { headerRoundButtonStyles,
  circleButtonStyles,
  headerSearchButtonStyles } from '../Page/Main/styles';
import './Nav.css';


function Nav() {
  return (
    <nav className='nav'>
      <div  className='nav__mainBlock'>
    <Button /* style={styles} */type='text'>Discover</Button>
    <Button type='text'>Marketplace</Button>
    <Button type='text'>How it Work</Button>
    </div >
    <div className='nav__searchBlock'>
    <Button type="primary" style={headerSearchButtonStyles} shape="circle" ></Button>
    <Link to="/saved">
    <Button type="primary" style={headerRoundButtonStyles} shape="round" >Favorites Goods</Button>
    </Link>
    <Button type="primary" style={circleButtonStyles} shape="circle" ></Button>
    </div>
    </nav>
  )
}

export default Nav;