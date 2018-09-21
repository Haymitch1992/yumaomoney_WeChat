<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer-box" v-if="$route.path === '/events' || $route.path === '/lending' || $route.path === '/user'">
      <tabbar class="footer-fixed">
        <tabbar-item link="/lending" :selected="$route.path === '/lending'">
          <img slot="icon" src="./assets/images/foot-tz.png">
          <img slot="icon-active" src="./assets/images/foot-tz-active.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/events" :selected="$route.path === '/events'">
          <img slot="icon" src="./assets/images/foot-xx.png">
          <img slot="icon-active" src="./assets/images/foot-xx-active.png">
          <span slot="label">活动</span>
        </tabbar-item>
        <tabbar-item link="/user" :selected="$route.path === '/user'">
          <img slot="icon" src="./assets/images/foot-wd.png">
          <img slot="icon-active" src="./assets/images/foot-wd-active.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </div>
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
  .header-box{
    padding-top: 46px;
  }
  .footer-box{
    padding-bottom: 53px;
  }
</style>
