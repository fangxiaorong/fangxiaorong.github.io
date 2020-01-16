import Vue from 'vue'
import FlatButton from './FlatButton'

import Editor from './Editor'
import Markdown from '../apps/markdown'

const components = {
  install (vue) {
    vue.component('FlatButton', FlatButton)
    vue.component('Editor', Editor)
    vue.component('Markdown', Markdown)
  }
}

Vue.use(components)
