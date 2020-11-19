<template>
  <div id="pokemon-details">
    <div class="container">
      <div class="row flex justify-center">
        <q-card>
          <q-card-section horizontal>
            <q-card-section>
              <q-img
                class="pokemon-img"
                :key="pokemon.url"
                :alt="`${pokemon.name} + photo`"
                :src="currentImg"
              >
              </q-img>
              <div class="types">
                <q-badge
                  outline
                  color="positive"
                  :label="types.type.name"
                  v-for="(types, index) in pokemon.types"
                  :key="index"
                />
              </div>
              <q-btn color="primary">See More Sprites</q-btn>
            </q-card-section>
            <q-card-section>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="first" label="Stats" />
                <q-tab name="second" label="ETC" />
                <q-tab name="third" label="ETC" />
              </q-tabs>

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="first">
                  <ul class="list-group">
                    <li v-for="(stats, index) in pokemon.stats" :key="index">
                      {{ stats.stat.name }}
                      <q-linear-progress size="25px" :value="stats.base_stat/100" color="accent">
                        <div class="absolute-full flex flex-left">
                          <q-badge color="white" text-color="accent" :label="stats.base_stat" />
                        </div>
                      </q-linear-progress>
                    </li>
                  </ul>
                </q-tab-panel>

                <q-tab-panel name="second"> </q-tab-panel>

                <q-tab-panel name="third">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PokemonDetails',
  data () {
    return {
      tab: 'first',
      upFront: true,
      currentImg: ''
    }
  },
  props: {
    identifier: {
      type: String,
      required: true
    }
  },
  async beforeMount () {
    try {
      await this.getPokemonDetail(this.identifier)
      this.$q.notify({
        color: 'positive',
        message: `Pokedex: Dados de ${this.pokemon.name} carregados com sucesso :)`
      })
      this.currentImg = this.pokemon.sprites.front_default
    } catch (error) {
      this.$q.notify({
        color: 'negative',
        message: 'Pokedex: falha ao carregar pokemons'
      })
    }
  },
  methods: {
    ...mapActions('pokemons', ['getPokemonDetail'])
  },
  computed: {
    ...mapGetters('pokemons', ['pokemon'])
    // pokemonImg () {

    //   return
    // }
  }
}
</script>

<style lang="stylus">
#pokemon-details
  padding-top: 100px;
  .list-group
    text-align: left;
    list-style: none;
  .q-ma-md
    margin: 0px 10px;
  .q-badge
    margin: 5px;
</style>
