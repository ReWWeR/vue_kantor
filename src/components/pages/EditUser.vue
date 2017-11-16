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
  import UsersAPI from './../../services/UsersAPI'

  export default {
    name: 'edit-user',
    components: {
      UserForm
    },
    data: () => {
      return {
        user: null
      }
    },
    computed: {
      getUserById() {
        return `/users/${this.$route.params.id}`
      }
    },
    methods: {
      async fetchData() {
        try {
          const {data} = await UsersAPI.get(this.getUserById);
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
