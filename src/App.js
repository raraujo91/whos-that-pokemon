import React, { useEffect, useState } from 'react';
import Card from "./components/Card"
import Box from './components/Box';
import Header from './components/Header'
import Footer from './components/Footer';
function App() {

  const [pokemons, setPokemons] = useState([]);
  const [guessedPokemons, setGuessedPokemons] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState("");
  const [bestScore, setBestScore] = useState(localStorage.getItem('WTP:BestScore') || 0);
  const [loadCard, setLoadCard] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const fetchedPokemons = [];

      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokeAPI = await response.json();

      pokeAPI.results.forEach(result => {
        fetchedPokemons.push({
          id: pokeAPI.results.indexOf(result) + 1,
          name: result.name
        });
      });

      setPokemons(fetchedPokemons);
      setLoadCard(true);
    }

    fetchData();

  }, []);

  const handleRightAnswer = (id) => {
    let guessedPokemon = [];
    let updatedPokemons = pokemons.filter(pokemon => pokemon.id !== id ? true : false);

    guessedPokemon.push(...guessedPokemons, pokemons.find(pokemon => pokemon.id === id));

    setGuessedPokemons(guessedPokemon);
    setPokemons(updatedPokemons);
  }


  if (bestScore < guessedPokemons.length) {
    setBestScore(guessedPokemons.length);
    localStorage.setItem('WTP:BestScore', guessedPokemons.length);
  }

  const getRandomPokemon = () => {

    const pokemonIds = pokemons.map(pokemon => pokemon.id);
    const getRandomPokemon = Math.floor(Math.random() * pokemonIds.length);

    if (typeof pokemons[getRandomPokemon] === "undefined") {
      setRandomPokemon(JSON.stringify({ id: 0 }));
    }

    setRandomPokemon(JSON.stringify(pokemons[getRandomPokemon]));
  }

  useEffect(() => {
    getRandomPokemon();
  });

  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col md:flex-row xl:flex-row justify-center items-center overflow-hidden">

      <Header />

      {loadCard && <div className="new-card relative"><button onClick={() => getRandomPokemon()} className="absolute right-0 bg-red-700 hover:bg-red-900 flex flex-row justify-center items-center rounded-full w-8 h-8 mt-2 mr-2 cursor-pointer text-2xl text-white font-bold">&times;</button><Card pokemon={randomPokemon} handler={handleRightAnswer} /></div>}

      <div className="new-card flex flex-row justify-center content-center mt-2 md:mt-0 md:ml-4 space-x-2 md:space-x-0 md:space-y-4 md:flex-col">
        <Box type="score" mark={guessedPokemons.length} />
        <Box type="best" mark={bestScore} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
