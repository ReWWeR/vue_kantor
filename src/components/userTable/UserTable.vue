<template>
  <div v-if="showForm">
    <div class="row">
      <div class="col-md-3 mb-3">
        <limit-by v-model.number="rowsPerPage"></limit-by>
      </div>
    </div>
    <table class="table table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Is Active</th>
        <th scope="col">E-mail</th>
        <th scope="col">Phone</th>
      </tr>
      </thead>
      <user-list :users="limitByUsers"></user-list>
    </table>
    <pagination :rowsPerPage="rowsPerPage" :totalRows="users.length" v-model.number="currentPage"></pagination>
  </div>
</template>

<script>
  import UserList from './UserList.vue';
  import Pagination from './Pagination.vue';
  import LimitBy from './LimitBy.vue';
  import {localAPI} from './../../services/UsersAPI'

  export default {
    name: 'user-table',
    components: {
      UserList,
      Pagination,
      LimitBy
    },
    data: () => ({
      users: [],
      rowsPerPage: 10,
      currentPage: 1
    }),
    computed: {
      showForm() {
        return !!this.users.length
      },
      limitByUsers() {
        return this.users.slice((this.currentPage - 1) * this.rowsPerPage, this.rowsPerPage * this.currentPage)
      }
    },
    methods: {
      async getUsers() {
        try {
          const {data} = await localAPI.get('/users');
          this.users = data;
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.getUsers()
    },
  }
</script>
