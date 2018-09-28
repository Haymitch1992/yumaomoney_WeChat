<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">公告详情</x-header>
    <div class="notice-header">
      <div class="notice-title">{{item.title}}</div>
      <div><span class="pr10">上传时间：{{item.senddate}}</span><span>浏览次数：{{item.click}}</span></div>
    </div>
    <div class="notice-line"></div>
    <div id="notice-content"></div>
  </div>
</template>

<script>
//  import _ from 'lodash'
  import $ from 'jquery'
  import { Group, XHeader, Cell, Divider } from 'vux'

  export default {
    name: '',
    components: {
      Group,
      XHeader,
      Cell,
      Divider
    },
    data () {
      return {
        item: {},
        data: [],
        leftOptions: {
          preventGoBack: true
        }
      }
    },
    methods: {
      goBack () {
        var self = this
        if (self.item.typeid === '11') {
          self.$router.push({path: '/lending/disclosure/repayment'})
        } else if (self.item.typeid === '10') {
          self.$router.push({path: '/lending/disclosure/payNotice'})
        } else if (self.item.typeid === '8') {
          self.$router.push({path: '/lending/disclosure/mediaReport'})
        }
      },
      getList () {
        var self = this
        $.getJSON('https://yumaomoney.com/api/json.php?ac=article&id=' + self.item.id + '&jsoncallback=?', function (data) {
          $('#notice-content').append(data[0].body)
        })
      },
      init () {
        var self = this
        if (self.$route.params.item === undefined) {
          this.$router.push({name: 'disclosure', params: {listType: 4}})
        }
        self.item = self.$route.params.item
        self.getList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .notice-header {
    text-align: center;
    margin-top: 10px;
    color: #888;
    height: 60px;
    font-size: 12px;
  }
  .notice-title {
    color: #555;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .notice-line {
    margin: 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  .pr10 {
    padding-right: 10px;
  }
  #notice-content {
    padding: 10px 20px;
  }
  #notice-content img {
    width: 100% !important;
    height: auto !important;
  }
</style>
