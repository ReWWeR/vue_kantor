<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Users List</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <user-table></user-table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import UserTable from './../userTable/UserTable.vue';

  export default {
    name: 'index',
    components: {
      UserTable
    }
  }
</script>

<style scoped>

</style>
