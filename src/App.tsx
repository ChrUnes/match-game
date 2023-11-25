import React, { useEffect, useState } from "react";
import "./App.css";
import ShowCards from "./ShowCards";

type propCard = {
  imgPath: string;
  id: number;
  show: boolean;
};

export type CardType = propCard[];

const cardImages = [
  { imgPath: "/img/helmet-1.png" },
  { imgPath: "/img/potion-1.png" },
  { imgPath: "/img/ring-1.png" },
  { imgPath: "/img/scroll-1.png" },
  { imgPath: "/img/shield-1.png" },
  { imgPath: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState<CardType>([]);
  const [turns, setTurns] = useState(0);
  const [chooseOne, setChooseOne] = useState<propCard | null>();
  const [chooseTwo, setChooseTwo] = useState<propCard | null>();

  const shuffleCards = () => {
    const shuffleCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), show: false }));

    setCards(shuffleCard);

    setTurns(0);
  };

  const handleChoise = (card: any) => {
    chooseOne && chooseOne.id !== card.id
      ? setChooseTwo(card)
      : setChooseOne(card);
  };

  useEffect(() => {
    if (chooseOne && chooseTwo) {
      if (chooseOne.imgPath === chooseTwo.imgPath) {
        setCards(
          cards.map((card) => {
            return card.imgPath === chooseOne.imgPath
              ? { ...card, show: true }
              : card;
          })
        );
        rest();
      } else {
        setTimeout(() => {
          rest();
        }, 800);
      }
    }
  }, [chooseTwo, chooseOne]);

  const rest = () => {
    setChooseOne(null);
    setChooseTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="showCards">
        {cards.map((card) => {
          return (
            <ShowCards
              card={card}
              setCards={setCards}
              handleChoise={handleChoise}
              key={card.id}
              flipp={card === chooseOne || card === chooseTwo || card.show}
            />
          );
        })}
      </div>
      {turns}
    </div>
  );
}

export default App;
