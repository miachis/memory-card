export default function Card({ characters }) {
  const handleClick = () => {};

  return characters.map((character) => {
    return (
      <div className="card" key={character.name} onClick={handleClick}>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
      </div>
    );
  });
}
