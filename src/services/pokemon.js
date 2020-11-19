import axios from 'axios'

export default {
  async getAllPokemons () {
    return axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: { limit: 12, offset: 0 }
    })
  },
  async searchForPokemon ({ name }) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return data
  },
  async getAbilities () {
    const { data } = await axios.get('https://pokeapi.co/api/v2/ability')
    return data.results
  },
  async getTypes () {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type')
    return data.results
  },
  async filterPokemons (path, value) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/${path}/${value.toLowerCase()}`)
    return data
  }
}
