<template>
  <div class="checkbox float-left">
    <input type="checkbox" :checked="checked" @change="inputChanged" id="slideTwo" name="check" />
    <label for="slideTwo"></label>
  </div>
</template>

<script>
  export default {
    name: 'checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      inputChanged() {
        this.$emit('change', event.target.checked)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $activeColor: #27ae60;
  $darkenColor: darken($activeColor, 20%);
  $background: #3498db;

  .checkbox {
    width: 80px;
    height: 30px;
    background: #333;
    margin: 0;
    position: relative;
    border-radius: 50px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.2);
    &:after {
      content: '';
      position: absolute;
      top: 14px;
      left: 14px;
      height: 2px;
      width: 52px;
      background: #111;
      border-radius: 50px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    label {
      display: block;
      width: 22px;
      height: 22px;
      cursor: pointer;
      position: absolute;
      top: 4px;
      z-index: 1;
      left: 4px;
      background: #fcfff4;
      border-radius: 50px;
      transition: all 0.4s ease;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
      background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
      &:after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 6px;
        left: 6px;
        background: #333;
        border-radius: 50px;
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.9);
      }
    }
    input[type=checkbox] {
      visibility: hidden;
      &:checked + label {
        left: 54px;
        &:after {
          background: $activeColor; /*activeColor*/
        }
      }
    }
  }
</style>
