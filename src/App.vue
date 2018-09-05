<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
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
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
