<template>
  <tbody>
    <tr v-for="user in limitBy" :key="user.id">
      <th scope="row">{{user.id}}</th>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.age}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>
        <router-link class="oi oi-pencil" title="Edit" :to="{ name: 'edit-user', params: { id: user.id }}"></router-link>
      </td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'user-list',
    props: {
      users: {
        type: Array,
        required: true
      },
      rowsPerPage: {
        type: Number,
        default: 10
      },
      pagNum: {
        type: Number,
        default: 1
      }
    },
    computed: {
      limitBy() {
        return this.users.slice((this.pagNum - 1) * this.rowsPerPage, this.rowsPerPage * this.pagNum)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .oi {
    color: #fff;
    &:hover {
      text-decoration: none;
      color: rgba(255,255,255, .8);
    }
  }
</style>
