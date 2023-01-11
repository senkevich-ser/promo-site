import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "antd";
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import LikeCheckBox from '../LikeCheckBox/LikeCheckBox';
import './ItemInfo.css';
import DemoCarousel from '../Carousel/Carousel';


function ItemInfo(props) {

  const [dataCard, setDataCard]=useState([])
  let { id } = useParams();

  useEffect(()=>{
    if(props.dataCards.length){
      const card = props.dataCards.find(card => card.id === Number(id));
      setDataCard(card);
    }
  },[props.dataCards])


  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  return (
    <div className='itemInfo'>
      <Header headerTextButtons={headerTextButtons}/>
      <div className='itemInfo__wapper'>
      <DemoCarousel dataCard={dataCard}/>
      <div className='itemInfo__rightInfo'>
        <div className='itemInfo__wapper_favoriteCheck'>
        <span className='itemInfo__brand'>{dataCard.brand}</span>
        </div>
        <h1 className='itemInfo__title'>{dataCard.title}</h1>
        <div className='itemInfo__price'>&#36;&#32;{dataCard.price}</div>
        <span className='itemInfo__discount'>{dataCard.discountPercentage}&#32;&#37;</span>
        <span className='itemInfo__rating'>{dataCard.rating
}</span>
        <span className='itemInfo__stock'>{dataCard.stock}</span>
        <p className='itemInfo__description'>{dataCard.description}</p>
      </div>
      <div className="card__buttons">
        {props.isRoundCheckBox && <LikeCheckBox
          dataCard={dataCard}
        />}
        <Button style={{ width: "50%" }} type="primary">
          Добавить в корзину
        </Button>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default ItemInfo;