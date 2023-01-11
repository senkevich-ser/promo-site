
import { Link } from "react-router-dom";
import { Button } from "antd";
import LikeCheckBox from "../LikeCheckBox/LikeCheckBox";
import { cardBrandName } from '../styles';
import "./CardAuction.css";

function CardAuction(props) {


  return (
    <>
      <Link to={`/${props.dataCard.id}`} style={cardBrandName}>
        <div className="cardAuction__images">
          <div
            className="cardAuction__image cardAuction__singleImage"
            style={{ backgroundImage: `url(${props.dataCard.images[0]})` }}
          ></div>
          <div className="cardAuction__images cardAuction__columnImages">
            <div
              className="cardAuction__image cardAuction__columnImage"
              style={{ backgroundImage: `url(${props.dataCard.images[1]})` }}
            ></div>
            <div
              className="cardAuction__image cardAuction__columnImage"
              style={{ backgroundImage: `url(${props.dataCard.images[2]})` }}
            ></div>
          </div>
        </div>
        <h3 className="card__brandName">{props.dataCard.title}</h3>
      </Link>
      <div className="card__buttons">
        {props.isRoundCheckBox && <LikeCheckBox
          dataCard={props.dataCard}
        />}
        <Button style={{ width: "50%" }} type="primary">
          Добавить в корзину
        </Button>
      </div>
    </>
  );
}

export default CardAuction;
