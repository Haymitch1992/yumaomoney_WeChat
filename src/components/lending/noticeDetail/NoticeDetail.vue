<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">公告详情</x-header>
    <div class="header">
      <div class="title">{{item.title}}</div>
      <div><span class="pr10">上传时间：{{item.senddate}}</span><span>浏览次数：{{item.click}}</span></div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
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
        if (!self.parmes.type || (self.parmes.pageNum === self.parmes.pageNext)) {
          return
        }
        self.parmes.type = false
        $.getJSON('https://yumaomoney.com/api/jsonPage.php?ac=list&id=' + self.parmes.id + '&pageNum=' + (self.parmes.pageNext ? self.parmes.pageNext : self.parmes.pageNum) + '&pageSize=' + self.parmes.pageSize + '&jsoncallback=?', function (data) {
          self.parmes.pageNum = data.pageNum
          self.parmes.pageNext = data.pageNext
          self.parmes.pagePre = data.pagePre
          self.parmes.pageTotal = data.pageTotal
          self.parmes.total = data.total
          _.each(data.data, function (v) {
            v.title = v.title.replace(/^【\d{4}-\d{2}-\d{2}】/g, '')
            self.data.push(v)
          })
          self.parmes.type = true
        })
      },
      init () {
        var self = this
        self.item = self.$route.params.item
        console.log(self.item)
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
</style>
