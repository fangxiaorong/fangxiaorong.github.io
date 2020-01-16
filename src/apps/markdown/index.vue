<template>
  <div @keyup="keyupAction" @keydown="keydownAction" @click="changeCursorAction">
    <div class="line" v-for="(line, row) in code" :key="line.id" :data="row">
      <div class="block" v-for="(block, col) in line.children" v-text="block.text" :contenteditable="force||(active[0]===row&&active[1]===col)" :key="block.id" :data="col"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        force: true,
        nextId: 2,
        active: [0, 0],
        code: [{id: 0, children: [{id: 1, text: 'hello....'}]}]
      }
    },
    mounted () {
      this.test()
    },
    methods: {
      test () {
        window.console.log('xxxx')
      },
      keydownAction (e) {
        if (e.keyCode === 13) {
          e.preventDefault()
          e.stopPropagation()
        } else if (e.keyCode === 8) {
          if (window.getSelection().getRangeAt(0).startOffset === 0) {
            let x = parseInt(e.target.getAttribute('data'))
            let y = parseInt(e.target.parentNode.getAttribute('data'))
            if (e.target.innerText.length <= 0) { // 如果block为空，删除
              this.code[y].children.splice(x, 1)
            }
            if (x === 0) { // 行的第一个block，删除当前行，合并到上一行
              x = this.code[y - 1].children.length - 1
              this.$set(this.code[y - 1], 'children', this.code[y - 1].children.concat(this.code[y].children))
              this.code.splice(y, 1)
              y = y - 1
            } else {
              x = x - 1
            }

            window.setTimeout(() => {
              this.keepLastIndex(window.document.querySelector('.line[data="' + y + '"] > .block[data="' + x + '"]'))
            }, 100)
          }
        }
      },
      keyupAction (e) {
        if (e.keyCode === 13) {
          const x = parseInt(e.target.getAttribute('data'))
          const y = parseInt(e.target.parentNode.getAttribute('data'))
          const txt = e.target.innerText
          const range = window.getSelection().getRangeAt(0)

          this.$set(this.code[y].children[x], 'text', txt.substring(0, range.startOffset))

          const newChildren = [{id: this.nextId++, text: txt.substring(range.startOffset)}]
          window.console.log(txt.substring(0, range.startOffset), txt.substring(range.startOffset))
          if (this.code[y].children.length - 1 > x) {
            const children = this.code[y].children.slice(x + 1)
            this.$set(this.code[y], 'children', this.code[y].children.slice(0, x + 1))
            this.code.splice(y + 1, 0, {id: this.nextId++, children: newChildren.concat(children)})
          } else {
            this.code.splice(y + 1, 0, {id: this.nextId++, children: newChildren})
          }
          this.active[0] = y + 1
          this.active[1] = 0
          this.force = false
          this.$nextTick(() => {
            window.console.log(y + 1, x)
            const obj = window.document.querySelector('.line[data="' + (y + 1) + '"] > .block[data="0"]')
            window.console.log(obj)
            obj.focus()
            // this.keepLastIndex(window.document.querySelector('[contenteditable=true]'))
            this.force=true
          })
        } else if (e.keyCode === 8) {
          window.console.log(e)
        }
      },
      changeCursorAction (e) {
        // window.console.log(e.target)
        if (e.target.classList.contains('block')) {
          this.$set(this.active, 1, parseInt(e.target.getAttribute('data')))
          this.$set(this.active, 0, parseInt(e.target.parentNode.getAttribute('data')))
          // let eventObj = window.document.createEvent('MouseEvents')
          // eventObj.initMouseEvent('click',true,true,window,1,12,345,7,220,false,false,true,false,0,null)
          // e.target.dispatchEvent(eventObj)
          // window.document.elementFromPoint(502, 153).click()
        }
      },
      keepLastIndex (obj) {
        if (window.getSelection) {
          obj.focus()
          let range = window.getSelection()
          range.selectAllChildren(obj)
          range.collapseToEnd()
        } else if (document.selection) {
          let range = document.selection.createRange()
          range.moveToElementText(obj)
          range.collapse(false)
          range.select()
        }
      }
    }
  }
</script>

<style scoped="true">
  div { border: none; outline: none; }
  .block { display: inline-block; min-width: 5px; }
</style>