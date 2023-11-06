import React from "react";
import style from "./Cards.module.scss";

const Card = () => {
  return (
    <div className={style.card}>
      <h2></h2>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <button>Cennik</button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className={style.test}>
      <div className={style.cardsContainer}></div>
    </div>
  );
};

export default Cards;
