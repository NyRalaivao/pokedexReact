import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList, faTh } from "@fortawesome/free-solid-svg-icons";
import pokedexLogo from "../assets/images/logo.png";

const SearchHeader = ({ onSearch, view, setView }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 shadow-md bg-white/80 backdrop-blur-md gap-4 sm:gap-0">
      <div className="flex-shrink-0">
        <img src={pokedexLogo} alt="Pokedex Logo" className="h-10 w-auto cursor-pointer" />
      </div>
      <form 
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-xl sm:mx-4 rounded-lg overflow-hidden border-2"
        style={{ borderColor: "#12CCE5" }}
      >
        <input
          type="text"
          placeholder="Rechercher des Pokémon"
          aria-label="Rechercher des Pokémon"
          className="w-full px-4 py-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Rechercher"
          className="px-4 py-2 text-white cursor-pointer"
          style={{ backgroundColor: "#12CCE5" }}
        >
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
      <div className="flex space-x-3">
        <button
          onClick={() => setView("all")}
          className={`flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm border-none transition cursor-pointer text-left min-w-[100px] ${
            view === "all"
              ? "bg-gray-400 text-white shadow-sm"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-pressed={view === "all"}
        >
          <FontAwesomeIcon icon={faList}/>
          Voir tout
        </button>

        <button
          onClick={() => setView("three")}
          className={`flex items-center justify-start gap-2 px-4 py-2 rounded-md text-sm border-none cursor-pointer transition text-left min-w-[100px] ${
            view === "three"
              ? "text-white shadow-sm"
              : "hover:brightness-110"
          }`}
          aria-pressed={view === "three"}
          style={{
            backgroundColor: view === "three" ? "#12CCE5" : "#D0F7FB",
            color: view === "three" ? "white" : "#0E8DA0",
            borderColor: "#12CCE5",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <FontAwesomeIcon icon={faTh} />
          Trois cartes
        </button>
      </div>
    </header>
  );
}

export default SearchHeader