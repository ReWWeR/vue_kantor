<template>
  <label>Limit by:
  <select @change="limitChange" name="limitBy" id="limitBy" :value="rowsPerPage" class="form-control">
    <option v-for="option in options" :key="option">{{option}}</option>
  </select>
  </label>
</template>

<script>
  export default {
    name: 'limit-by',
    model: {
      prop: 'rowsPerPage',
      event: 'change'
    },
    props: {
      rowsPerPage: {
        type: Number,
        required: true
      }
    },
    data:
      () => ({
        options: [5, 10, 20, 50]
      }),
    methods: {
      limitChange() {
        this.$emit('change', event.target.value);
      }
    }
  }
</script>
