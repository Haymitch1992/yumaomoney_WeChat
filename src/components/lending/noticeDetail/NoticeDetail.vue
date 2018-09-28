<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">公告详情</x-header>
    <div class="header">
      <div class="title">{{item.title}}</div>
      <div><span class="pr10">上传时间：{{item.senddate}}</span><span>浏览次数：{{item.click}}</span></div>
    </div>
    <div id="content"></div>
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
        if (self.item === undefined) {
          this.$router.push({name: 'disclosure', params: {listType: 4}})
        } else {
          if (self.item.typeid === '11') {
            self.$router.push({path: '/lending/disclosure/repayment'})
          } else if (self.item.typeid === '10') {
            self.$router.push({path: '/lending/disclosure/payNotice'})
          } else if (self.item.typeid === '8') {
            self.$router.push({path: '/lending/disclosure/mediaReport'})
          }
        }
      },
      getList () {
        var self = this
        $.getJSON('https://yumaomoney.com/api/json.php?ac=article&id=' + self.item.id + '&jsoncallback=?', function (data) {
          console.log(data[0].body)
          $('#content').append(data[0].body)
        })
      },
      init () {
        var self = this
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
  .header {
    text-align: center;
    margin: 10px 0;
    color: #888;
  }
  .title {
    color: #555;
    margin-bottom: 10px;
  }
  .pr10 {
    padding-right: 10px;
  }
  #content {
    padding: 10px 20px;
  }
  #content img {
    width: 100% !important;
    height: auto !important;
  }
</style>
