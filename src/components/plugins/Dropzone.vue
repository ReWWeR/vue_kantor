<template>
  <div ref="dropzone" class="dropzone">
  </div>
</template>

<script>
  import Dropzone from 'dropzone/dist/dropzone'
  import 'dropzone/dist/dropzone.css'

  Dropzone.autoDiscover = false;

  export default {
    name: 'dropzone',
    data: () => ({
      dropzone: null
    }),
    mounted() {
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        url: 'https://api.imgur.com/3/image',
        headers: {
          'Authorization': 'Client-ID a05e8b1a7d26c2d',
          'Cache-Control': null,
          'X-Requested-With': null
        }
      });

      this.dropzone.on('sending', (file, xhr, formData) => {
        formData.append('image', file)
      });

      this.dropzone.on('success', (file,res) => {
        const {data} = res;
        this.$emit('input', data.link);
      })

    },
    destroyed() {
      this.dropzone.destroy()
    }
  }
</script>
