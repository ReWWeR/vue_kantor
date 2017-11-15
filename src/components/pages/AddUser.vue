<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Add User</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="app">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import UserForm from '../forms/UserForm.vue';
  import UsersAPI from './../../services/UsersAPI'

  export default {
    name: 'add-user',
    components: {
      UserForm
    },
    data: () => {
      return {
        user: {}
      }
    }
  }
</script>

<style scoped>

</style>
