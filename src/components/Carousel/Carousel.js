import React, { useEffect,useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import  card  from '../../dataCard';

function DemoCarousel (){


  const [imagesArr,setImagesArr]=useState([]);
  useEffect(()=>{
    const images = Object.keys(card.images).map((key) => card.images[key]);
    setImagesArr(images);
  },[])
    return (
      <Carousel width={'50%'}>
        {imagesArr.map((img, i) => (
          <div key={i}>
            <img src={img} />
          </div>
        ))}
      </Carousel>
    );
};

export default DemoCarousel;