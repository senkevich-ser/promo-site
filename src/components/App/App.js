import React from 'react';
import './App.css'
import Cover from '../Cover/Cover';
import Header from '../Header/Header';


function App() {

  return (
    <div className='app'>
      <Cover children={<Header/>}/>
      </div>

  )
}

export default App;
