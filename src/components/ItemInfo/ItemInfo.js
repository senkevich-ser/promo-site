import React, { useEffect } from 'react';
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import './ItemInfo.css';
import DemoCarousel from '../Carousel/Carousel';


function ItemInfo() {

  /* const [imagesArr,setImagesArr]=useState([]);
  useEffect(()=>{
    const images = Object.keys(obj).map((key) => [Number(key), obj[key]]);
    setImagesArr();
  }) */
  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  return (
    <div className='itemInfo'>
      <Header headerTextButtons={headerTextButtons}/>
      <DemoCarousel/>
      <Footer />
    </div>
  )
}

export default ItemInfo;