import React from 'react';
import { Button, Space } from 'antd';
import { headerRoundButtonStyles } from '../styles';
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
    <button className='nav__searchButton'/>
    <Button type="primary" style={headerRoundButtonStyles} shape="round" >Connect Wallet</Button>
    <button className='nav__roundButton'/>
    </div>
    </nav>
  )
}

export default Nav;