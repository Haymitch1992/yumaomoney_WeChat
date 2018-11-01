<template>
  <div>
    <!--微信端不显示头部-->
    <!--<div class="header-box">-->
      <!--<x-header :left-options='{showBack: false}' class="header-fixed">在线活动</x-header>-->
    <!--</div>-->
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;" @click.native="go(item.wechatlink)">
        <div class="m-img" :style="{backgroundImage: 'url(' + href + item.wechatBanner + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">{{item.endTime}}</span>
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
        href: '',
        list: []
      }
    },
    methods: {
      go (link) {
        window.location.href = link
      },
      getList () {
        var self = this
        self.$http.get(process.env.BASE_API + '/jsonData/activity.json')
          .then(function (res) {
            self.list = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.href = window.location.origin
        /**
         * TODO 本地测试环境调试使用 正式环境部署需删除
         * @type {string}
         */
        self.href = 'http://39.107.59.233'
        self.getList()
      }
    },
    created () {
      var self = this
      self.init()
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
