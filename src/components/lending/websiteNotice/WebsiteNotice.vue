<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">官网公告</x-header>
    <group>
      <cell title="【邀请好友】必读手册" value="2018-02-02" link="https://www.yumaomoney.com/moblieNewPage/public_detail.html?typeId=10&aid=1175" is-link></cell>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
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
          pageSize: 10,
          pageNum: 1
        }
        axios.get(process.env.INFO_API + '/api/jsonPage.php', {params: self.parmes})
          .then(function (res) {
            console.log(res.data)
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
