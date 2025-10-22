export default function Card({ characters }) {
  return (
    <div className="card">
      {characters.map((character) => (
        <>
          <img src={character.image} alt={character.name}></img>
          <button key={character.name}>{character.name}</button>
        </>
      ))}
    </div>
  );
}
