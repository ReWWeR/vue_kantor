<template>
  <div v-if="users.length">
    <div class="row">
      <div class="col-md-3 mb-3">
        <limit-by @limitByChange="limitByChange"></limit-by>
      </div>
    </div>
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
      <tbody is="user-list" :users="users" :rowsPerPage="rowsPerPage" :pagNum="pageNum"></tbody>
    </table>
    <pagination :rowsPerPage="rowsPerPage" :totalRows="users.length" @setPagination="setPageNum"></pagination>
  </div>
</template>

<script>
  import UserList from './UserList.vue';
  import Pagination from './Pagination.vue';
  import LimitBy from './LimitBy.vue';
  import UsersAPI from './../../services/UsersAPI'

  export default {
    name: 'user-table',
    data: () => ({
      users: [],
      rowsPerPage: 10,
      pageNum: 1
    }),
    components: {
      UserList,
      Pagination,
      LimitBy
    },
    async created() {
      try {
        const {data} = await UsersAPI().get('/users');
        this.users = data;
      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      limitByChange(limit) {
        this.rowsPerPage = +limit;
      },
      setPageNum(newPageNum) {
        this.pageNum = newPageNum;
      }
    }
  }
</script>

<style scoped>

</style>
