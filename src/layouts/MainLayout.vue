<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
     <List :pokemons="pokemons" :loading="loading" ref="list" />
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import List from '../pages/pokedexList/components/List'

export default {
  name: 'MainLayout',
  components: {
    List
  },
  data () {
    return {
      loading: false
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

<style lang="stylus">
#q-app
  font-family: 'PS2P';
  background: rgb(57,32,102);
  background: linear-gradient(90deg, rgba(57,32,102,1) 20%, rgba(0,212,255,1) 50%, rgba(57,32,102,1) 80%);

</style>
