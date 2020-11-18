import pokemonService from 'src/services/pokemon'

export const getAllPokemons = async ({ commit }, options = {}) => {
  const { data } = await pokemonService.getAllPokemons(options)
  const pokemons = data.results // name and url
  const pokemonInfo = await Promise.all(pokemons.map(pokemonService.searchForPokemon))
  commit('setPokemons', pokemonInfo)
}

export const getPokemonDetail = async ({ commit }, indentifier) => {
  const pokemonInfo = await pokemonService.searchForPokemon(indentifier)
  commit('setPokemon', pokemonInfo)
}
