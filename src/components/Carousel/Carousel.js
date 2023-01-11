import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

function DemoCarousel(props) {

  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    if (Boolean(props.data.images)) {
      const images = Object.keys(props.data.images).map((key) => props.data.images[key]);
      setImagesArr(images);
    }
  }, [props.data])
  return (
    <Carousel>
      {imagesArr.map((img, i) => (
        <div key={i}>
          <img src={img} alt='' />
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;