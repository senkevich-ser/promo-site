import React, { useEffect,useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import  card  from '../../dataCard';

function DemoCarousel (props){


  const [imagesArr,setImagesArr]=useState([]);
  useEffect(()=>{
    const images = Object.keys(props.dataCard.images).map((key) => props.dataCard.images[key]);
    setImagesArr(images);
  },[])
    return (
      <Carousel>
        {imagesArr.map((img, i) => (
          <div key={i}>
            <img src={img} alt=''/>
          </div>
        ))}
      </Carousel>
    );
};

export default DemoCarousel;