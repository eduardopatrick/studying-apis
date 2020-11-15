import pokemonService from 'src/services/pokemon'

export const getAllPokemons = async ({ commit }, options = {}) => {
  const { data } = await pokemonService.getAllPokemons(options)
  const pokemons = data.results
  commit('setPokemons', pokemons)
}
