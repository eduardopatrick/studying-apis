<template>
  <div id="pokemon-details">
    <div class="container">
      <div class="row">
        <q-card>
            <q-card-section horizontal>
              <q-card-section>
                <ul>
                Tipo: {{ pokemon.types.type.name }}
                Peso:
                Habilidades:
                <li>{{ pokemon.abilities[0] }}</li>
                <li>{{ pokemon.abilities[1] }}</li>
                </ul>
              </q-card-section>
              <q-img
                :key="pokemon.url"
                :alt="`${pokemon.name} + photo`"
                :src="
               `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`">
          </q-img>
            </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetails',
  data () {
    return {
      pokemon: null
    }
  }
}
</script>

<style lang="stylus">

</style>
