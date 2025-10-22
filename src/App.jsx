import "./App.css";
import Card from "./components/Card";
import characters from "./JS/data";

function App() {
  return <Card characters={characters}></Card>;
}

export default App;
