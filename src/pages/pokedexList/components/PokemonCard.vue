<template>
  <q-card class="my-card col-md-4 col-sm-12 col-xs-12">
          <q-img
              contain
              :key="pokemon.url"
              :alt="`${pokemon.name} + photo`"
              :src="
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`">
          </q-img>
            <router-link
            class="pokemon-name"
            :to="{ name: 'pokemon-details', params: { id: pokemon.id } }">
            <p>{{ pokemon.name }}</p>
            <p>No.{{ pokemon.id }}</p>
          </router-link>
  </q-card>
</template>

<script>
export default {
  name: 'pokemon-card',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
</style>
