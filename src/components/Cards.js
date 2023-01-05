import React, { useEffect, useState } from "react";

function Card(props) {
  const [picture, setPicture] = useState(null);

  const fetchImage = async () => {
    const res = await fetch("https://picsum.photos/200");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setPicture(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div
      className="aspect-square m-8 text-lg font-bold border flex justify-center items-center"
      onClick={() => props.handleClick(props.id)}
    >
      <img src={picture}></img>
    </div>
  );
}

export default function Cards(props) {
  const [cards, setCards] = useState([...Array(8).keys()]);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleCards = () => {
    var shuffledCards = [].concat(cards);
    shuffledCards.sort((a, b) => 0.5 - Math.random());
    setCards(shuffledCards);
  };

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      alert("Game over");
      props.setScore(0);
      setClickedCards([]);
      return;
    }
    props.setScore(props.score + 1);
    shuffleCards();
    setClickedCards([...clickedCards, id]);
  };

  return (
    <div className="grid grid-cols-4">
      {cards.map((card, i) => (
        <Card handleClick={handleClick} key={card} id={card}>
          test
        </Card>
      ))}
    </div>
  );
}
