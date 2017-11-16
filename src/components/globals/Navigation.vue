<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand">VUE.js</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" active-class="active" to="/" exact>
          <a class="nav-link">List of users</a>
        </router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/add">
          <a class="nav-link">Add new user</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>
