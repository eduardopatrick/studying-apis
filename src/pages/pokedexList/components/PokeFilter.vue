<template>
  <div id="poke-filter">
    <div class="container">
      <div class="row justify-center flex">
        <q-form class="q-gutter-md form">
          <div class="select">
            <q-select
              @input="clearParams"
              label="Choice"
              map-options
              emit-value
              v-model="path"
              :options="options"
            />
          </div>
          <div class="types" v-if="path === 'type'">
            <q-select
              emit-value
              map-options
              v-model="search"
              :options="typesOptions"
              label="Type"
            />
          </div>
          <div v-if="path === 'ability'" class="abilities">
            <q-select
              emit-value
              map-options
              aria-placeholder="Abilities"
              v-model="search"
              :options="abilitiesOptions"
              label="Ability"
            />
          </div>
          <div v-if="path === 'pokemon' || path === 'id'" class="input-field">
            <q-input
              emit-value
              :value="search"
              class="input-field"
              v-model="search"
              filled
              type="search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <q-btn rounded class="col-md-4" icon="search" @click="submitSearch">
            Search
          </q-btn>
        </q-form>
      </div>
    </div>
    <div class="col-md-12 col-xs-12">
      <p class="info">You can Search for: ID, Name, Type or Ability</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '', // valor da busca
      path: '', // tipo da busca
      options: [
        {
          label: 'Name',
          value: 'pokemon',
        },
        {
          label: 'Id',
          value: 'pokemon',
        },
        {
          label: 'Type',
          value: 'type',
        },
        {
          label: 'Ability',
          value: 'ability',
        },
      ],
    };
  },
  async beforeMount() {
    await this.getAbilities();
    await this.getTypes();
  },
  computed: {
    ...mapGetters('pokemons', ['types', 'abilities', 'pokemons']),
    abilitiesOptions() {
      // copy with another format from object, to use at select options
      return this.abilities.map(ability => ({
        value: ability.name,
        label: ability.name,
      }));
    },
    typesOptions() {
      return this.types.map(type => ({
        value: type.name,
        label: type.name,
      }));
    },
  },
  methods: {
    ...mapActions('pokemons', ['getAbilities', 'getTypes', 'filterPokemons']),
    async submitSearch() {
      await this.filterPokemons({
        path: this.path,
        value: this.search,
      });
    },
    clearParams() {
      this.search = '';
    },
  },
};
</script>

<style lang="stylus">
#poke-filter
  .form
    display: flex;
    padding: 10px
    .select, .types, .abilities
      min-width: 150px;
    .q-field__messages.col
      text-align: center;
      color: #000;
    .q-btn
      background-color: rgba(28,204,122,1);
      color: #fff;
      align-self: center;
      height: fit-content;
  .info
    text-align: center;
  @media(max-width: 600px)
    .form
      display: block;
</style>
