export default function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="score-board">
      <h2>SpongeBob Memory Game</h2>
      <div className="score">
        <p className="current-score">Score: {currentScore}</p>
        <p className="highest-score">Highest Score: {highScore}</p>
      </div>
    </div>
  );
}
