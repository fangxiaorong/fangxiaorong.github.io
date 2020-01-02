<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      path: 'ws://127.0.0.1:8001',
      socket: undefined
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (typeof(WebSocket) === 'undefined') {
        window.console.log('浏览器不支持')
      } else {
        this.socket = new WebSocket(this.path)
        this.socket.onopen = this.open
        this.socket.onerror = this.error
        this.socket.onmessage = this.getMessage
        this.socket.onclose = this.close
      }
    },
    open () {
      window.console.log('socket连接成功')
    },
    error () {
      window.console.log('连接失败')
    },
    getMessage (msg) {
      window.console.log(msg.data)
    },
    send () {
      this.socket.send('hello')
    },
    close () {
      window.console.log('socket关闭')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
