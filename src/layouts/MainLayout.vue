<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
     <List :pokemons="pokemons" :loading="loading" ref="list" />
  </q-layout>
</template>

<script>
import List from '../pages/pokedexList/PokemonList'

export default {
  name: 'MainLayout',
  components: {
    List
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang="stylus">
#q-app
  font-family: 'PS2P';
  background: rgb(57,32,102);
  background: linear-gradient(90deg, rgba(57,32,102,1) 20%, rgba(0,212,255,1) 50%, rgba(57,32,102,1) 80%);

</style>
