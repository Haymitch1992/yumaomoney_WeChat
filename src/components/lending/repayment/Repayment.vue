<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">到期还款</x-header>
    <group>
      <cell primary="title" v-for="item in data" :title="item.title" :value="item.pubdate" :link="item.url" :key="item.id" is-link></cell>
    </group>
  </div>
</template>

<script>
  import _ from 'lodash'
  import $ from 'jquery'
  import { Group, XHeader, Cell } from 'vux'

  export default {
    name: 'SakeInligting',
    components: {
      Group,
      XHeader,
      Cell
    },
    data () {
      return {
        data: {},
        leftOptions: {
          preventGoBack: true
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 4}})
      },
      getList () {
        var self = this
        self.parmes = {
          ac: 'list',
          id: 11,
          pageSize: 20,
          pageNum: 1
        }
        $.getJSON('https://yumaomoney.com/api/jsonPage.php?ac=list&id=' + 11 + '&pageNum=' + 1 + '&pageSize=' + 20 + '&jsoncallback=?', function (data) {
          console.log(data)
          _.each(data.data, function (v) {
            v.title = v.title.replace(/^【\d{4}-\d{2}-\d{2}】/g, '')
          })
          self.data = data.data
          console.log(self.data)
        })
        /**
         * 虽然本地可以请求到数据但部署后跨域
         */
//        axios.get(process.env.INFO_API + '/api/jsonPage.php', {params: self.parmes})
//          .then(function (res) {
//            console.log(res.data)
//            _.each(res.data.data, function (v) {
//              v.title = v.title.replace(/^【\d{4}-\d{2}-\d{2}】/g, '')
//            })
//            self.data = res.data.data
//            console.log(self.data)
//          })
//          .catch(function (error) {
//            console.log(error)
//          })
      },
      init () {
        var self = this
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
  .table-box{
    padding: 15px;
    font-size: 12px;
  }
  .table-box table tbody tr td{
    text-align: left;
    padding: 0 10px;
  }
  .table-box table tbody tr .more-text {
    padding: 10px;
    line-height: 20px;
  }
</style>
