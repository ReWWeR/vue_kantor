<template>
  <div class="user-form">
    <pre class="pre-scrollable">{{value}}</pre>
    <div class="form-row mb-3">
      <div class="col">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" placeholder="First name"
               v-model="value.firstName" id="firstName">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" id="isActive" class="form-check-input" v-model="value.isActive"> is active
          </label>
        </div>
      </div>
      <div class="col">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" placeholder="Last name"
               v-model="value.lastName" id="lastName">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col-md-1">
        <label for="id">ID</label>
        <input type="number" class="form-control" placeholder="ID"
               v-model="value.id" id="id" disabled>
      </div>
      <div class="col-md-2">
        <label for="registered">Registered</label>
        <input type="text" class="form-control" placeholder="Registered"
               v-model="value.registered" id="registered" disabled>
      </div>
      <div class="col-md-1">
        <label for="age">Age</label>
        <input type="number" class="form-control" placeholder="Age"
               v-model.number="value.age" id="age">
      </div>
      <div class="col-md-2">
        <label for="accessLevel">Access level</label>
        <select name="accessLevel" id="accessLevel" class="form-control" v-model="value.accessLevel" multiple>
          <option v-for="accessLevel in accessLevels" :value="accessLevel" :key="accessLevel">{{accessLevel}}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="company">Company</label>
        <input type="text" class="form-control" placeholder="Company"
               v-model="value.company" id="company">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" placeholder="E-mail"
               v-model="value.email" id="email">
      </div>
      <div class="col">
        <label for="phone">Phone</label>
        <input type="tel" class="form-control" placeholder="phone"
               v-model="value.phone" id="phone">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="address">Address</label>
        <input type="text" class="form-control" name="address" id="address"
               v-model="value.address">
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col form-row flex-nowrap">
        <img :src="value.picture" v-if="value.picture" alt="">
        <div class="ml-3 w-100">
          <label for="picture">Picture URL</label>
          <input type="text" class="form-control" placeholder="Picture URL"
                 v-model="value.picture" id="picture">
        </div>
      </div>
    </div>
    <div class="form-row mb-3">
      <div class="col">
        <label for="about">About</label>
        <textarea name="about" id="about" rows="5" class="form-control" v-model="value.about"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'edit-form',
    props: {
      value: {
        type: Object
      }
    },
    data: () => ({
      accessLevels: ['user','guest','admin']
    })
  }
</script>
