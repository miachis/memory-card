import "./App.css";
import Card from "./components/Card";
import characters from "./JS/data";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <>
      <ScoreBoard />
      <div className="cards">
        <Card characters={characters}></Card>
      </div>
    </>
  );
}

export default App;
