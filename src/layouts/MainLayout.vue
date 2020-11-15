<template>
  <q-layout view="lHh Lpr lFf">
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
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  async beforeMount () {
    try {
      await this.getAllPokemons()
    } catch (error) {
      this.$q.notify({
        color: 'negative',
        message: 'Pokedex: falha ao carregar pokemons'
      })
    } finally {
    }
  },
  methods: {
    ...mapActions('pokemons', [
      'getAllPokemons'
    ])
  },
  computed: {
    ...mapGetters('pokemons', [
      'pokemons'
    ])
  }
}
</script>
