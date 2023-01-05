import React from "react";

function Card(props) {
  return (
    <div
      className="aspect-square m-8 text-lg font-bold border flex justify-center items-center"
      onClick={() => console.log(props.id)}
    >
      Card: {props.id}
    </div>
  );
}

export default function Cards() {
  const cards = [...Array(8).keys()];
  return (
    <div className="grid grid-cols-4">
      {cards.map((card, i) => (
        <Card key={i} id={i}>
          test
        </Card>
      ))}
    </div>
  );
}
