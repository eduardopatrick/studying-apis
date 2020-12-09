import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pokemons from './pokemons';
import state from './pokemons/state';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const dataState = createPersistedState({
  paths: ['pokemons'],
});

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      pokemons,
      state,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
    plugins: [dataState],
  });

  return Store;
}
