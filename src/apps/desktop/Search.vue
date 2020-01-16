<template>
  <div class="search" v-if="searchShow" @click.stop="idealAction">
    <input type="text" />
    <i class="fab fas fa-search" />
    <div class="content">xxxyyy</div>
  </div>
</template>

<script>
  export default {
    props: { 
      state: { type: Boolean, default: false }
    },
    data () {
      return {
        searchShow: this.state
      }
    },
    methods: {
      idealAction () {}
    },
    watch: {
      state (v) {
        this.searchShow = v
      }
    }
  }
</script>

<style scoped="true">
  .search { position: absolute; width: 30%; top: 60px; left: 50%; margin-left: -15%; background: white; border-radius: 5px; background-color: #bbb; }
  input { width: calc(100% - 50px); padding: 0; margin: 0; height: 50px; border: none; outline: none; font-size: 32px; padding-left: 50px; border-radius: 5px; background-color: transparent; }
  .content { border-top: 1px solid #aaa; }
  i.fab { color: #666; font-size: 32px; position: absolute; top: 9px; left: 10px; }
</style>