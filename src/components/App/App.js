import React from 'react';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';


function App() {

  return (
    <div className='app'>
      <Cover children={<Page/>}/>
      </div>

  )
}

export default App;
