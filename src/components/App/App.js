import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';
import SavedCards from '../SavedCards/SavedCards';


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
      <Switch>
        <Route exact path="/">
          <Cover children={<Page allCards={allCards} />} />
        </Route>
        <Route path="/saved">
          <SavedCards />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
