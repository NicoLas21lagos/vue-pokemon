<template>
  <div class="container text-center">
    <h2>Buscar Pokémon por ID</h2>
    <input v-model="pokemonId" type="number" placeholder="Ingresa ID Pokémon" />
    <button id="btn" @click="getPokemon">Buscar</button>
    <div v-if="pokemon">
      <img
        :src="pokemon.sprites.front_default"
        alt="Imagen del personaje"
        class="img-fluid col-md"
      />
      <h3>{{ pokemon.name }}</h3>
      <p>Tipos: {{ pokemon.types.join(", ") }}</p>
      <p>Altura: {{ pokemon.height }} decímetros</p>
      <p>Peso: {{ pokemon.weight }} hectogramos</p>
    </div>
    <div v-else>
      <p v-if="pokemonId === ''">vacio</p>
    </div>
  </div>
</template>

<script>
import { getPokemonById } from "@/service/Service";

export default {
  data() {
    return {
      pokemonId: "",
      pokemon: null,
      error: null,
    };
  },

  methods: {
    async getPokemon() {
      if (!this.pokemonId) {
        this.error = "Por favor ingresa un ID de Pokémon";
        return;
      }
      try {
        this.pokemon = await getPokemonById(this.pokemonId);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    },
  },
};
</script>

<style scoped>
#btn {
  margin: 10px;
}

h2 {
  margin: 10px;
}
</style>
