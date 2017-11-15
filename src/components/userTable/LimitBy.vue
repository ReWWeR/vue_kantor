<template>
  <select name="limitBy" id="limitBy" class="form-control" v-model="limitBy">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
  </select>
</template>

<script>
  export default {
    name: 'pagination',
    data:
      () => ({
        limitBy: 5
      })
  }
</script>

<style scoped>

</style>
