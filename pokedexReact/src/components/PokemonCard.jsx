import React from "react";

const PokemonCard = ({ pokemon }) => {
  const getTypeColor = (type) => {
    const typeColors = {
      grass: "#4ade80",
      water: "#38bdf8",
      fire: "#f97316",
      electric: "#facc15",
      psychic: "#a78bfa",
      ice: "#7dd3fc",
      dragon: "#818cf8",
      dark: "#6b7280",
      fairy: "#f9a8d4",
      normal: "#a3a3a3",
      fighting: "#f87171",
      flying: "#93c5fd",
      poison: "#c084fc",
      ground: "#fcd34d",
      rock: "#d6d3d1",
      bug: "#bef264",
      ghost: "#a78bfa",
      steel: "#94a3b8",
    };
    return typeColors[type.toLowerCase()] || "#60a5fa";
  };

  const typeColor = getTypeColor(pokemon.type);

  return (
    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-6 shadow-xl w-full max-w-xs mx-auto text-center text-gray-800">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-white/30 shadow-inner" />
        <svg
          className="absolute top-0 left-0 w-full h-full z-10"
          viewBox="0 0 36 36"
        >
          <path
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
          />
          <path
            d="M18 2 a 16 16 0 0 0 0 32"
            fill="none"
            stroke={typeColor}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 z-20"
        />
      </div>
      <h2 className="text-2xl font-bold capitalize mb-1">{pokemon.name}</h2>
      <span
        className="inline-block text-white text-sm px-4 py-2 rounded-lg  font-semibold"
        style={{ backgroundColor: typeColor }}
      >
        {pokemon.type}
      </span>

      {/* Statistiques */}
      <div className="flex flex-col gap-3 text-sm text-left px-2 mb-4">
        <StatLine label="Force" value={pokemon.strength} color={typeColor} />
        <StatLine label="Vitesse" value={pokemon.speed} color={typeColor} />
        <StatLine
          label="Poids"
          value={parseFloat(pokemon.weight)}
          color={typeColor}
        />
        <StatLine
          label="Talent"
          value={pokemon.skill.length * 10}
          color={typeColor}
        />
      </div>
    </div>
  );
};

const StatLine = ({ label, value, color }) => {
  const width = Math.min(value, 100);
  return (
    <div>
      <span className="font-semibold text-gray-700">{label}</span>
      <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
        <div
          className="h-full"
          style={{
            width: `${width}%`,
            backgroundColor: color,
            transition: "width 0.4s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
