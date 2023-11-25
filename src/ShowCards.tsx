import React, { useEffect, useState } from "react";
import { CardType } from "./App";

type Prop = {
  card: {
    imgPath: string;
    id: number;
    show: boolean;
  };
  setCards: React.Dispatch<React.SetStateAction<CardType>>;
  handleChoise: (card: any) => void;
  flipp: boolean;
};

const ShowCards: React.FC<Prop> = ({ card, setCards, handleChoise, flipp }) => {
  const choise = () => {
    handleChoise(card);
  };

  return (
    <div className="card">
      <div className={flipp ? "flipped" : ""}>
        <img className="front" src={card.imgPath} alt="bg" />
        <img className="back" src="/img/cover.png" alt="bg" onClick={choise} />
      </div>
    </div>
  );
};

export default ShowCards;
