// components/GameCard.js
export default function GameCard({ game }) {
    return (
      <div className="game-card">
        <h3>{game.name}</h3>
        <p>{game.description}</p>
        <button>Eliminar</button>
      </div>
    );
  }