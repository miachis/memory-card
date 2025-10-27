import "./App.css";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import characters from "./JS/data";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(currentScore);

  const clicked = useRef([]);

  useEffect(() => {
    shuffleArray(characters);
  }, [currentScore]);

  const handleClick = (e) => {
    const arr = clicked.current;
    if (arr.includes(e.currentTarget.id)) {
      setHighScore(currentScore);
      setCurrentScore(0);
      arr.splice(0);
    } else {
      e.preventDefault();
      arr.push(e.currentTarget.id);
      setCurrentScore(currentScore + 1);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <div className="cards">
        <Card characters={characters} handleClick={handleClick}></Card>
      </div>
    </>
  );
}

export default App;
