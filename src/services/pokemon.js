import axios from 'axios'

export default {
  async getAllPokemons (args) {
    const params = { ...args }
    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10', {
      params
    })
  },
  async searchForPokemon (...args) {
    const params = { ...args }
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${args}`, {
      params
    })
  }
}
