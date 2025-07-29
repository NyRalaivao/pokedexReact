import { useEffect, useState } from "react";

export default function PokemonListPaginated() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadPokemons = async () => {
    setLoading(true);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=4&offset=${offset}`
    );
    const data = await res.json();

    const detailed = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const detailedPokemon = await res.json();

        return {
          ...detailedPokemon,
        };
      })
    );

    setPokemons(detailed); // Remplace complètement la liste par les 4 nouveaux Pokémon
    setLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, [offset]); // Recharge à chaque changement d'offset

  return (
    <div className="p-6 text-center ">
      <div className="flex flex-wrap justify-center gap-6 mt-[8%]">
        {pokemons.map((pokemon) => {
          const weightNormalized = Math.min(pokemon.weight / 1000, 1) * 100;
          const speedNormalized =
            Math.min(
              pokemon.stats.find((stat) => stat.stat.name === "speed")
                .base_stat / 200,
              1
            ) * 100;
          const attackNormalized =
            Math.min(
              pokemon.stats.find((stat) => stat.stat.name === "attack")
                .base_stat / 200,
              1
            ) * 100;

          const types = pokemon.types.map((typeInfo) => typeInfo.type.name)[0];
          const getTypeColor = (type) => {
            switch (type) {
              case "grass":
                return "#78C850";
              case "fire":
                return "#F08030";
              case "water":
                return "#6890F0";
              case "electric":
                return "#F8D030";
              case "ice":
                return "#98D8D8";
              case "fighting":
                return "#C03028";
              case "poison":
                return "#A040B0";
              case "ground":
                return "#E0C068";
              case "flying":
                return "#A890F0";
              case "psychic":
                return "#F85888";
              case "bug":
                return "#A8B820";
              case "rock":
                return "#B8A038";
              case "ghost":
                return "#705898";
              case "dragon":
                return "#7038F8";
              case "dark":
                return "#705848";
              case "steel":
                return "#B8B8D0";
              case "fairy":
                return "#F0B6BC";
              default:
                return "rgb(35, 255, 145)";
            }
          };

          return (
            <div
              key={pokemon.id}
              className="Card bg-white rounded-2xl p-4  h-120 w-[350px] text-center shadow-md cursor-pointer 
              transition duration-300 transform hover:-translate-y-2 
              hover:shadow-[0_10px_25px_rgba(253,224,71,0.4)] active:scale-95"
            >
              <div className="Card_Profile">
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="w-[150px] h-[150px] mx-auto object-cover rounded-full"
                />
                <p
                  className="text-center mx-auto my-4 w-[25%] rounded-full text-white font-semibold p-2"
                  style={{ backgroundColor: getTypeColor(types) }}
                >
                  {types}
                </p>

                <h3 className=" text-2xl font-bold capitalize  ">
                  {pokemon.name}
                </h3>
              </div>
              <div className="Card_Specs mx-10">
                <p>
                  Force:
                  {
                    pokemon.stats.find((stat) => stat.stat.name === "attack")
                      .base_stat
                  }
                </p>
                <div
                  className="progress-container"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${attackNormalized}%`,
                      backgroundColor: getTypeColor(types),
                      height: "10px",
                    }}
                  ></div>
                </div>
                <p>
                  Vitesse:
                  {
                    pokemon.stats.find((stat) => stat.stat.name === "speed")
                      .base_stat
                  }
                </p>
                <div
                  className="progress-container"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${speedNormalized}%`,
                      backgroundColor: getTypeColor(types),
                      height: "10px",
                    }}
                  ></div>
                </div>
                <p>Poids: {pokemon.weight / 10} Kg</p>
                <div
                  className="progress-container"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${weightNormalized}%`,
                      backgroundColor: getTypeColor(types),
                      height: "10px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setOffset(Math.max(0, offset - 4))}
          disabled={offset === 0 || loading}
          className="px-6 py-2 rounded-full bg-gray-100 hover:bg-red-500 text-black font-semibold transition disabled:opacity-50"
        >
          {loading ? "Chargement..." : "<"}
        </button>
        <button
          onClick={() => setOffset(offset + 4)}
          disabled={loading}
          className="px-6 py-2 rounded-full bg-gray-100 hover:bg-red-500 text-black font-semibold transition disabled:opacity-50"
        >
          {loading ? "Chargement..." : ">"}
        </button>
      </div>
    </div>
  );
}