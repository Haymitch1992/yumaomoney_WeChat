<template>
  <div id="app">
    <x-header :left-options='{showBack: false}' v-show="$route.path === '/Events'" class="header-fixed">在线活动</x-header>
    <x-header :left-options='{showBack: false}' v-show="$route.path === '/Lending'" class="header-fixed">出借投资</x-header>
    <div class="content-box">
      <router-view></router-view>
    </div>
    {{GLOBAL.token}}
    <tabbar class="footer-fixed">
      <tabbar-item link="Events" :selected="$route.path === '/Events'">
        <img slot="icon" src="./assets/foot-xx.png">
        <img slot="icon-active" src="./assets/foot-xx-active.png">
        <span slot="label">活动</span>
      </tabbar-item>
      <tabbar-item link="Lending" :selected="$route.path === '/Lending'">
        <img slot="icon" src="./assets/foot-tz.png">
        <img slot="icon-active" src="./assets/foot-tz-active.png">
        <span slot="label">出借</span>
      </tabbar-item>
      <tabbar-item link="User" :selected="$route.path === '/User'">
        <img slot="icon" src="./assets/foot-wd.png">
        <img slot="icon-active" src="./assets/foot-wd-active.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: this.GLOBAL.token
    }
  },
  methods: {
    fetchDate () {
      // 使用 axios获取数据
      console.log(this.GLOBAL.token)
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchDate'
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#app .header-fixed{
  position: fixed;
  top: 0;
  z-index: 500;
  width: 100%;
}
#app .footer-fixed{
  position: fixed;
  bottom: 0;
}
.content-box{
  padding: 46px 0 53px;
}
</style>
