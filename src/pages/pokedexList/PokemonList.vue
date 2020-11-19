<template>
  <div  id="pokemon-list">
    <div class="container">
      <div class="row justify-center flex">
        <pokemon-card
          :pokemon="pokemon"
          v-for="(pokemon, index) in pokemons"
          :key="index"
          />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from './components/PokemonCard.vue'

export default {
  components: { 'pokemon-card': PokemonCard },
  name: 'List',
  data () {
    return {
      types: []
    }
  },
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus">
#pokemon-list
  .my-card
    margin: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 10%;
    border: black solid 2px;
    a
      text-decoration none;
    .q-img
      max-height: 200px;
    .pokemon-name
      text-align: center;
      margin-bottom: 0px;
      text-transform: capitalize

</style>
