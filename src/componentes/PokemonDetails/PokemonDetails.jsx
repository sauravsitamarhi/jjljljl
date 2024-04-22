import { useParams } from 'react-router-dom';
import axios from 'axios';
// import "./PokemonDetails.css"
import { useEffect, useState } from 'react';

function PokemonDetails() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function downloadPokemon() {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name)
            });
        } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            downloadPokemon();
        }
        return () => {
            // Cleanup if needed or cancel the request
        };
    }, [id]);  // Ensure useEffect runs when `id` changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pokemon) return <div>No data found</div>;

    return (
        <div className='pokemon_details_Wrapper'>
            <div className='name'>Name: <span>{pokemon.name}</span></div>
            <img className='pokemon_image' src={pokemon.image} alt={`Image of ${pokemon.name}`} />
            <div>Height:<span>{pokemon.height}</span></div>
            <div>Weight:{pokemon.weight}</div>
        </div>
    );
}

export default PokemonDetails;