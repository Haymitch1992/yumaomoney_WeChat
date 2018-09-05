<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer-box">
      <tabbar class="footer-fixed">
        <tabbar-item link="events" :selected="$route.path === '/events'">
          <img slot="icon" src="./assets/foot-xx.png">
          <img slot="icon-active" src="./assets/foot-xx-active.png">
          <span slot="label">活动</span>
        </tabbar-item>
        <tabbar-item link="lending" :selected="$route.path === '/lending'">
          <img slot="icon" src="./assets/foot-tz.png">
          <img slot="icon-active" src="./assets/foot-tz-active.png">
          <span slot="label">出借</span>
        </tabbar-item>
        <tabbar-item link="user" :selected="$route.path === '/user'">
          <img slot="icon" src="./assets/foot-wd.png">
          <img slot="icon-active" src="./assets/foot-wd-active.png">
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
