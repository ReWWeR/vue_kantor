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
          <user-form v-model="user"></user-form>
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
        user: {
          "id": 0,
          "isActive": false,
          "balance": "",
          "picture": "",
          "accessLevel": [],
          "firstName": "",
          "lastName": "",
          "company": "",
          "email": "",
          "phone": "",
          "address": "",
          "about": "",
          "birthday": ""
        }
      }
    }
  }
</script>

<style scoped>

</style>
