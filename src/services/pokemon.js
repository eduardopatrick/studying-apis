import axios from 'axios'

export default {
  async getAllPokemons (args) {
    const params = { ...args }
    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10', {
      params
    })
  },
  async searchForPokemon ({ name }) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return data
  }
}
