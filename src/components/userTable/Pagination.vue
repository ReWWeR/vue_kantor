<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: isFirstPage}">
        <button class="page-link" @click="prevNextButtons(-1)">Previous</button>
      </li>
      <li class="page-item" :class="{active: isActive(page)}" v-for="(page, index) in totalPages" :key="page">
        <button class="page-link" @click="setPagination(page)">{{ page }}</button>
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
    model: {
      prop: 'currentPage',
      event: 'change'
    },
    props: {
      rowsPerPage: {
        type: Number,
        required: true
      },
      totalRows: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    data: () => ({
//      currentPage: 1
    }),
    computed: {
      totalPages() {
        return Math.ceil(this.totalRows / this.rowsPerPage)
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
        this.setPagination(1);
      }
    },
    methods: {
      setPagination(page) {
        this.$emit('change', page)
      },
      prevNextButtons(turn) {
        this.$emit('change', this.currentPage + turn)
      },
      isActive(page) {
        return this.currentPage === page
      }
    },
  }
</script>

<style scoped>
  .page-link {
    cursor: pointer;
  }
</style>
