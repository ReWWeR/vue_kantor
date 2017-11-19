<template>
  <textarea ref="textarea" class="form-control" :value="value"></textarea>
</template>

<script>
  import mediumEditor from 'medium-editor'
  import 'medium-editor/dist/css/medium-editor.min.css'

  export default {
    name: 'medium-editor',
    props: {
      value: {
        type: String
      }
    },
    data: () => ({
      MEInstance: null
    }),
    methods: {
      triggerInput() {
        this.$emit('input', this.MEInstance.getContent())
      }
    },
    mounted() {
      this.MEInstance = new mediumEditor(this.$refs.textarea);
      this.MEInstance.subscribe('editableInput', this.triggerInput);
    },
    destroyed() {
      this.MEInstance.destroy();
    }
  }
</script>

<style scoped>
  textarea {
    display: none;
  }
</style>
