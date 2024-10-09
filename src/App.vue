<template>
  <nav id="nav">
  </nav>

  <div id="app">
    <PokemonList />
  </div>

</template>

<script>
import PokemonList from './components/PokemonList.vue';

export default {
  name:'App',
  components: {PokemonList}
}
</script>

<style>
#nav{
  padding: 10px;
  background-color: rgb(236, 226, 123);
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>