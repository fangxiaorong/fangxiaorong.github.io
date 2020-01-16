<template>
  <div id="app" class="light">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Sider class="sider" />
    <Desktop />
  </div>
</template>

<script>
import Desktop from './apps/desktop'
import Sider from './apps/sider'

export default {
  name: 'app',
  components: {
    Desktop,
    Sider
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
      // if (typeof(WebSocket) === 'undefined') {
      //   window.console.log('浏览器不支持')
      // } else {
      //   this.socket = new WebSocket(this.path)
      //   this.socket.onopen = this.open
      //   this.socket.onerror = this.error
      //   this.socket.onmessage = this.getMessage
      //   this.socket.onclose = this.close
      // }
    },
    open () {
      window.console.log('socket连接成功')
      this.send()
    },
    error () {
      window.console.log('连接失败')
    },
    getMessage (msg) {
      window.console.log(msg.data)
    },
    send () {
      this.socket.send('{"action": "xxx", "test": "hello"}')
    },
    close () {
      window.console.log('socket关闭')
    }
  }
}
</script>

<style>
html, body, #app {
  padding: 0; margin: 0; height: 100%; width: 100%; box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; display: flex;
}

/* Common */
html * { box-sizing: border-box; }
ul, li { list-style: none; padding: 0; margin: 0; }
a { text-decoration: none; color: #333; }
input { padding: 0; margin: 0; border: none; outline: none; }
/* End */

#app > .sider { display: none; }

@media (min-width: 1024px) {
  #app > .sider { width: 350px; display: block; }
}

#app.light .primary-background { background: #EEE; } /* { background: #F2F2F2; } */
#app.light .light-background { background: #F9F9F9; }
#app.light .desktop { background-color: white; color: #535353; }
#app.light .separate-bottom { border-bottom: 1px solid #D5D5D5; }
#app.light .separate-left { border-left: 1px solid #D5D5D5; }

/*@media (prefers-color-scheme: dark) {
  #app {
    background: $dark-bg-color;
  }
}*/
</style>

<templatex models="b">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  /*background: linear-gradient(180deg,#000 0,#1a2028 50%,#293845);*/
  /*background: linear-gradient(180deg,#000 0,#17172e 50%,#5f5d72);*/
  /*background: linear-gradient(0deg,#000d1e 0,#3c5c7b 50%,#77a2cb);*/
}

/******/
.normal-background { background: #F2F2F2; }
#app .desktop { background-color: white; color: #535353; }
#app .separate-bottom { border-bottom: 1px solid #D5D5D5; }
#app .separate-left { border-left: 1px solid #D5D5D5; }
/******/

</templatex>
