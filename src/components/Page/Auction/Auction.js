import React, { useState, useEffect } from 'react';
import Card from '../../Card/Card';
import CardAuction from '../../CardAuction/CardAuction';
import { headerRoundButtonStyles } from '../Main/styles';
import { useWindowDimensions } from '../../../hooks/useDimensions';
import { getVisualProps } from '../../../utils/VisualProps';
import { Button, Space } from 'antd';
import './Auction.css'



function Auction(props) {

  //Переменная состояния кнопки "Еше"
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  //Массив полученных карточек с сервера или сохраненных
  const [currentCards, setCurrentCards] = useState([]);

  const { width } = useWindowDimensions();
  const [visualProps, setVisualProps] = useState({ total: 9, add: 3 });
  //Переменная количества отображаемых карточек
  const [visibleCardsNumber, setVisibleCardsNumber] = useState(0);
  // Массив непосредственно отображаемых карточек
  const [showedMovies, setShowedMovies] = useState([]);


  useEffect(() => {
    setCurrentCards(props.allCards)
  }, [props.allCards])

  useEffect(() => {
    setVisualProps(getVisualProps(width));
  }, [width]);

  useEffect(() => {
    if (currentCards.length <= visualProps.total) {
      setVisibleCardsNumber(currentCards.length);
      setIsMoreVisible(false);
    }
    else if (visibleCardsNumber) {
      setVisibleCardsNumber(visibleCardsNumber)
      setIsMoreVisible(true);
    }
    else {
      setVisibleCardsNumber(visualProps.total)
      setIsMoreVisible(true);
    }
  }, [currentCards, visualProps, visibleCardsNumber]);


  useEffect(() => {
    setShowedMovies(currentCards.slice(0, visibleCardsNumber));
  }, [visibleCardsNumber, currentCards]);

  useEffect(() => {
    if (visibleCardsNumber >= currentCards.length)
      setIsMoreVisible(false);
  }, [visibleCardsNumber, currentCards]);

  const handleMoreClick = () => {
    // Определяем количество отображаемых карточек
    let newValue = visibleCardsNumber + visualProps.add;
    setVisibleCardsNumber(newValue);
  };

  return (
    <section className='auction'>
      <h2 className='auction__title'>{props.title}</h2>
      <h3 className='auction__subtitle'>{props.subtitle}</h3>
      <div className='auction__card-container'>
        {showedMovies.map((card) => {
          return (
            <Card onClick={props.onClick}
              isDeleteButton={props.isDeleteButton}
              children={<CardAuction isRoundCheckBox={props.isRoundCheckBox}
                dataCard={card} />}
              dataCard={card}
              styles='card_type_auction'
              key={card.id} />
          );
        })}
      </div>
      {isMoreVisible && (<Space wrap>
        <Button type="primary" style={headerRoundButtonStyles} shape="round" onClick={handleMoreClick} >Explore more</Button>
      </Space>)}
    </section>
  )
}

export default Auction;