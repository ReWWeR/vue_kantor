<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: isFirstPage}">
        <button class="page-link" @click="prevNextButtons(-1)">Previous</button>
      </li>
      <li class="page-item" :class="{active: isActive(index)}" v-for="(page, index) in totalPages" :key="page">
        <button class="page-link" @click="setPagination(index)">{{index + 1}}</button>
      </li>
      <li class="page-item" :class="{disabled: isLastPage}">
        <button class="page-link" @click="prevNextButtons(1)">Next</button>
      </li>
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
      totalPages() {
        return Math.ceil(this.totalRows/this.rowsPerPage)
      },
      isLastPage() {
        return this.currentPage === this.totalPages
      },
      isFirstPage() {
        return this.currentPage === 1
      }
    },
    watch: {
      rowsPerPage() {
        if ((this.currentPage * this.rowsPerPage) > this.totalRows) {
          this.setPagination(this.totalPages - 1);
        }
      }
    },
    methods: {
      setPagination(pageNumber) {
        this.currentPage = pageNumber + 1;
        this.$emit('input', this.currentPage)
      },
      prevNextButtons(turn) {
        this.currentPage += turn;
        this.$emit('input', this.currentPage)
      },
      isActive(index) {
        return this.currentPage === index + 1
      }
    },
  }
</script>

<style scoped>
  .page-link {
    cursor: pointer;
  }
</style>
