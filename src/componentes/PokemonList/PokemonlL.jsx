import { useEffect, useState } from "react";
import './PokemonList.css';  // Ensure correct file name
import axios from 'axios';
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[pokedexurl,setpokedexurl]=useState('https://pokeapi.co/api/v2/pokemon')
    
    const [nextUrl,setNextUrl]=useState('');
    const [prevUrl,setPrevUrl]=useState('');
    async function downloadPokemon() {
        try {
            const response = await axios.get(pokedexurl);
            const pokemonResults = response.data.results;
            setNextUrl(response.data.next);
            setPrevUrl(response.data.prev)
            const pokemonResultPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await Promise.all(pokemonResultPromises);
            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    types: pokemon.types
                };
            });
            setPokemonList(res);
        } catch (error) {
            console.error('Failed to download pokemon data:', error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        downloadPokemon();
    }, [pokedexurl]);

    return (
        <div className="pokemon-list-wrapper">

            <div className="pokemon-wrapper">
            {isLoading ? 'Loading...' :
                pokemonList.map(p => (
                    <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />
                ))
            }</div>
            <div className="Controls">
            <button disabled={prevUrl} onClick={() => setpokedexurl(prevUrl)}>Prev</button>
             <button disabled={!nextUrl} onClick={() => setpokedexurl(nextUrl)}>Next</button>


            </div>
        </div>
    );
}

export default PokemonList;
