<template>
  <div>
    <x-header>设置</x-header>
    <group>
      <cell title="密码管理" is-link></cell>
      <cell title="三方账号管理" is-link></cell>
      <cell title="地址管理" is-link></cell>
      <cell title="关于" is-link></cell>
      <cell title="清除缓存"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Setting',
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

<style>
</style>
