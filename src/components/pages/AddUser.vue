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
          <user-form v-model="user" v-if="user"></user-form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import UserForm from '../forms/UserForm.vue';

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
