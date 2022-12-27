import React, { useEffect, useState }from 'react';
import Spinner from '../Spinner/Spinner';
import './App.css'
import Cover from '../Cover/Cover';
import Page from '../Page/Page';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
  setAllCards(res.products);
  setIsLoading(false);
});
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='app'>
        <Cover children={<Page allCards={allCards} />} />
    </div>
  )
}

export default App;
