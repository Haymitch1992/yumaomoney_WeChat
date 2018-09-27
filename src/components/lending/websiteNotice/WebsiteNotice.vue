<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">官网公告</x-header>
    <group>
      <cell primary="title" v-for="item in data" :title="item.title" :value="item.publishTime" :link="'/frontNewsDetails.do?id='+item.id" :key="item.id" is-link></cell>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, XHeader, Cell } from 'vux'

  export default {
    name: 'WebsiteNotice',
    components: {
      Group,
      XHeader,
      Cell
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: []
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 4}})
      },
      getList () {
        var self = this
        self.parmes = {
          PageNum: 1,
          PageSize: 10
        }
        axios.get(process.env.BASE_API + '/queryNewsListPage.do', {params: { 'paramMap.PageNum': self.parmes.PageNum, 'paramMap.PageSize': self.parmes.PageSize }})
          .then(function (res) {
            _.each(res.data, function (v) {
              console.log(v)
              v.publishTime = moment(v.publishTime).format('YYYY-MM-DD')
              self.data.push(v)
            })
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
</style>
