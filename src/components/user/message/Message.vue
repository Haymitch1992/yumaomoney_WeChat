<template>
  <div>
    <x-header>通知中心</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">全部</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">系统</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">活动</tab-item>
      <tab-item :selected="list.listType === 4" @on-item-click="list.listType = 4">投资</tab-item>
    </tab>
    <group title="cell demo">
      <cell title="信息详情" value="cool" is-link link="/user/message/messageDetail"></cell>
      <cell title="推送设置" value="cool" is-link link="/user/message/pushSettings"></cell>
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
    }
  }
</script>
