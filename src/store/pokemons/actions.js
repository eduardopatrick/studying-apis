import pokemonService from 'src/services/pokemon';

export const getAllPokemons = async ({ commit }, options = {}) => {
  const { data } = await pokemonService.getAllPokemons(options);
  const pokemons = data.results; // name and url
  const pokemonInfo = await Promise.all(pokemons.map(pokemonService.searchForPokemon));
  commit('setPokemons', pokemonInfo);
};

export const getPokemonDetail = async ({ commit }, indentifier) => {
  const pokemonInfo = await pokemonService.searchForPokemon({ name: indentifier });
  commit('setPokemon', pokemonInfo);
};

export const getAbilities = async ({ commit }) => {
  const abilities = await pokemonService.getAbilities();
  commit('setAbilities', abilities);
};

export const getTypes = async ({ commit }) => {
  const types = await pokemonService.getTypes();
  commit('setTypes', types);
};

export const filterPokemons = async ({ commit }, { path, value }) => {
  const result = await pokemonService.filterPokemons(path, value);
  if (path === 'pokemon') {
    commit('setPokemons', [result]); // unico objeto com array de informações sobre 1 pokemon
  } else {
    const pokemons = result.pokemon.filter((_, index) => index < 20)
      .map(pokemon => pokemon.pokemon);
    const pokemonInfo = await Promise.all(pokemons.map(pokemonService.searchForPokemon));
    commit('setPokemons', pokemonInfo); // pokemons que possuem aquele atributo em algum lugar
  }
};
