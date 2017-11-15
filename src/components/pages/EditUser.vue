<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Edit User</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="app">
            <user-form :user="user"></user-form>
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
    },
    async created() {
      try {
        const {data} = await UsersAPI().get(`/users/${this.$route.params.id}`)
        this.user = data;
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
