"use client";
import { useState } from "react";
import AddGame from "@/components/AddGame";

export default function GamesPage() {
  // Estado para almacenar los juegos
  const [games, setGames] = useState([]);
  // Estado para controlar la visibilidad del formulario
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Función para agregar un juego a la lista
  const addGame = (game) => {
    setGames([...games, game]);
  };

  // Función para alternar la visibilidad del formulario
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-opacity-80 backdrop-blur-md">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Mis Juegos 🎮
        </h1>

        {/* Botón para agregar un juego */}
        <button
          onClick={toggleFormVisibility}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 mb-6"
        >
          {isFormVisible ? "Cancelar" : "Agregar Juego"}
        </button>

        {/* Mostrar el formulario si isFormVisible es true */}
        {isFormVisible && <AddGame addGame={addGame} />}

        <div className="mt-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Lista de Juegos</h2>
          <ul className="space-y-4">
            {games.map((game, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:bg-gray-50 transition duration-300"
              >
                <div className="text-lg font-medium text-gray-800">{game.name}</div>
                <div className="text-sm text-gray-500">{game.platform}</div>
                <div className="text-sm text-gray-500">{game.status}</div>
                <div className="text-sm text-gray-500">${game.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}