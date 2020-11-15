<template>
  <div  id="pokemon-list">
    <div class="row">
      <q-card  class="my-card"
      v-for="(pokemon, index) in pokemons"
      :key="pokemon.url">
        <q-card-section>
          <q-img
          :key="pokemon.url"
          :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`">
          </q-img>
          <h5>
            {{ pokemon.name }}
          </h5>
        </q-card-section>
      </q-card>
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

</style>
