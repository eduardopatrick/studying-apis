<template>
  <div  id="pokemon-list">
    <div class="container">
      <div class="row justify-center flex">
        <q-card  class="my-card col-md-4 col-sm-12 col-xs-12"
          v-for="(pokemon, index) in pokemons"
          :key="pokemon.url">
            <q-img
                contain
                :key="pokemon.url"
                :alt="`${pokemon.name} + photo`"
                :src="
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`">
            </q-img>
            <router-link
              class="pokemon-name"
              :to="{ name: 'pokemon-details', params: { id: index + 1 } }">
              <p>{{ pokemon.name }}</p>
              <p>No.{{ index + 1 }}</p>
            </router-link>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
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
    .q-img
      max-height: 200px;
    .pokemon-name
      text-align: center;
      margin-bottom: 0px;
      text-decoration none;
</style>
