<template>
  <div id="pokemon-list">
    <poke-filter />
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
import { mapActions, mapGetters } from 'vuex';
import PokemonCard from './components/PokemonCard.vue';
import PokeFilter from './components/PokeFilter.vue';

export default {
  components: {
    'pokemon-card': PokemonCard,
    'poke-filter': PokeFilter,
  },
  name: 'List',
  data() {
    return {
      types: [],
    };
  },
  props: {},
  async beforeMount() {
    try {
      await this.getAllPokemons();
      this.$q.notify({
        color: 'positive',
        message: 'Pokedex: We\'ve catches them all :)',
      });
    } catch (error) {
      this.$q.notify({
        color: 'negative',
        message: 'Pokedex: Couldn\'t to catch them all :(',
      });
    }
  },
  methods: {
    ...mapActions('pokemons', ['getAllPokemons']),
  },
  computed: {
    ...mapGetters('pokemons', ['pokemons']),
  },
};
</script>

<style lang="stylus">
#pokemon-list
    padding-top: 100px;
  .my-card.q-card
    margin: 10px;
    max-width: 280px;
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
  @media(max-width:600px)
  #pokemon-list
    padding-bottom: 150px;
</style>
