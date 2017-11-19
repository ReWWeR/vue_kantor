<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/pages/globals/Navigation.vue';

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style>
  body {
    padding-top: 5rem;
  }
</style>
