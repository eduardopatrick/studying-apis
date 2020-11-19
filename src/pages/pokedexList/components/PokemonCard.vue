<template>
  <q-card class="my-card col-md-4 col-sm-12 col-xs-12">
    <router-link
      class="pokemon-name"
      :to="{ name: 'pokemon-details', params: { identifier: pokemon.name } }"
    >
      <q-img
        contain
        class="pokemon-img"
        :key="pokemon.url"
        :alt="`${pokemon.name} + photo`"
        :src="pokemon.sprites.front_default"
      >
      </q-img>
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
      required: true,
    },
  },
};
</script>

<style lang="stylus"></style>
