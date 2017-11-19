<template>
  <div class="user-form">
    <pre class="pre-scrollable">{{user}}</pre>
    <div class="form-row mb-3">
      <div class="col">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" placeholder="First name"
               v-model="user.firstName" id="firstName">
        <div class="form-check pt-3">
          <span class="float-left mr-3">Is active:</span> <checkbox v-model="user.isActive"></checkbox>
        </div>
      </div>
      <div class="col">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" placeholder="Last name"
               v-model="user.lastName" id="lastName">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col-md-1">
        <label for="id">ID</label>
        <input type="number" class="form-control" placeholder="ID"
               v-model="user.id" id="id" disabled>
      </div>
      <div class="col-md-2">
        <label for="birthday">Birthday</label>
        <datepicker id="birthday" placeholder="Birthday" class="form-control" v-model="user.birthday"></datepicker>
      </div>
      <div class="col-md-1">
        <label for="age">Age</label>
        <input type="number" class="form-control" disabled placeholder="Age"
               :value="ageCount" id="age">
      </div>
      <div class="col-md-2">
        <label for="accessLevel">Access level</label>
        <select name="accessLevel" id="accessLevel" class="form-control" v-model="user.accessLevel" multiple>
          <option v-for="accessLevel in accessLevels" :user="accessLevel" :key="accessLevel">{{accessLevel}}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="company">Company</label>
        <input type="text" class="form-control" placeholder="Company"
               v-model="user.company" id="company">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" placeholder="E-mail"
               v-model="user.email" id="email">
      </div>
      <div class="col">
        <label for="phone">Phone</label>
        <input type="tel" class="form-control" placeholder="phone"
               v-model="user.phone" id="phone">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="address">Address</label>
        <input type="text" class="form-control" name="address" id="address"
               v-model="user.address">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col form-row flex-nowrap">
        <div class="col-sm-3" v-if="user.picture">
        <img :src="user.picture" class="img-thumbnail" alt="">
        </div>
        <div class="col-sm-9">
          <label for="picture">Picture URL</label>
          <input type="text" class="form-control mb-3" placeholder="Picture URL"
                 v-model="user.picture" id="picture" readonly>
          <dropzone v-model="user.picture"></dropzone>

          <input type="file" ref="avatarUpload" id="avatarUpload" name="avatarUpload" hidden @change="sendAvatar">
          <button class="btn btn-primary mt-3" @click="uploadImageButtonHandler">Upload Image</button>
        </div>
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="about">About</label>
        <medium-editor name="about" id="about" v-model="user.about"></medium-editor>
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <button type="button" @click="saveUser" class="btn btn-primary">{{saveUpdateButtonText}}</button>
        <button type="button" @click="deleteUser" class="btn btn-danger" v-if="isEditForm">Delete user</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {localAPI, imgurAPI} from './../../services/UsersAPI'
  import Datepicker from './../plugins/Datepicker.vue'
  import MediumEditor from './../plugins/MediumEditor.vue'
  import Dropzone from './../plugins/Dropzone.vue'
  import Checkbox from './../customHtmlElements/Checkbox.vue'
  import moment from 'moment'

  export default {
    name: 'edit-form',
    model: {
      prop: 'user'
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    components: {
      Datepicker,
      MediumEditor,
      Dropzone,
      Checkbox
    },
    data: () => ({
      accessLevels: ['user', 'guest', 'admin']
    }),
    computed: {
      saveUserURL() {
        return this.isEditForm ? `/users/${this.user.id}` : '/users'
      },
      deleteUserURL() {
        return `/users/${this.user.id}`
      },
      isEditForm() {
        return this.$route.name === 'edit-user'
      },
      saveUpdateButtonText() {
        return this.isEditForm ? 'Edit user' : 'Save user'
      },
      ageCount() {
        if (this.user.birthday) {
          return moment().diff(Date.parse(this.user.birthday), 'years')
        }
      }
    },
    methods: {
      uploadImageButtonHandler() {
        this.$refs.avatarUpload.click();
      },
      async saveUser() {
        try {
          if (this.isEditForm) {
            await localAPI.patch(this.saveUserURL, this.user);
          } else {
            await localAPI.post(this.saveUserURL, this.user);
          }
          this.$router.push({path: '/'});
        } catch (e) {
          console.log(e)
        }
      },
      async deleteUser() {
        try {
          await localAPI.delete(this.deleteUserURL);
          this.$router.push({path: '/'});
        } catch (e) {
          console.log(e)
        }
      },
      async sendAvatar() {
        try {
          const avatarFile = new FormData();
          avatarFile.append('image', this.$refs.avatarUpload.files[0]);
          const {data} = await imgurAPI.post('', avatarFile);
          this.user.picture = data.data.link;
        } catch(e) {
          console.log(e)
        }
      }
    }
  }
</script>
