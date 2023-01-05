import React, { useState } from "react";

function Card(props) {
  return (
    <div
      className="aspect-square m-8 text-lg font-bold border flex justify-center items-center"
      onClick={() => props.shuffleCards()}
    >
      Card: {props.id}
    </div>
  );
}

export default function Cards() {
  const [cards, setCards] = useState([...Array(8).keys()]);

  const shuffleCards = () => {
    var shuffledCards = [].concat(cards);
    shuffledCards.sort((a, b) => 0.5 - Math.random());
    setCards(shuffledCards);
    console.log(cards);
  };

  return (
    <div className="grid grid-cols-4">
      {cards.map((card, i) => (
        <Card shuffleCards={shuffleCards} key={card} id={card}>
          test
        </Card>
      ))}
    </div>
  );
}
