<template>
  <label>Limit by:
  <select @change="limitChange" name="limitBy" id="limitBy" class="form-control" v-model="rowsPerPage">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
  </select>
  </label>
</template>

<script>
  export default {
    name: 'limit-by',
    data:
      () => ({
        rowsPerPage: 10
      }),
    methods: {
      limitChange() {
        this.$emit('limitByChange', this.rowsPerPage);
      }
    }
  }
</script>

<style scoped>

</style>
