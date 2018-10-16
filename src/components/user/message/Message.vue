<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="goSetting()">通知中心</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">全部</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">系统</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">活动</tab-item>
      <tab-item :selected="list.listType === 4" @on-item-click="list.listType = 4">投资</tab-item>
    </tab>
    <group>
      <cell value="2018-10-09 23:23:23" is-link link="/user/message/messageDetail">
        <span slot="title" class="cell-overflow">用户还款资金收入报告</span>
      </cell>
      <cell value="2018-10-09 23:23:23" is-link link="/user/message/messageDetail">
        <span slot="title" class="cell-overflow">理财投资成功报告</span>
      </cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

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
        list: {
          listType: 1
        }
      }
    },
    methods: {
      goSetting () {
        this.$router.push({
          name: `pushSettings`,
          params: {}
        })
      }
    }
  }
</script>
