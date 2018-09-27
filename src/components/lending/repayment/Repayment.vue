<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">到期还款</x-header>
    <group>
      <cell primary="title" v-for="item in data" :title="item.title" :value="item.senddate" :link="item.url" :key="item.id" is-link></cell>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
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
        axios.get(process.env.INFO_API + '/api/jsonPage.php', {params: self.parmes})
          .then(function (res) {
            console.log(res.data)
            _.each(res.data.data, function (v) {
//              console.log(v)
              v.title = v.title.replace(/^【\d{4}-\d{2}-\d{2}】/g, '')
            })
            self.data = res.data.data
            console.log(self.data)
          })
          .catch(function (error) {
            console.log(error)
          })
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
