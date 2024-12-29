// /app/components/AddGame.jsx
"use client";

import { useState } from "react";

export default function AddGame({ addGame }) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agregar el juego
    const newGame = { name, platform, status, price };
    addGame(newGame); // Llama la función para agregar el juego en el componente padre
    setName(""); // Limpiar campo
    setPlatform(""); // Limpiar campo
    setStatus(""); // Limpiar campo
    setPrice(""); // Limpiar campo
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Agregar un Juego</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nombre del juego"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-800 bg-gray-100"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Plataforma"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-800 bg-gray-100"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Estado"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-800 bg-gray-100"
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-800 bg-gray-100"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Agregar Juego
        </button>
      </form>
    </div>
  );
}