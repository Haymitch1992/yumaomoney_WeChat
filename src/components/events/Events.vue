<template>
  <div>
    <div class="header-box">
      <x-header :left-options='{showBack: false}' class="header-fixed">在线活动</x-header>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker } from 'vux'
  export default {
    name: 'Events',
    components: {
      Group,
      Cell,
      XHeader,
      Masker
    },
    data () {
      return {
        list: [{
          title: '洗颜新潮流！人气洁面皂排行榜',
          img: 'http://39.107.59.233/activity/banner-wechat-003.jpg'
        }, {
          title: '美容用品 & 日用品（上）',
          img: 'http://39.107.59.233/activity/banner-wechat-003.jpg'
        }, {
          title: '远离车内毒气，日本车载空气净化器精选',
          img: 'http://39.107.59.233/activity/banner-wechat-003.jpg'
        }, {
          title: '美容用品 & 日用品（上）',
          img: 'http://39.107.59.233/activity/banner-wechat-003.jpg'
        }, {
          title: '远离车内毒气，日本车载空气净化器精选',
          img: 'http://39.107.59.233/activity/banner-wechat-003.jpg'
        }]
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
