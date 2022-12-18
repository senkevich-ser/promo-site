import React from 'react';
import { Button, Space } from 'antd';
import { circleButtonStyles,roundButtonStyles } from '../styles';
import './Nav.css';


function Nav() {
  return (
    <nav className='nav'>
      <Space  className='nav__mainBlock'>
    <Button /* style={styles} */type='text'>Discover</Button>
    <Button type='text'>Marketplace</Button>
    <Button type='text'>How it Work</Button>
    </Space >
    <div className='nav__searchBlock'>
    <Button></Button>
    <Button type="primary" style={roundButtonStyles} shape="round" >Connect Wallet</Button>
    <Button type="primary" style={circleButtonStyles}shape="circle" />
    </div>

    </nav>
  )
}

export default Nav;