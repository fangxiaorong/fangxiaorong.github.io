<template>
  <div class="desktop">
    <Header :buttons="buttons" @action="headAction" />
    <div class="container">
      <component :is="app.type" v-for="app in apps" :key="app.id"></component>
    </div>
    <Panel :state="panelShow" />
    <Search :state="searchShow" />
  </div>
</template>

<script>
  import Header from './Header'
  import Panel from './Panel'
  import Search from './Search'

  export default {
    components: { Header, Panel, Search },
    data () {
      return {
        buttons: [
          {icon: 'fa-search', text: '', action: 'search'},
          {icon: 'fa-bars', text: '', action: 'panel'}
        ],
        panelShow: false,
        searchShow: false,
        apps: [
          {id: 123, type: 'Markdown'}
        ],

      }
    },
    mounted () {
      window.document.addEventListener('click', this.hiddenAllAction)
    },
    methods: {
      headAction (type) {
        switch (type) {
          case 'panel':
            this.searchShow = false
            this.panelShow = !this.panelShow
            break
          case 'search':
            this.panelShow = false
            this.searchShow = !this.searchShow
            break
        }
      },
      hiddenAllAction () {
        if (this.panelShow) {
          this.panelShow = false
        }
        if (this.searchShow) {
          this.searchShow = false
        }
      }
    }
  }
</script>

<style scoped="true">
  .desktop { width: 100%; height: 100%; color: white; }
  .container { height: calc(100% - 37px); position: relative; overflow: auto; }
  @media (min-width: 1024px) {
    .container { padding: 0 calc((100% - 743px) / 4); }
  }
</style>


<!-- <div style="padding: 10px; display: inline-block; vertical-align: top;">
  <div>
    <div style="width: 50%; display: inline-block; vertical-align: top;">
      <div style="height: 110px; overflow: hidden;">
        <div style="font-size: 100px; display: inline-block; background-color: #eeeeee;font-weight: bolder;margin-top: -5px;">05</div>
        <div style="display: inline-block; font-size: 24px; background-color: #eeeeee; vertical-align: bottom;margin-bottom: 20px;">2020年1月</div>
      </div>
      <div style="padding: 0 20px;">一段简单文字</div>
      <div style="padding: 0 20px;">记录过去</div>
      <div style="padding: 0 20px;">谱写现在</div>
      <div style="padding: 0 20px;">描绘未来</div>
      <div style="padding: 0 20px;">也许未来某一天，回望一段段文字</div>
    </div>
    <img src="/static/imgs/bg.jpg" width="50%" style="display: inline-block; filter: grayscale(100%);">
  </div>
  <div>这个是文字内容。</div>
  <div>这个是文字内容。</div>
  <div>这个是文字内容。</div>
  <div>这个是文字内容。</div>
</div>
<div style="display: inline-block; width: 30%; border: 1px solid #eee; vertical-align:top;" v-for="i in 13" :key="i">
  <div>Hello....</div>
  <div>Hello....</div>
  <div>Hello....</div>
  <div>Hello....</div>
  <div>Hello....</div>
</div> -->