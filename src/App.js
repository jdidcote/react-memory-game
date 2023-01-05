import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  useEffect(() => console.log(score));

  return (
    <div className="min-h-screen mx-auto max-w-screen-lg pt-4">
      <Header score={score} bestScore={bestScore}></Header>
      <Cards score={score} setScore={setScore}></Cards>
    </div>
  );
}

export default App;
