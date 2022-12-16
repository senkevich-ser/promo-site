import React from 'react';
import { Button, Space } from 'antd';
import './Nav.css';


function Nav() {
  const ButtonContainer = styled.div`
  .ant-btn-text {
    background-color: red;
  }
`;
  return (
    <nav className='nav'>
      <Space  className='nav__mainBlock'>
    <Button type='text'>Discover</Button>
    <Button type='text'>Marketplace</Button>
    <Button type='text'>How it Work</Button>
    </Space >
    <div className='nav__searchBlock'>
    <Button></Button>
    <Button></Button>
    <Button></Button>
    </div>

    </nav>
  )
}

export default Nav;