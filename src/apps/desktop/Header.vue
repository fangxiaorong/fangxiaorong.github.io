<template>
  <div class="primary-background separate-bottom" style="display: flex; justify-content: flex-end; padding: 0 10px;">
    <FlatButton v-for="button in buttons" :key="button.action" :type="button.icon" @click.native.prevent.stop="$emit('action', button.action)" />
  </div>
</template>

<script>
  export default {
    props: { buttons: Array },
    methods: {
      searchAction () {
        window.console.log('action.....')
      }
    }
  }
</script>