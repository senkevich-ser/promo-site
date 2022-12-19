import React from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { circleButtonStyles,headerRoundButtonStyles } from '../styles';
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
    <Button type="primary" shape="circle" style={circleButtonStyles}/>
    <Button type="primary" style={headerRoundButtonStyles} shape="round" >Connect Wallet</Button>
    <Button type="primary" style={circleButtonStyles}shape="circle"></Button>
    </div>

    </nav>
  )
}

export default Nav;