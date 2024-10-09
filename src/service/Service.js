import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonById = async (pokemonId) => {
    try {
        const response = await axios.get(`${API_URL}/${pokemonId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching Pokémon: ${error.message}`);
        throw error;
    }
};
