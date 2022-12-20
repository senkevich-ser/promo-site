import React from 'react';
import { Button, Space } from 'antd';
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
    <Button type="primary" style={headerRoundButtonStyles} shape="round" >Connect Wallet</Button>
    <Button type="primary" style={circleButtonStyles} shape="circle" ></Button>
    </div>
    </nav>
  )
}

export default Nav;