<template>
  <a><div class="fab fas" :class="type"></div></a>
</template>

<script>
  export default {
    props: ['type']
  }
</script>

<style scoped="true">
  a { cursor: pointer; color: #535353; }
  a:hover { color: #aaa; }
  a>div { padding: 10px; }
</style>
