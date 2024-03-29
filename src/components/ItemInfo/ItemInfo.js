import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { Button } from "antd";
import Header from '../Page/Header/Header';
import Footer from '../Page/Footer/Footer';
import LikeCheckBox from '../LikeCheckBox/LikeCheckBox';
import './ItemInfo.css';
import DemoCarousel from '../Carousel/Carousel';
import starFull from '../../images/starFull.svg'
import starEmpty from '../../images/starEmpty.svg'


function ItemInfo(props) {

  const [dataCard, setDataCard] = useState({})
  let { id } = useParams();

  useEffect(() => {
    if (props.dataCards.length) {
      const card = props.dataCards.find(card => card.id === Number(id));
      setDataCard(card);
    }
  }, [props.dataCards])


  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  return (
    <div className='itemInfo'>
      <Header headerTextButtons={headerTextButtons} />
      <div className='itemInfo__wapper'>
        <DemoCarousel data={dataCard} />
        <div className='itemInfo__rightInfo'>
          <div className='itemInfo__wapper_favoriteCheck'>
            <span className='itemInfo__brand'>{dataCard.brand}</span>
          </div>
          <h1 className='itemInfo__title'>{dataCard.title}</h1>
          <div className='itemInfo__price display_block'>&#36;&#32;{dataCard.price}</div>
          <span className='itemInfo__discount display_block'>Current &nbsp;&nbsp; discount &nbsp;&nbsp;{dataCard.discountPercentage}&#32;&#37;</span>
          <span className='itemInfo__rating display_block'>Current &nbsp;&nbsp; rating &nbsp;&nbsp;{dataCard.rating}</span>
          <Rating  initialRating={dataCard.rating} readonly
            emptySymbol={<img src={starEmpty} className="icon" alt=''/>}
            fullSymbol={<img src={starFull} className="icon" alt='' />}
          />
          <span className='itemInfo__stock display_block'>Current &nbsp;&nbsp; stock &nbsp;&nbsp;{dataCard.stock}&nbsp;&nbsp;pcs.</span>
          <p className='itemInfo__description display_block'>{dataCard.description}</p>
          <div className="card__buttons">
            {props.isRoundCheckBox && <LikeCheckBox
              dataCard={dataCard}
            />}
            <Button type="primary">
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ItemInfo;