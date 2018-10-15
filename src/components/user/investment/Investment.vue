<template>
  <div>
    <x-header>我的投资</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">融资中</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">还款中</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已还清</tab-item>
    </tab>
    <group title="cell demo">
      <cell title="标的详情" value="cool" is-link link="/user/investment/investmentDetail"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

  export default {
    name: 'Investment',
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
