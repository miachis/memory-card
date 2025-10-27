export default function Card({ characters, handleClick }) {
  return characters.map((character) => {
    return (
      <button
        className="card"
        key={character.name}
        onClick={handleClick}
        id={character.name}
      >
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
      </button>
    );
  });
}
