import React, { useEffect, useState }from 'react';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';


function App() {
  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{console.log(res.products[3])});

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
  return (
    <div className='app'>
        <Cover children={<Page />} />
    </div>
  )
}

export default App;
