<template>
  <div id="pokemon-details">
    <div class="container">
      <div class="row flex justify-center">
        <q-card>
          <q-card-section :vertical="orientation" :horizontal="!orientation">
            <q-card-section >
              <span>
                {{`No.${pokemon.id}` }}
              </span>
              <q-img
                contain
                class="pokemon-img"
                :key="pokemon.url"
                :alt="`${pokemon.name} + photo`"
                :src="currentImg"
              >
              </q-img>
              <div class="types">
                <q-badge
                  class="badge-type"
                  outline
                  color="black"
                  :label="types.type.name"
                  v-for="(types, index) in pokemon.types"
                  :key="index"
                />
              </div>
              <q-btn @click="changeSprite" icon="swap_vert" color="accent"
                >&nbsp;Point of view</q-btn
              >
            </q-card-section>
            <q-card-section>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="positive"
                indicator-color="positive"
                align="justify"
                narrow-indicator
              >
                <q-tab name="first" label="Stats" />
                <q-tab name="second" label="Moves" />
                <q-tab name="third" label="Abilitys" />
              </q-tabs>

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="first">
                  <ul class="list-group">
                    <li v-for="(stats, index) in pokemon.stats" :key="index">
                      {{ stats.stat.name }}
                      <q-linear-progress
                        dark
                        stripe
                        rounded
                        size="20px"
                        :value="stats.base_stat/100"
                        color="purple"
                        class="q-mt-sm"
                      >
                        <div class="absolute-full flex flex-center">
                          <q-badge
                            class="badge-stats"
                            color="black"
                            text-color="white">
                              {{ stats.base_stat }}
                          </q-badge>
                        </div>
                      </q-linear-progress>
                    </li>
                  </ul>
                </q-tab-panel>

                <q-tab-panel name="second">
                  <div class="moves" v-for="(move, index) in moves" :key="index">
                    <q-badge color="primary" text-color="white" class="badge-moves">
                      {{ move.move.name }}
                    </q-badge>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="third">
                  <div class="abilities" v-for="(ability, index) in pokemon.abilities" :key="index">
                    <q-badge filled color="black" text-color="white" class="badge-abilities">
                      {{ ability.ability.name }}
                    </q-badge>
                  </div>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PokemonDetails',
  data() {
    return {
      tab: 'first',
      upFront: true,
      orientation: false,
      currentImg: '',
      moves: [],
    };
  },
  props: {
    identifier: {
      type: String,
      required: true,
    },
  },
  async beforeMount() {
    if (window.screen.width < 600) { // change section by width screen
      this.orientation = true;
    }
    try {
      await this.getPokemonDetail(this.identifier);
      this.$q.notify({
        color: 'positive',
        message: `Pokedex: ${this.pokemon.name} sucessfull Catch :)`,
      });
    } catch (error) {
      this.$q.notify({
        color: 'negative',
        message: 'Pokedex: failed to catch pokemon :(',
      });
    }
    this.moves = this.pokemon.moves.filter((_, index) => index < 10);
    this.currentImg = this.pokemon.sprites.front_default;
  },
  methods: {
    ...mapActions('pokemons', ['getPokemonDetail']),
    changeSprite() {
      if (this.upFront) {
        this.upFront = false;
        this.currentImg = this.pokemon.sprites.back_default;
      } else {
        this.upFront = true;
        this.currentImg = this.pokemon.sprites.front_default;
      }
    },
  },
  computed: {
    ...mapGetters('pokemons', ['pokemon']),
  },
};
</script>

<style lang="stylus">
#pokemon-details
  padding-top: 100px;
  padding-bottom: 10px;
  .q-card
    border-radius: 5%;
  .q-panel > div
    width: max-content;
  .list-group
    text-align: left;
    list-style: none;
  .q-ma-md
    margin: 0px 10px;
  .badge-stats
    margin: 3px;
    font-size: 0.6rem;
    height: -webkit-fill-available;
  .badge-type
    margin: 5px 5px 15px 5px;
    padding: 6px;
  @media(max-width: 600px)
    .q-card
      width: -webkit-fill-available;
</style>
