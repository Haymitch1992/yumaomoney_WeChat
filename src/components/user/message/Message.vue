<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()" :right-options="{showMore: true}" @on-click-more="goSetting()">通知中心</x-header>
    <tab>
      <tab-item :selected="list.listType === 0" @on-item-click="changeTab(0)">全部</tab-item>
      <tab-item :selected="list.listType === 1" @on-item-click="changeTab(1)">系统</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="changeTab(2)">活动</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="changeTab(3)">投资</tab-item>
    </tab>
    <group>
      <cell :value="item.time" is-link :key="item.id" v-for="item in dataBak" @click.native="goDetail(item)">
        <span slot="title" class="cell-overflow">{{item.info}}</span>
      </cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'
  import _ from 'lodash'

  export default {
    name: 'Message',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: [
          {
            id: '1',
            type: 1,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '2',
            type: 1,
            info: '理财投资成功报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '3',
            type: 2,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '4',
            type: 2,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '5',
            type: 2,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '6',
            type: 2,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '7',
            type: 3,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '8',
            type: 3,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          },
          {
            id: '9',
            type: 3,
            info: '用户还款资金收入报告',
            link: '/user/message/messageDetail',
            time: '2018-10-09 23:23:23'
          }
        ],
        dataBak: [],
        list: {
          listType: 0
        }
      }
    },
    methods: {
      changeTab (type) {
        var self = this
        self.list.listType = type
        if (type > 0) {
          self.dataBak = _.filter(self.data, {type: type})
        } else {
          self.dataBak = self.data
        }
      },
      goDetail (item) {
        var self = this
        this.$router.push({name: 'messageDetail', params: {listType: self.list.listType, id: item.id}})
      },
      goSetting () {
        this.$router.push({
          name: `pushSettings`,
          params: {}
        })
      },
      goBack () {
        var self = this
        self.$router.push('/user')
      },
      init () {
        var self = this
        self.list.listType = self.$route.params.listType ? self.$route.params.listType : 0
        self.changeTab(self.list.listType)
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
