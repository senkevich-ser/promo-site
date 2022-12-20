import React, { useEffect, useState }from 'react';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';


function App() {
  fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);
  return (
    <div className='app'>
        <Cover children={<Page />} />
    </div>
  )
}

export default App;
