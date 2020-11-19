<template>
  <div id="navbar">
    <q-header>
      <q-toolbar class="flex">
        <div class="row full-width">
          <router-link :to="{ name: 'pokemon-list' }">
            <img
              class="logo"
              width="150"
              src="/icons/pokemon-logo.png"
              alt="back to home"
            />
          </router-link>
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="stylus">
#navbar
  a.router-link-exact-active
    display: block;
    margin-left: auto;
    margin-right: auto;
  .logo
    margin: 10px;
</style>
