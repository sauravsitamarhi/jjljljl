import { Routes, Route } from "react-router-dom";
import Pokedex from "../componentes/Pokedex/Pokedex";
import PokemonDetails from "../componentes/PokemonDetails/PokemonDetails"; // Corrected case typo

function CustomRoutes() {
    return (
        <Routes> {/* Changed from <Route> to <Routes> */}
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} /> {/* Uncommented and corrected */}
        </Routes>
    );
}

export default CustomRoutes;
