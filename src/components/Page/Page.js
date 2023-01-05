/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Choose from "./Choose/Chose";
import Auction from "./Auction/Auction";
import Footer from "./Footer/Footer";
import { filterCategories } from "../../utils/utils";
import "./Page.css";

function Page(props) {
  const [renderCards, setRenderCards] = useState([]);

  useEffect(() => {
    setRenderCards(props.allCards);
  }, [props.allCards]);

  const headerTextButtons = {
    first: "Discover",
    second: "Marketplace",
    third: "How it Work",
  };

  const filterCards = (e) => {
    switch (e.target.textContent) {
      case "All":
        setRenderCards(props.allCards);
        break;
      case "Laptops":
        setRenderCards(filterCategories(props.allCards, "category", "laptops"));
        break;
      case "Fragrances":
        setRenderCards(
          filterCategories(props.allCards, "category", "fragrances")
        );
        break;
      case "Skincare":
        setRenderCards(
          filterCategories(props.allCards, "category", "skincare")
        );
        break;
      case "Smartphones":
        setRenderCards(
          filterCategories(props.allCards, "category", "smartphones")
        );
        break;
      case "Groceries":
        setRenderCards(
          filterCategories(props.allCards, "category", "groceries")
        );
        break;
      case "Home Decoration":
        setRenderCards(
          filterCategories(props.allCards, "category", "home-decoration")
        );
    }
  };

  return (
    <div className="page">
      <Header headerTextButtons={headerTextButtons} />
      <Main allCards={props.allCards} filterCards={filterCards} />
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
