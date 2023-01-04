import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Choose from "./Choose/Chose";
import Auction from "./Auction/Auction";
import Footer from "./Footer/Footer";
import "./Page.css";

function Page(props) {

  const [renderCards, setRenderCards] = useState([]);

  useEffect(()=>{
    setRenderCards(props.allCards)
  },[props.allCards]);

  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  const filterCards=(category)=>{
console.log(category)
  }

  return (
    <div className="page">
      <Header headerTextButtons={headerTextButtons} />
      <Main allCards={props.allCards} filterCards={filterCards}/>
      <Auction
        isRoundCheckBox={true}
        isDeleteButton={false}
        allCards={renderCards}
        title={"Live Auction"}
        subtitle={
          "The largest and unique Super rare NFT marketplace    For crypto-collectibles"
        }
      />
      <Choose />
      <Footer />
    </div>
  );
}

export default Page;
