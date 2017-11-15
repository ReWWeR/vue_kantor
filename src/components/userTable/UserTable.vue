<template>
  <div>
  <table class="table table-dark" v-if="users">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone</th>
    </tr>
    </thead>
    <tbody is="user-list" :users="users"></tbody>
  </table>
    <pagination></pagination>
  </div>
</template>

<script>
  import UserList from './UserList.vue';
  import Pagination from './Pagination.vue';
  import UsersAPI from './../../services/UsersAPI'

  export default {
    name: 'user-table',
    data: () => {
      return {
        users: [],
        limitBy: 3
      }
    },
    components: {
      UserList,
      Pagination
    },

    async created() {
      try {
        const {data} = await UsersAPI().get('/users');
        this.users = data;
      } catch (e) {
        console.log(e)
      }
    },
  }
</script>

<style scoped>

</style>
