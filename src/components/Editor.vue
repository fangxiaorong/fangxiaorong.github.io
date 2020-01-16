<template>
  <div class="hello" tabindex="1" @keyup="keyupAction" @keypress.prevent="keypressAction">
    <div class="line" v-for="(line, lndex) in lines" :key="lndex">
      <div class="block" v-for="(block, bndex) in line" :key="bndex">
        <pre v-text="block.code"></pre><div class="cursor" v-if="lndex===activeLine && bndex===activeBlock"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      activeLine: 1,
      activeBlock: 0,
      lines: [[{code: 'hello'}], [{code: 'This.   xyz'}, {code: 'a demo.'}]]
    }
  },
  methods: {
    keypressAction (e) {
      if (e.keyCode !== 13) {
        this.lines[this.activeLine][this.activeBlock].code += e.key
      }
    },
    keyupAction (e) {
      if (e.keyCode === 8) { // delete
        const txt = this.lines[this.activeLine][this.activeBlock].code
        this.lines[this.activeLine][this.activeBlock].code = txt.substring(0, txt.length - 1)
      } else if (e.keyCode === 13) { // enter

      }
    }
  }
}
</script>

<style scoped>
.hello { background-color: #DDD; height: 100%; }
.hello .line .block, .hello .line .block>pre { display: inline-block; }
.hello .cursor { width: 1px; height: 10px; background-color: red; display: inline-block; }
</style>
