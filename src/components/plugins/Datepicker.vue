<template>
  <input type="text" ref="datepicker" placeholder="Date of birth" :value="dateToValue">
</template>

<script>
  import 'flatpickr/dist/flatpickr.min.css'
  import flatpickr from 'flatpickr/dist/flatpickr'

  export default {
    name: 'datepicker',
    props: {
      value: {
        type: String
      }
    },
    data: () => ({
      fp: null
    }),
    computed: {
      dateFormat() {
        return 'd.m.Y'
      },
      dateToValue() {
        if (this.value === '') {
          return  this.fp ? this.fp.formatDate(new Date(), this.dateFormat) : 0
        }
        return  this.fp ? this.fp.formatDate(new Date(this.value), this.dateFormat) : 0
      }
    },
    mounted() {
      this.fp = flatpickr(this.$refs.datepicker, {
        dateFormat: this.dateFormat,
        maxDate: new Date(),
        onChange: (selectedDates) => {
          this.$emit('input', selectedDates[0].toString());
        }
      });
    },
    destroyed() {
      this.fp.destroy();
    }
  }
</script>

<style scoped>
  input {
    background-color: #fff!important;
  }
</style>
