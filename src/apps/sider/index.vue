<template>
  <div class="light-background">
    <div class="search primary-background separate-bottom">
      <i class="fab fa fa-search" aria-hidden="true"></i>
      <input placeholder="输入搜索内容">
    </div>
    <div class="block" v-for="(item, idx) in items" :key="idx">
      <div class="title" v-text="item.title"></div>
      <ul>
        <a href="javascript:void(0)" v-for="(bar, idy) in item.children" :key="idy">
          <li><i class="fab fa" :class="['fa-' + bar.icon]" aria-hidden="true"></i><span v-text="bar.text"></span></li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'GUIDE',
            children: [
              {icon: 'bars', text: 'Kenrick'},
              {icon: 'bath', text: 'To watch'},
              {icon: 'bicycle', text: 'Subscriptions'},
              {icon: 'database', text: 'Social'},
              {icon: 'car', text: 'History'},
              {icon: 'book', text: 'Watch later'}
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped="true">
  .search { padding: 2px 5px; }
  .search input { width: 100%; height: 32px; border-radius: 18px; padding: 5px 10px; padding-left: 40px; background: white; font-size: 16px; }
  .search i { position: absolute; left: 18px; top: 10px; }
  ul { font-size: 1.2em; }
  li { padding: 4px 4px; }
  li i { width: 30px; }
  .title { padding-left: 10px; font-size: 0.7em; }
  .block li { padding-left: 10px; }
  a:hover { color: black; }
  a:hover li { background: #EEE; }
</style>
