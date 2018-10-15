<template>
  <div>
    <x-header>地址管理</x-header>
    <group>
      <cell title="添加收货人" is-link link="/user/setting/address/consignee"></cell>
      <cell title="编辑收货人" is-link link="/user/setting/address/consigneeEdit"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Address',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {}
    }
  }
</script>
