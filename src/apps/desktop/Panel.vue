<template>
  <transition name="linear">
    <div class="panel separate-left primary-background" v-if="panelShow" @click.stop="idealAction">xxx</div>
  </transition>
</template>

<script>
  export default {
    props: { 
      state: { type: Boolean, default: false }
    },
    data () {
      return {
        panelShow: this.state
      }
    },
    methods: {
      idealAction () {}
    },
    watch: {
      state (v) {
        this.panelShow = v
      }
    }
  }
</script>

<style scoped="true">
  .panel { position: absolute; width: 300px; top: 37px; bottom: 0; right: 0; }
  .linear-enter-active, .linear-leave-active { transition: all .3s ease; }
  .linear-enter, .linear-leave-to { transform: translateX(300px); }
</style>