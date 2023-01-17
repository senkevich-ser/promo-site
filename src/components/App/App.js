import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';
import SavedCards from '../SavedCards/SavedCards';
import ItemInfo from '../ItemInfo/ItemInfo';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        setAllCards(res.products);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (

    <div className='app'>
      <Routes>
        <Route exact path="/" element={<Cover vector={false} children={<Page allCards={allCards} />} />} />
        <Route path="/saved" element={<SavedCards />} />
        <Route path="/goods/:id" element={<ItemInfo dataCards={allCards} isRoundCheckBox={true}/>} />
        <Route path="/item" element={<Cover vector={true} />} />
        <Route path="*" element={<Cover vector={false} children={<NotFound />} />} />
      </Routes>
    </div>
  )
}

export default App;
