import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";
import pokedexLogo from "../assets/images/logo.png";

export default function SearchHeader() {
  const [view, setView] = useState("grid");

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 shadow-md bg-white/80 backdrop-blur-md gap-4 sm:gap-0">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={pokedexLogo} alt="Pokedex Logo" className="h-10 w-auto" />
      </div>

      {/* Barre de recherche */}
      <div
        className="flex items-center w-full max-w-xl sm:mx-4 rounded-lg overflow-hidden border-2"
        style={{ borderColor: "#12CCE5" }}
      >
        <input
          type="text"
          placeholder="Rechercher des cartes"
          aria-label="Rechercher des cartes"
          className="w-full px-4 py-2 outline-none"
        />
        <button
          aria-label="Rechercher"
          className="px-4 py-2 text-white cursor-pointer"
          style={{ backgroundColor: "#12CCE5" }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Boutons Vue */}
      <div className="flex space-x-3">
        {/* Bouton Liste */}
        <button
          onClick={() => setView("list")}
          className={`flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm border transition text-left min-w-[100px] ${
            view === "list"
              ? "bg-gray-400 text-white shadow-sm"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-pressed={view === "list"}
        >
          <FontAwesomeIcon icon={faBars} />
          Liste
        </button>

        {/* Bouton Grille */}
        <button
          onClick={() => setView("grid")}
          className={`flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm border transition text-left min-w-[100px] ${
            view === "grid"
              ? "text-white shadow-sm"
              : "hover:brightness-110"
          }`}
          aria-pressed={view === "grid"}
          style={{
            backgroundColor: view === "grid" ? "#12CCE5" : "#D0F7FB",
            color: view === "grid" ? "white" : "#0E8DA0",
            borderColor: "#12CCE5",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <FontAwesomeIcon icon={faThLarge} />
          Grille
        </button>
      </div>
    </header>
  );
}
