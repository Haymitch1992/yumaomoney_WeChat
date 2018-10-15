<template>
  <div>
    <x-header>资金记录</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">充值记录</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">提现记录</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">投资记录</tab-item>
      <tab-item :selected="list.listType === 4" @on-item-click="list.listType = 4">还款记录</tab-item>
      <tab-item :selected="list.listType === 5" @on-item-click="list.listType = 5">其他</tab-item>
    </tab>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

  export default {
    name: 'Note',
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
