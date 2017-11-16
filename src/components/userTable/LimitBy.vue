<template>
  <label>Limit by:
  <select @change="limitChange" name="limitBy" id="limitBy" class="form-control" v-model.number="rowsPerPage">
    <option v-for="option in options" :key="option">{{option}}</option>
  </select>
  </label>
</template>

<script>
  export default {
    name: 'limit-by',
    model: {
      prop: 'value',
      event: 'change'
    }/*,
    props: {
      rowsPerPage: {
        type: Number,
        default: 10
      }
    }*/,
    data:
      () => ({
        options: [5, 10, 20, 50],
        rowsPerPage: 10
      }),
    methods: {
      limitChange() {
        this.$emit('change', this.rowsPerPage);
      }
    }
  }
</script>
