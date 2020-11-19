<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <Navbar ref="navbar"/>
    <router-view/>
  </q-layout>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style lang="stylus">
#q-app
  font-family: 'PS2P';
  background: rgb(70,193,238);
  background: linear-gradient(
    180deg, rgba(70,193,238,1) 16%,
    rgba(28,204,122,1) 68%,
    rgba(79,202,152,1) 82%);

  .pokemon-img
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
</style>
