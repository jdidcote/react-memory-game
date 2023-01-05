import React from "react";

export default function Header(props) {
  return (
    <div className="h-12 bg-slate-200 rounded-md">
      <div className="h-full flex justify-between px-8 items-center">
        <div className="text-2xl font-bold">Memory Game</div>
        <div className="h-full flex items-center font-bold">
          <div className="mx-8">Current score: {props.score}</div>
          <div className="mx-8">Best score: {props.bestScore}</div>
        </div>
      </div>
    </div>
  );
}
