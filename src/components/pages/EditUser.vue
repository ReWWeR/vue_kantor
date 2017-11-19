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
  import {localAPI} from './../../services/UsersAPI'

  export default {
    name: 'edit-user',
    components: {
      UserForm
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data: () => {
      return {
        user: null
      }
    },
    computed: {
      getUserById() {
        return `/users/${this.id}`
      }
    },
    methods: {
      async fetchData() {
        try {
          const {data} = await localAPI.get(this.getUserById);
          this.user = data;
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.fetchData();
    },
  }
</script>
