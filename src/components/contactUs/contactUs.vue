<template>
  <div>
    <x-header>联系我们</x-header>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">{{item.time}}</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker } from 'vux'
  export default {
    name: 'contactUs',
    components: {
      Group,
      Cell,
      XHeader,
      Masker
    },
    data () {
      return {
        list: [
          {
            title: '抢标有礼 标标返现',
            img: 'http://39.107.59.233/activity/banner-wechat-003.jpg',
            time: '2018-05-18'
          }, {
            title: '用户交易总额 突破7亿元',
            img: 'http://39.107.59.233/activity/banner-wechat-004.png',
            time: '2018-06-18'
          }, {
            title: '传统二十四节气 & 小暑',
            img: 'http://39.107.59.233/activity/banner-wechat-001.png',
            time: '2018-07-07'
          }, {
            title: '七七事变 81周年',
            img: 'http://39.107.59.233/activity/banner-wechat-002.png',
            time: '2018-07-07'
          }, {
            title: '八一建军 91周年',
            img: 'http://39.107.59.233/activity/banner-wechat-006.png',
            time: '2018-08-01'
          }, {
            title: '传统二十四节气 & 立秋',
            img: 'http://39.107.59.233/activity/banner-wechat-007.png',
            time: '2018-08-07'
          }, {
            title: '新版APP 亮点',
            img: 'http://39.107.59.233/activity/banner-wechat-008.png',
            time: '2018-09-01'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-img {
    padding-bottom: 45%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
</style>
