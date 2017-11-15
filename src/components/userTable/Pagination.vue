<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" :class="{active: currentPage === index + 1}" v-for="(page, index) in countPaginations">
        <a class="page-link" @click.prevent="setPagination(index)" href="#">{{index + 1}}</a>
      </li>
      <li class="page-item"><a class="page-link" href="#" disabled>Next</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      rowsPerPage: {
        type: Number,
        default: 10
      },
      totalRows: {
        type: Number,
        default: 10
      }
    },
    data: () => ({
      currentPage: 1
    }),
    computed: {
      countPaginations() {
        return Math.ceil(this.totalRows/this.rowsPerPage)
      }
    },
    methods: {
      setPagination(index) {
        this.currentPage = index + 1;
        this.$emit('setPagination', this.currentPage)
      }
    },
    watch: {
      rowsPerPage: function(newVal) {
        if ((this.currentPage * newVal) > this.totalRows) {
          this.setPagination(this.countPaginations - 1);
        }
      }
    }
  }
</script>

<style scoped>

</style>
