import axios from 'axios'

export default {
  async getAllPokemons (args) {
    const params = { ...args }
    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0', {
      params
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
